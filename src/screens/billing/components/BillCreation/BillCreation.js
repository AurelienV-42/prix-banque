import React, {useState} from 'react';
import {getGlobal} from 'reactn';
import {Button, Grid, Paper, TextField, Typography} from '@material-ui/core';
import {useTranslation} from 'react-i18next';
import moment from 'moment';

import styles from './Styles';
import {sendBill, userExist} from '../../../../utils/communication';

const BillCreation = () => {

  const classes = styles();
  const {t} = useTranslation();
  const [confirm, setConfirm] = useState(false);
  const [emailExist, setEmailExist] = useState(true);
  const [email, setEmail] = useState('');
  const [deadlineDate, setDeadlineDate] = useState('');
  const [deadlineDateError, setDeadlineDateError] = useState(true);
  const [deadlineAnteriorError, setDeadlineAnteriorError] = useState(true);
  const [amount, setAmount] = useState(0);
  const [isNumeric, setIsNumeric] = useState(true);

  const handleConfirmInvoice = async () => {
    if (email === getGlobal().user.email) {
      setEmailExist(false);
      return;
    }
    let error = false;
    let momentDate = moment(deadlineDate, 'DD/MM/YYYY', true);
    if (momentDate.isValid() === false) {
      setDeadlineDateError(false); // TODO
      error = true;
    }
    if (momentDate < new Date()) {
      setDeadlineAnteriorError(false); // TODO
      error = true;
    }
    userExist(email).then(value => {
      setEmailExist(value);
      if (!error)
        setConfirm(value);
    });
  };

  const sendInvoice = () => {
    setConfirm(false);
    sendBill(email, amount, deadlineDate);
  };

  const checkNumericValue = (value) => {
    setAmount(value);
    if (Number(value) > 0)
      setIsNumeric(true);
    else {
      setIsNumeric(false);
    }
  };

  return (
    <Paper className={classes.paperEdit} elevation={0}>
      <Grid container>
        <Grid item xs={12}>
          <Typography className={classes.paperTitle} variant={'h5'}>{t('createInvoice')}</Typography>
        </Grid>
        <Grid className={classes.textField1Container} item xs={4}>
          <TextField className={classes.textField1} error={!emailExist}
                     helperText={emailExist === false ? t('emailAddressDoesNotExist') : ' '} label={t('personCharged')}
                     placeholder='test@example.com'
                     variant='filled' value={email} onChange={event => {
            setEmailExist(true);
            setEmail(event.target.value);
          }}/>
        </Grid>
        <Grid className={classes.textField2Container} item xs={3}>
          <TextField className={classes.textField2} error={!isNumeric}
                     helperText={isNumeric === false ? t('positiveNumberRequired') : ' '} label={t('amount')}
                     variant='filled'
                     value={amount}
                     onChange={event => {
                       checkNumericValue(event.target.value);
                     }}/>
        </Grid>
        <Grid className={classes.createBtnContainer} item xs={2}>
          <Button disabled={!isNumeric} className={classes.createBtn}
                  onClick={handleConfirmInvoice}>{t('createInvoice')}</Button>
        </Grid>
        <Grid className={classes.proceedBtnContainer} item xs={2}>
          {confirm === true ? <Button className={classes.proceedBtn} onClick={sendInvoice}>{t('proceed')}</Button> :
            <div/>}
        </Grid>
        <Grid className={classes.textField1Container} item xs={4}>
          <TextField id="date-textfield" className={classes.textField1}
                     value={deadlineDate} error={deadlineDateError === false || deadlineAnteriorError === false}
                     helperText={deadlineDateError === false ? t('invalidFormat') : deadlineAnteriorError === false ? t('invalidDate') : ' '} label={t('dueDate')}
                     placeholder='ex: 01/11/2021'
                     variant='filled' onChange={event => {
            setDeadlineDateError(true);
            setDeadlineDate(event.target.value);
          }}/>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BillCreation;
