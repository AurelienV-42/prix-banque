import {makeStyles} from '@material-ui/core';

const styles = makeStyles(theme => ({

  paperList: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(2)
  },

  headerContainer: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: theme.palette.primary.main,
  },

  title: {
    color: theme.palette.common.white,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2)
  },

  list: {
    overflow: 'auto',
    maxHeight: 510,
    paddingBottom: 1
  },

  listBtn: {
    '&:hover': {
      backgroundColor: theme.palette.grey[300]
    }
  }
}));

export default styles;
