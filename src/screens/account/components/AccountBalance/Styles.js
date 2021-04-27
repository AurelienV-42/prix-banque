import {makeStyles} from '@material-ui/core';

const styles = makeStyles(theme => ({

  paperBalance: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(2),
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  iconBalanceContainer: {
    marginTop: theme.spacing(2),
    fontSize: 40
  },

  iconBalance: {
    fontSize: 40
  },

  typoBalance: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },

  fundBtn: {
    marginBottom: 18,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.dark,
    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.common.white
    }
  }

}));

export default styles;
