import {makeStyles} from '@material-ui/core';

const styles = makeStyles(theme => ({

  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  paper: {
    marginTop: theme.spacing(13),
    boxShadow: ' 0px 0px 10px 0px rgba(0,0,0,0.75)'
  },

  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.common.white,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },

  textfieldContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(2)
  },


  textFields: {
    marginRight: theme.spacing(20),
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(4),
    width: '91%'
  },

  btnContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(4)
  },

  btn: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
    '&:hover': {
      backgroundColor: theme.palette.success.main,
    }
  }
}));

export default styles;
