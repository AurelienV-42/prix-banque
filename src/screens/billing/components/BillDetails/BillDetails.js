import React, {useState} from 'react';
import {Button, Grid, IconButton, Paper, Typography} from '@material-ui/core';
import {CloseRounded} from '@material-ui/icons';
import {useTranslation} from 'react-i18next';

import styles from './Styles';
import moment from 'moment';

import {payBill, deleteBill} from '../../../../utils/communication';

const BillDetails = ({selectedBill, setSelectedBill}) => {

  const classes = styles();
  const {t} = useTranslation();
  const pay = !!selectedBill.sender;
  const [paid, setPaid] = useState(selectedBill.paid);
  const [error, setError] = useState(false);

  const onClose = () => {
    setSelectedBill({});
  };

  return (
    <Paper className={classes.paperInfo} elevation={0}>
      <Grid container>
        <Grid className={classes.headerContainer} item xs={12}>
          <Grid container>
            <Grid className={classes.closeBtnContainer} item xs={1}>
              <IconButton className={classes.closeBtn} onClick={onClose}>
                <CloseRounded/>
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid className={classes.subInfoContainer} container>
            <Grid item xs={12}>
              <Typography variant='h6'>
                {t('createdBy') + ' ' + pay ? selectedBill.sender : 'me'}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6'>
                {t('date') + ' ' + moment(selectedBill.date?.toDate()).format('DD/MM/YYYY HH:mm')}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6'>
                {t('dueDate') + ' ' + moment(selectedBill.deadlineDate?.toDate()).format('DD/MM/YYYY')}
              </Typography>
            </Grid>
            {!pay &&
            <Grid item xs={12}>
              <Typography variant='h6'>
                {t('personCharged') + ' ' + selectedBill.payer}
              </Typography>
            </Grid>
            }
            <Grid item xs={12}>
              <Typography variant='h6'>
                {t('amount')}
              </Typography>
            </Grid>
            <Grid className={classes.paperAmountValueContainer} item xs={12}>
              <Typography variant='h4'>
                {selectedBill.value + '€'}
              </Typography>
            </Grid>
            {paid &&
            <Grid className={classes.confirmationTextContainer} item xs={12}>
              <Typography variant='h5'>
                {t('paid')}
              </Typography>
            </Grid>
            }
            {(pay && !paid) &&
            <div>
              <Grid className={classes.confirmationTextContainer} item xs={12}>
                <Typography variant='h5'>
                  {t('confirmPayment')}
                </Typography>
              </Grid>
              <Grid className={classes.confirmationBtnContainer} item xs={12}>
                <Button onClick={() => {
                  payBill(selectedBill.sender, selectedBill.id).then(value => {
                    if (value) {
                      setPaid(true);
                      setError(false);
                      setPaid(true);
                    } else {
                      setError(true);
                    }
                  });
                }} className={classes.payBtn} error={error} helperText={error === true ? t('notEnough') : ' '}>
                  {t('pay')}
                </Button>
                <Typography>
                  {error === true ? t('notEnough') : ''}
                </Typography>
              </Grid>
            </div>
            }
            {!pay &&
            <Grid className={classes.deleteBtnContainer} item xs={12}>
              <Button onClick={() => {
                deleteBill(selectedBill.id);
                onClose();}}
                      className={classes.deleteBtn}>
                {t('deleteInvoice')}
              </Button>
            </Grid>}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BillDetails;
