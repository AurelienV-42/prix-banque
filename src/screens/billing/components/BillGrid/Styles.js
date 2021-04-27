import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles(theme => ({

  paperTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(2),
    height: 170,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main
  },

  alert: {
    position: 'absolute',
    bottom: 150,
    marginLeft: theme.spacing(60)
  }

}));

export default styles;
