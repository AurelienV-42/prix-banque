import React, {useEffect, useState} from 'react';
import {useGlobal} from 'reactn';
import {useHistory} from 'react-router-dom';

import {Grid, Icon, IconButton, List, ListItem, ListItemIcon, ListItemText, Paper, Typography} from '@material-ui/core';

import {
  InfoRounded,
  LanguageRounded,
  PowerSettingsNewRounded,
  ReceiptRounded,
  SwapHorizRounded,
  WbSunnyRounded
} from '@material-ui/icons';


import styles from './Styles';
import {useTranslation} from 'react-i18next';
import {auth} from '../../config/firebase';

const NavStripe = () => {
  const classes = styles();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const history = useHistory();
  const {t, i18n} = useTranslation();
  const [user, setUser] = useGlobal('user');

  useEffect(() => {
    if (!user) {
      history.push('/');
    } else {
      if (user.firstName)
        setFirstName(user.firstName);
      if (user.lastName)
        setLastName(user.lastName);
    }
  }, [user, history]);

  const switchPage = (event, page) => {
    history.push(page);
  };

  return (
    <Paper className={classes.paper} elevation={0} square>
      <Grid container>
        <Grid className={classes.translationContainer} item xs={12}>
          <IconButton onClick={() => {
            i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
          }} className={classes.translationButton}>
            <LanguageRounded/>
          </IconButton>
          <Typography>{t(i18n.language !== 'fr' ? 'english' : 'french')}
          </Typography>
        </Grid>
        <Grid className={classes.avatarIconContainer} item xs={12}>
          <Icon className={classes.sunIcon}>
            <WbSunnyRounded className={classes.sunIcon}/>
          </Icon>
        </Grid>
        <Grid className={classes.nameContainer} item xs={12}>
          <Typography className={classes.welcomeText} variant='h5'>{t('welcome')}</Typography>
        </Grid>
        <Grid className={classes.nameContainer} item xs={12}>
          <Typography className={classes.nameText}
                      variant='body1'>{String.name.length === 0 ? '' : (firstName + ' ' + lastName)}</Typography>
        </Grid>
        <Grid className={classes.listContainer} item xs={12}>
          <div>
            <List>
              <ListItem className={classes.listButton} button onClick={(event) => switchPage(event, './account')}>
                <ListItemIcon className={classes.listIcon}>
                  <InfoRounded/>
                </ListItemIcon>
                <ListItemText className={classes.listText}>
                  {t('accountInformation')}
                </ListItemText>
              </ListItem>
              <ListItem className={classes.listButton} button onClick={(event) => switchPage(event, './billing')}>
                <ListItemIcon className={classes.listIcon}>
                  <ReceiptRounded/>
                </ListItemIcon>
                <ListItemText className={classes.listText}>
                  {t('payments')}
                </ListItemText>
              </ListItem>
              <ListItem className={classes.listButton} button onClick={(event) => switchPage(event, './transfers')}>
                <ListItemIcon className={classes.listIcon}>
                  <SwapHorizRounded/>
                </ListItemIcon>
                <ListItemText className={classes.listText}>
                  {t('transfer')}
                </ListItemText>
              </ListItem>
            </List>
          </div>
        </Grid>
      </Grid>
      <IconButton onClick={() => {
        auth.signOut();
        setUser(null);
      }} className={classes.disconnectIconContainer}>
        <PowerSettingsNewRounded className={classes.disconnectIcon} fontSize='large'/>
      </IconButton>
    </Paper>
  );
};

export default NavStripe;
