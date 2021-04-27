import React, {useEffect, useState} from 'react';
import {useGlobal} from 'reactn';

import {List, ListItem, ListItemText, Paper, Typography} from '@material-ui/core';

import styles from './Styles';
import {useTranslation} from 'react-i18next';
import moment from 'moment';
// import {getBills} from '../../../../utils/communication';

const AccountSummary = () => {

  const classes = styles();

  const [transactions, setTransactions] = useState([]);
  const {t} = useTranslation();
  const [transactionsGlobal] = useGlobal('transactions');

  useEffect(() => {
    let tmp = [];
    transactionsGlobal?.forEach(bill => {
      tmp.push(bill);
    });
    tmp.sort((a, b) => {
        if (a.date.seconds > b.date.seconds)
          return -1;
        else if (a.date.seconds > b.date.seconds)
          return 1;
        return 0;
      }
    );
    setTransactions(tmp);
  }, [transactionsGlobal]);

  // useEffect(() => {
  //   getBills().then(bills => {
  //     bills?.forEach(bill => {
  //
  //     });
  //   });
  // }, []);

  return (
    <Paper className={classes.paperSummary} elevation={0}>
      <Typography variant='h5' className={classes.title}>{t('summaryOfLatestBills')}</Typography>
      <List className={classes.list} subheader={<li/>}>
        {transactions.map((item) => {
          return (
            <ListItem key={JSON.stringify(item)} button>
              <ListItemText primary={item.from ? 'From: ' + item.from : 'To: ' + item.to}/>
              <ListItemText primary={(item.from ? '+' : '') + item.value + '€'}/>
              <ListItemText primary={moment(item.date?.toDate()).format('DD/MM/YYYY HH:mm')}/>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};

export default AccountSummary;
