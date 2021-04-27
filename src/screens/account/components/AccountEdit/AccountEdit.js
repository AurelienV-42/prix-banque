import React, {useEffect, useState} from 'react';

import {Grid, IconButton, Paper, TextField, Typography} from '@material-ui/core';

import {CheckRounded, EditRounded} from '@material-ui/icons';

import {useTranslation} from 'react-i18next';

import styles from './Styles';
import {firestore} from '../../../../config/firebase';
import {useGlobal} from 'reactn';

const AccountEdit = () => {

  const classes = styles();
  const {t} = useTranslation();
  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState('Bob');
  const [lastName, setLastName] = useState('Jones');
  const [email, setEmail] = useState('test@example.com');
  const [user, setUser] = useGlobal('user');

  useEffect(() => {
    if (user?.firstName)
      setFirstName(user.firstName);
    if (user?.lastName)
      setLastName(user.lastName);
    if (user?.email) {
      setEmail(user.email);
    }
  }, [user]);

  const handleEditMode = () => {
    if (editMode === true) {
      user.firstName = firstName;
      user.lastName = lastName;
      setUser(user);
      firestore.doc(`users/${user.uid}`).update({firstName, lastName});
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  };

  return (
    <Paper className={classes.paperEdit} elevation={0}>
      <Grid container>
        <Grid item xs={11}>
          <Typography className={classes.paperTitle} variant={'h5'}>{t('editMyProfile')}</Typography>
        </Grid>
        <Grid className={classes.iconEditContainer} item xs={1}>
          <IconButton className={classes.iconEdit} onClick={handleEditMode}>
            {editMode === true ? <CheckRounded className={classes.iconFinishEdit}/> : <EditRounded/>}
          </IconButton>
        </Grid>
        <Grid className={classes.textfieldNameContainer} item xs={5}>
          <TextField className={classes.texfieldName} value={firstName}
                     onChange={(event) => setFirstName(event.target.value)}
                     label={t('firstName')} disabled={!editMode} variant='filled'/>
        </Grid>
        <Grid className={classes.textfieldLastNameContainer} item xs={5}>
          <TextField className={classes.texfieldLastName} value={lastName}
                     onChange={(event) => setLastName(event.target.value)}
                     label={t('lastName')} disabled={!editMode} variant='filled'/>
        </Grid>
        <Grid className={classes.textfiedlEmailContainer} item xs={7}>
          <TextField className={classes.textfieldEmail} disabled value={email} label={t('emailAddress')}/>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AccountEdit;
