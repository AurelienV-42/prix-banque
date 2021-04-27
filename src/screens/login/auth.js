import {setGlobal} from 'reactn';
import config from '../../config/config';
import {auth, firestore} from '../../config/firebase';
import {getBills, getTransfers} from '../../utils/communication';
// firestore.doc(`users/${user.uid}`).update({firstName});
// firestore.doc(`users/${user.uid}`).update({lastName});

export const generateUserDocument = async (user) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    try {
      await userRef.set({
        email: user.email,
        value: 0,
      });
    } catch (error) {
      console.error('Error creating user document', error);
    }
  }
  setUserDocument(user.uid);
};

const setUserDocument = async uid => {
  if (!uid) return null;
  try {
    firestore
      .doc(`users/${uid}`)
      .onSnapshot((value) => {
        setGlobal({
          user: {
            ...config.userDefault,
            uid,
            ...value.data(),
          }
        });
      });

    firestore
      .collection(`users/${uid}/transactions`)
      .onSnapshot((value) => {
        let tmp = [];
        value.forEach(item => {
          tmp.push(item.data());
        });
        setGlobal({
          transactions: tmp
        });
      });

    firestore
      .collection(`bills/`)
      .onSnapshot(async () => {
        setGlobal({
          bills: await getBills()
        });
      });

    firestore
      .collection(`transfers/`)
      .onSnapshot(async () => {
        setGlobal({
          transfers: await getTransfers()
        });
      });

  } catch (error) {
    console.error('Error fetching user', error);
  }
};

const createUserWithEmailAndPasswordHandler = async (mail, password, setError, history) => {
  auth.createUserWithEmailAndPassword(mail, password).then((userCredential) => {
    let user = userCredential.user;
    generateUserDocument(user);
    history.push('/onboarding');
  })
    .catch(() => {
      setError('connectionError');
    });
};

export const signInWithEmailAndPasswordHandler = async (email, password, setError, history) => {
  auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
    let user = userCredential.user;
    generateUserDocument(user);
    history.push('/accouunt');
  })
    .catch(() => {
      setError('connectionError');
    });
};

export default createUserWithEmailAndPasswordHandler;
