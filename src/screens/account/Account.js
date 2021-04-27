import React from 'react';

import {Grid} from '@material-ui/core';

import useWindowDimensions from '../../components/Resize/Resize';
import NavStripe from '../../components/NavStripe/NavStripe';
import AccountGrid from './components/AccountGrid/AccountGrid';

import styles from './Styles';

const Account = () => {

  const classes = styles();
  const {height, width} = useWindowDimensions();

  return (
    <div>
      <div style={{height: height, width: width}}>
        <Grid className={classes.root} container>
          <Grid item xs={2}>
            <NavStripe/>
          </Grid>
          <Grid item xs={10}>
            <Grid container>
              <Grid item xs={8}>
                <AccountGrid/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Account;
