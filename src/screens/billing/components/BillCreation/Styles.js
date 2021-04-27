import {makeStyles} from '@material-ui/core';

const styles = makeStyles(theme => ({

  paperEdit: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
  },

  paperTitle: {
    color: theme.palette.common.white,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2)
  },

  bodyContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  textField1Container: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },

  textField2Container: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },

  textField1: {
    width: '90%'
  },

  textField2: {
    width: '75%'
  },

  createBtnContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },

  createBtn: {
    height: '75%',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.white,
      backgroundColor: theme.palette.primary.dark
    }
  },

  proceedBtnContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },

  proceedBtn: {
    height: '75%',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.white,
      backgroundColor: theme.palette.success.main
    }
  }

}));

export default styles;
