import React from 'react';

import {Grid} from '@material-ui/core';

import TransferCreation from '../TransferCreation/TransferCreation';
import TransferSummary from '../TransferSummary/TransferSummary';

const TransferGrid = () => {

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <TransferCreation/>
        </Grid>
        <Grid item xs={12}>
          <TransferSummary/>
        </Grid>
      </Grid>
    </div>
  );
};

export default TransferGrid;
