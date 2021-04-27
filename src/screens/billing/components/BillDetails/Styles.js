import {makeStyles} from '@material-ui/core';

const styles = makeStyles(theme => ({

  paperInfo: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(2)
  },

  headerContainer: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: theme.palette.primary.main,
  },

  billIDTextContainer: {
    color: theme.palette.common.white,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2)
  },

  closeBtnContainer: {
    marginLeft: theme.spacing(2)
  },

  closeBtn: {
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark
    }
  },

  subInfoContainer: {
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },

  paperAmountValueContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },

  confirmationTextContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1)
  },

  confirmationBtnContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(4)
  },

  payBtn: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    marginLeft: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.success.main
    }
  },

  deleteBtnContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },

  deleteBtn: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.error.main,
    marginLeft: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.error.dark
    }
  }
}));

export default styles;
