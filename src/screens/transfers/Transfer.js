import React from 'react';

import {Grid} from '@material-ui/core';


import useWindowDimensions from '../../components/Resize/Resize';
import NavStripe from '../../components/NavStripe/NavStripe';
import TransferGrid from './components/TransferGrid/TransferGrid';

import styles from './Styles';

const Transfer = () => {

  const classes = styles();
  const {height, width} = useWindowDimensions();

  return (
    <div>
      <div style={{height: height, width: width}}>
        <Grid className={classes.root} container>
          <Grid item xs={2}>
            <NavStripe/>
          </Grid>
          <Grid item xs={8}>
            <TransferGrid/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Transfer;
