import React, {useState} from 'react';

import {Backdrop, Button, Fade, Grid, Modal, Paper, TextField, Typography} from '@material-ui/core';

import {useTranslation} from 'react-i18next';

import styles from './Styles';
import {addMoney} from '../../../../utils/communication';

const AccountBalanceModal = ({open, setOpen}) => {

  const classes = styles();
  const {t} = useTranslation();
  const [isNumeric, setIsNumeric] = useState(true);
  const [amount, setAmount] = useState(0);

  const handleClose = () => {
    setOpen(false);
  };

  const checkNumericValue = (value) => {
    setAmount(value);
    if (Number(value) > 0)
      setIsNumeric(true);
    else
      setIsNumeric(false);
  };

  const addFunds = () => {
    addMoney(amount);
  };

  return (
    <Modal className={classes.modal} open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop}
           BackdropProps={{timeout: 500}}>
      <Fade in={open}>
        <Paper className={classes.paper} elevation={0}>
          <Grid container>
            <Grid item xs={12}>
              <Typography className={classes.headerContainer} variant='h5'>{t('addFund')}</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid className={classes.textfieldContainer} item xs={6}>
              <TextField error={!isNumeric} helperText={isNumeric === false ? t('positiveNumberRequired') : ' '}
                         label={t('amount')} variant='filled'
                         value={amount}
                         onChange={event => {
                           checkNumericValue(event.target.value);
                         }}/>
            </Grid>
            <Grid className={classes.btnContainer} item xs={3}>
              <Button disabled={!isNumeric} onClick={() => {
                addFunds();
                setOpen(false);
              }} className={classes.btn}>{t('proceed')}</Button>
            </Grid>
          </Grid>
        </Paper>
      </Fade>
    </Modal>
  );
};

export default AccountBalanceModal;
