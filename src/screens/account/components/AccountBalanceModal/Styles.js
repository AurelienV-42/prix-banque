import {makeStyles} from '@material-ui/core';

const styles = makeStyles(theme => ({

  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  paper: {},

  headerContainer: {
    color: theme.palette.common.white,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2)
  },

  textfieldContainer: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },

  btnContainer: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(4)
  },

  btn: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    height: '60%',
    '&:hover': {
      backgroundColor: theme.palette.success.main
    }
  }
}));

export default styles;
