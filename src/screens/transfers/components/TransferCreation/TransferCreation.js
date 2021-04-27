import React, {useState} from 'react';

import {Button, Grid, Paper, TextField, Typography} from '@material-ui/core';

import {makeATransfer, userExist} from '../../../../utils/communication';

import {useTranslation} from 'react-i18next';

import styles from './Styles';
import {getGlobal} from 'reactn';

const TransferCreation = () => {

  const classes = styles();
  const {t} = useTranslation();
  const [confirm, setConfirm] = useState(false);
  const [emailExist, setEmailExist] = useState(true);
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(0);
  const [isNumeric, setIsNumeric] = useState(true);
  const [errorNoMoney, setErrorNoMoney] = useState(false);

  const handleConfirmInvoice = async () => {
    userExist(email).then(value => {
      setEmailExist(value);
      setConfirm(value);
    });
  };

  const sendTransfer = async () => {
    if (email === getGlobal().user.email) {
      setEmailExist(false);
      return;
    }
    setConfirm(false);
    setErrorNoMoney(!await makeATransfer(email, Number(amount)));
  };

  const checkNumericValue = (value) => {
    setAmount(value);
    if (Number(value) > 0)
      setIsNumeric(true);
    else
      setIsNumeric(false);
  };
  return (
    <Paper className={classes.paper} elevation={0}>
      <Grid container>
        <Grid item xs={12}>
          <Typography className={classes.paperTitle} variant='h5'>{t('makeTransfer')}</Typography>
        </Grid>
        <Grid className={classes.textField1Container} item xs={4}>
          <TextField className={classes.textField1} error={!emailExist}
                     helperText={emailExist === false ? t('emailAddressDoesNotExist') : ' '} label={t('beneficiary')}
                     placeholder='test@example.com'
                     variant='filled' value={email} onChange={event => {
            setEmailExist(true);
            setEmail(event.target.value);
          }}/>
        </Grid>
        <Grid className={classes.textField2Container} item xs={3}>
          <TextField className={classes.textField2}
                     error={isNumeric === false || errorNoMoney === true}
                     helperText={isNumeric === false ? t('positiveNumberRequired') : errorNoMoney === true ? t('notEnough') : ' '} label={t('amount')}
                     variant='filled'
                     value={amount}
                     onChange={event => {
                       setErrorNoMoney(false);
                       checkNumericValue(event.target.value);
                     }}/>
        </Grid>
        <Grid className={classes.creatBtnContainer} item xs={2}>
          <Button disabled={!isNumeric} className={classes.createBtn}
                  onClick={handleConfirmInvoice}>{t('createTransfer')}</Button>
        </Grid>
        <Grid className={classes.creatBtnContainer} item xs={2}>
          {confirm === true ? <Button className={classes.createBtn} onClick={sendTransfer}>{t('proceed')}</Button> :
            <div/>}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TransferCreation;
