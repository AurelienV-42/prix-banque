import React from 'react';

import {Grid, IconButton, Paper, Typography,} from '@material-ui/core';

import {CloseRounded} from '@material-ui/icons';

import styles from './Styles';
import {useTranslation} from 'react-i18next';


const PaymentDetails = ({selected, setSelectedItem}) => {

  const classes = styles();
  const {t} = useTranslation();

  const onClose = () => {
    setSelectedItem({});
  };

  return (
    <Paper className={classes.paperInfo} elevation={0}>
      <Grid container>
        <Grid item xs={9}>
          <Typography className={classes.headerContainer} variant={'h5'}>{t('details')}</Typography>
        </Grid>
        <Grid item xs={3}>
          <IconButton onClick={onClose}>
            <CloseRounded/>
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PaymentDetails;
