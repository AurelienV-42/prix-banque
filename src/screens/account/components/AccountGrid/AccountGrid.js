import React from 'react';

import {Grid} from '@material-ui/core';

import AccountEdit from '../AccountEdit/AccountEdit';
import AccountBalance from '../AccountBalance/AccountBalance';
import AccountSummary from '../AccountSummary/AccountSummary';

import styles from './Styles';

const AccountGrid = () => {

  const classes = styles();

  return (
    <Grid container>
      <Grid className={classes.container} item xs={9}>
        <AccountEdit/>
      </Grid>
      <Grid className={classes.container} item xs={3}>
        <AccountBalance/>
      </Grid>
      <Grid item xs={12}>
        <AccountSummary/>
      </Grid>
    </Grid>
  );
};

export default AccountGrid;
