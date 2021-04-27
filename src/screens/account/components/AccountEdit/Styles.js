import {makeStyles} from '@material-ui/core';

const styles = makeStyles(theme => ({

  paperEdit: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
  },

  paperTitle: {
    color: theme.palette.common.white,
    borderTopLeftRadius: 4,
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2)
  },

  iconEditContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 4,
    backgroundColor: theme.palette.primary.dark
  },

  iconEdit: {
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.grey[200]
    }
  },

  iconFinishEdit: {
    color: theme.palette.success.light
  },

  textfieldNameContainer: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },

  texfieldName: {
    width: '100%'
  },

  textfieldLastNameContainer: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },

  texfieldLastName: {
    width: '100%'
  },

  textfiedlEmailContainer: {
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },

  textfieldEmail: {
    width: '100%'
  },

  refContainer: {
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(2),
  }

}));

export default styles;
