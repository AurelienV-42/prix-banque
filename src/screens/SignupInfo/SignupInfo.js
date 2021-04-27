import React, {useState} from 'react';
import {getGlobal} from 'reactn';
import {Button, Grid, Paper, TextField, Typography} from '@material-ui/core';

import useWindowDimensions from '../../components/Resize/Resize';

import {useTranslation} from 'react-i18next';

import styles from './Styles';
import {useHistory} from 'react-router-dom';
import {firestore} from '../../config/firebase';

const SignupInfo = () => {

  const classes = styles();
  const {t} = useTranslation();
  const {height, width} = useWindowDimensions();
  const history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [value, setValue] = useState(0);

  const nextScreen = () => {
    firestore
      .doc(`users/${getGlobal().user.uid}`)
      .update({firstName, lastName, phone, value});
    history.push('/account');
  };

  return (
    <div style={{height: height, width: width}}>
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={0}>
          <Grid container>
            <Grid item xs={12}>
              <Typography className={classes.headerContainer} variant='h5'>Signup</Typography>
            </Grid>
          </Grid>
          <Grid className={classes.textfieldContainer} container>
            <Grid item xs={12}>
              <TextField value={firstName} onChange={event => setFirstName(event.target.value)}
                         className={classes.textFields} variant='filled' required label={t('firstName')}/>
            </Grid>
            <Grid item xs={12}>
              <TextField value={lastName} onChange={event => setLastName(event.target.value)}
                         className={classes.textFields} variant='filled' required label={t('lastName')}/>
            </Grid>
            <Grid item xs={12}>
              <TextField value={phone} onChange={event => setPhone(event.target.value)} className={classes.textFields}
                         variant='filled' required label={t('phone')}/>
            </Grid>
            <Grid item xs={12}>
              <TextField value={value} onChange={event => setValue(Number(event.target.value))} className={classes.textFields}
                         variant='filled' required label={t('amountInitial')}/>
            </Grid>
          </Grid>
          <Grid className={classes.btnContainer} container>
            <Grid item xs={12}>
              <Button onClick={nextScreen} className={classes.btn}>
                {t('confirm')}
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default SignupInfo;
