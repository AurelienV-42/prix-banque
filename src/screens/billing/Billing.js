import React, {useState} from 'react';

import {Grid} from '@material-ui/core';


import useWindowDimensions from '../../components/Resize/Resize';
import NavStripe from '../../components/NavStripe/NavStripe';
import BillGrid from './components/BillGrid/BillGrid';

import styles from './Styles';

const Billing = () => {

  const classes = styles();
  const {height, width} = useWindowDimensions();
  const [open] = useState(false);

  return (
    <div>
      <div style={{height: height, width: width}}>
        <Grid className={classes.root} container>
          <Grid item xs={2}>
            <NavStripe/>
          </Grid>
          <Grid item xs={8}>
            <BillGrid open={open}/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Billing;
