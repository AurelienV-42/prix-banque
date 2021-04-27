import React, {useState} from 'react';
import {useGlobal} from 'reactn';

import {Button, Grid, Icon, Paper, Typography} from '@material-ui/core';

import {AccountBalanceRounded} from '@material-ui/icons';

import {useTranslation} from 'react-i18next';

import AccountBalanceModal from '../AccountBalanceModal/AccountBalanceModal';

import styles from './Styles';

const AccountEdit = () => {

  const classes = styles();
  const {t} = useTranslation();
  const [open, setOpen] = useState(false);
  const [user] = useGlobal('user');


  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Paper className={classes.paperBalance} elevation={0}>
      <Grid container>
        <Grid className={classes.item} item xs={12}>
          <Icon className={classes.iconBalanceContainer}>
            <AccountBalanceRounded className={classes.iconBalance}/>
          </Icon>
        </Grid>
        <Grid className={classes.item} item xs={12}>
          <Typography className={classes.typoBalance}
                      variant='h4'>{user?.value + '€'}</Typography>
        </Grid>
        <Grid className={classes.item} item xs={12}>
          <Button className={classes.fundBtn} onClick={handleOpen}>
            {t('addFund')}
          </Button>
        </Grid>
      </Grid>
      <AccountBalanceModal open={open} setOpen={setOpen}/>
    </Paper>
  );
};

export default AccountEdit;
