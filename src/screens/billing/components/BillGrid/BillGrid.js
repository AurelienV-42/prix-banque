import React, {useState} from 'react';

import {Grid} from '@material-ui/core';

import BillCreation from '../BillCreation/BillCreation';
import BillSummary from '../BillSummary/BillSummary';
import BillDetails from '../BillDetails/BillDetails';

const BillGrid = () => {

  const [selected, setSelected] = useState({});

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <BillCreation/>
        </Grid>
        <Grid item xs={9}>
          <BillSummary setSelectedBill={setSelected}/>
        </Grid>
        <Grid item xs={3}>
          {Object.keys(selected).length === 0 ? <div/> :
            <BillDetails selectedBill={selected} setSelectedBill={setSelected}/>}
        </Grid>
      </Grid>
    </div>
  );
};

export default BillGrid;
