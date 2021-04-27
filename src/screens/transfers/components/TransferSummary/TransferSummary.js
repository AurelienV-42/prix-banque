import React, {useEffect, useState} from 'react';
import {useGlobal} from 'reactn';
import moment from 'moment';

import {Grid, List, ListItem, ListItemText, Paper, Typography,} from '@material-ui/core';

import {useTranslation} from 'react-i18next';

import styles from './Styles';

const TransferSummary = ({setSelectedBill}) => {

  const classes = styles();
  const {t} = useTranslation();
  const [items, setItems] = useState([]);
  const [transfers] = useGlobal('transfers');

  useEffect(() => {
    const tmp = [];
    transfers?.forEach(bill => {
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
    setItems(tmp);
  }, [transfers]);

  return (
    <Paper className={classes.paperList} elevation={0}>
      <Grid container>
        <Grid className={classes.headerContainer} item xs={12}>
          <Typography className={classes.title} variant='h5'>{t('transfers')}</Typography>
        </Grid>
        <Grid item xs={12}>
          <List className={classes.list}>
            {items.map((item, id) => {
              return (
                <ListItem className={classes.listBtn} key={id}>
                  <ListItemText>{item.sender ? 'Sender: ' + item.sender : 'Payer: ' + item.payer}</ListItemText>
                  <ListItemText>{(item.sender ? '- ' : '+ ') + item.value + '€'}</ListItemText>
                  <ListItemText>{moment(item.date?.toDate()).format('DD/MM/YYYY HH:mm')}</ListItemText>
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TransferSummary;
