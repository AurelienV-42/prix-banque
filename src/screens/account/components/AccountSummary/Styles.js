import {makeStyles} from '@material-ui/core';

const styles = makeStyles(theme => ({

  paperSummary: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    maxHeight: 600
  },

  title: {
    color: theme.palette.common.white,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2)
  },

  list: {
    marginTop: theme.spacing(1),
    overflow: 'auto',
    maxHeight: 510,
    paddingBottom: 1
  },

  listSection: {
    backgroundColor: theme.palette.background.paper
  },

  ul: {
    padding: 0,
    backgroundColor: 'inherit'
  },

  subheader: {
    backgroundColor: theme.palette.grey[300],
    borderRadius: 2
  }
}));

export default styles;
