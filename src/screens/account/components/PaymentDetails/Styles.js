import {makeStyles} from '@material-ui/core';

const styles = makeStyles(theme => ({

  paperInfo: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2)
  },

  headerContainer: {
    color: theme.palette.common.white,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2)
  }
}));

export default styles;
