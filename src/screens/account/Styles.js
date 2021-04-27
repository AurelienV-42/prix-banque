import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles(theme => ({

  mainRoot: {
    backgroundColor: theme.palette.common.black
  },

  root: {
    height: '100%',
    backgroundColor: theme.palette.grey[200],
  }

}));

export default styles;
