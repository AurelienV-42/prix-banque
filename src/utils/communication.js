import {getGlobal} from 'reactn';
import {firestore} from '../config/firebase';
import firebase from 'firebase/app';

import moment from 'moment';

export const userExist = async (mailAddress) => {
  return (await firestore
    .collection('users')
    .where('email', '==', mailAddress)
    .get()
    .then((value) => {
      return value.docs.length > 0;
    }));
};

export const getBills = async (toPay) => {
  if (!getGlobal().user?.uid) return;
  let returnValue = await firestore
    .collection('bills')
    .where('payer', '==', getGlobal().user?.uid)
    .get()
    .then((value) => {
      return value.docs.map(doc => {
        return {...doc.data(), id: doc.id};
      });
    });
  if (!toPay)
    await firestore
      .collection('bills')
      .where('sender', '==', getGlobal().user?.uid)
      .get()
      .then((value) => {
        value.docs?.forEach(doc => {
          returnValue.push({...doc.data(), id: doc.id});
        });
      });

  returnValue = await Promise.all(returnValue.map(async doc => {
    if (getGlobal().user?.uid !== doc.sender) {
      return (
        await firestore
          .doc(`users/${doc.sender}`)
          .get()
          .then(user => {
            return {
              deadlineDate: doc.deadlineDate,
              sender: user.data().email,
              paid: doc.paid,
              value: Number(doc.value).toFixed(2),
              date: doc.date,
              id: doc.id
            };
          })
      );
    } else {
      return (
        await firestore
          .doc(`users/${doc.payer}`)
          .get()
          .then(user => {
            return {
              deadlineDate: doc.deadlineDate,
              payer: user.data().email,
              paid: doc.paid,
              value: Number(doc.value).toFixed(2),
              date: doc.date,
              id: doc.id
            };
          })
      );
    }
  }));
  return returnValue;
};

export const sendBill = async (mailAddress, billValue, deadlineDate) => {
  firestore
    .collection('users')
    .where('email', '==', mailAddress)
    .get()
    .then((value) => {
      const otherId = value.docs[0].id;
      const bill = {
        value: Number(billValue),
        sender: getGlobal().user?.uid,
        payer: otherId,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        deadlineDate: firebase.firestore.Timestamp.fromDate(moment(deadlineDate, 'DD/MM/YYYY').toDate()),
        paid: false,
      };
      firestore
        .collection('bills')
        .add(bill);
    });
};

const transfer = (otherId, value, mailAddress) => {
  if (getGlobal().user?.value - value < 0)
    return false;
  // Remove money
  firestore
    .doc(`users/${getGlobal().user?.uid}`)
    .update({value: getGlobal().user?.value - value});
  firestore.collection(`users/${getGlobal().user?.uid}/transactions`).add({
    value: -value,
    date: firebase.firestore.Timestamp.fromDate(new Date()),
    to: mailAddress,
  });

  // Give money
  firestore
    .doc(`users/${otherId}`)
    .get()
    .then(snapshot => {
      let money = Number(snapshot.data().value ? snapshot.data().value : 0);
      money += Number(value);
      firestore
        .doc(`users/${otherId}`)
        .update({value: money});
    });
  firestore.collection(`users/${otherId}/transactions`).add({
    value: value,
    date: firebase.firestore.Timestamp.fromDate(new Date()),
    from: getGlobal().user?.email
  });
  return true;
};

export const payBill = async (mailAddress, id) => {
  return (await firestore
    .collection('users')
    .where('email', '==', mailAddress)
    .get()
    .then(async (value) => {
      const otherId = value.docs[0].id;
      return (await firestore
        .doc(`bills/${id}`)
        .get()
        .then((doc) => {
          const bill = doc.data();
          const success = transfer(otherId, Number(bill.value), mailAddress);

          if (success) {
            firestore
              .doc(`bills/${id}`)
              .update({paid: true});
          }
          return success;
        }));
    }));
};

export const deleteBill = async (id) => {
  await firestore
    .doc(`bills/${id}`)
    .delete();
}

export const getTransfers = async () => {
  if (!getGlobal().user?.uid) return;
  let returnValue = await firestore
    .collection('transfers')
    .where('payer', '==', getGlobal().user?.uid)
    .get()
    .then((value) => {
      return value.docs.map(doc => {
        return {...doc.data(), id: doc.id};
      });
    });
  await firestore
    .collection('transfers')
    .where('sender', '==', getGlobal().user?.uid)
    .get()
    .then((value) => {
      value.docs?.forEach(doc => {
        returnValue.push({...doc.data(), id: doc.id});
      });
    });

  returnValue = await Promise.all(returnValue.map(async doc => {
    if (getGlobal().user?.uid !== doc.sender) {
      return (
        await firestore
          .doc(`users/${doc.sender}`)
          .get()
          .then(user => {
            return {
              sender: user.data().email,
              value: Number(doc.value).toFixed(2),
              date: doc.date,
            };
          })
      );
    } else {
      return (
        await firestore
          .doc(`users/${doc.payer}`)
          .get()
          .then(user => {
            return {
              payer: user.data().email,
              value: Number(doc.value).toFixed(2),
              date: doc.date,
            };
          })
      );
    }
  }));
  return returnValue;
};

export const makeATransfer = async (mailAddress, transferValue) => {
  return (firestore
    .collection('users')
    .where('email', '==', mailAddress)
    .get()
    .then(async (value) => {
      const otherId = value.docs[0].id;
      let enoughMoney = await transfer(otherId, transferValue, mailAddress);
      if (enoughMoney) {
        const transferData = {
          value: Number(transferValue),
          sender: getGlobal().user?.uid,
          payer: otherId,
          date: firebase.firestore.Timestamp.fromDate(new Date()),
        };
        firestore
          .collection('transfers')
          .add(transferData);
      }
      return enoughMoney;
    }));
};

export const addMoney = (amount) => {
  const value = Number(amount);
  firestore
    .doc(`users/${getGlobal().user?.uid}`)
    .update({value: Number(Number(getGlobal().user?.value) + value)});

  firestore
    .collection(`users/${getGlobal().user?.uid}/transactions`)
    .add({
      value: Number(value),
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      from: getGlobal().user?.email
    });
};
