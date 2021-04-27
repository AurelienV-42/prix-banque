import React, {useEffect, useState} from 'react';
import {useGlobal} from 'reactn';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useTranslation} from 'react-i18next';
import createUserWithEmailAndPasswordHandler, {signInWithEmailAndPasswordHandler} from './auth';
import {useHistory} from 'react-router-dom';

const LoginScreen = () => {
  const classes = useStyles();
  const {t} = useTranslation();
  const [signIn, setSignIn] = useState(true);
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const [user] = useGlobal('user');

  useEffect(() => {
    if (user?.uid) {
      if (!user.firstName) {
        history.push('/onboarding');
      } else {
        history.push('/account');
      }
    }
  }, [user, history]);

  const onSubmit = async () => {
    setError('');
    if (mail.search(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) === -1) {
      setError('badFormatEmail'); // TODO
      return;
    } else if (password.length < 4) {
      setError('passwordLength'); // TODO
      return;
    }


    if (signIn) {
      signInWithEmailAndPasswordHandler(mail, password, setError, history);
    } else {
      createUserWithEmailAndPasswordHandler(mail, password, setError, history);
    }
  };

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            {t(signIn ? 'signIn' : 'signUp')}
          </Typography>
          <TextField
            value={mail}
            onChange={event => {
              setMail(event.target.value);
            }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label={t('emailAddress')}
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            value={password}
            onChange={event => {
              setPassword(event.target.value);
            }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label={t('password')}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSubmit}
          >
            {t(signIn ? 'signIn' : 'signUp')}
          </Button>
          <Grid container>
            <Grid item xs>
              {/*<Link href="#" variant="body2">*/}
              {/*  Forgot password?*/}
              {/*</Link>*/}
            </Grid>
            <Grid item>
              {// TODO Faire pour que ça soit clickable bien
              }
              <Link onClick={() => {
                setSignIn(!signIn);
              }} variant="body2">
                {t(signIn ? 'dontHaveAnAccount' : 'alreadyAccount')}
              </Link>
            </Grid>
          </Grid>
          <p>{t(error)}</p>
        </div>
      </Container>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default LoginScreen;
