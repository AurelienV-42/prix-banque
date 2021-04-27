import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles(theme => ({

  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    backgroundColor: theme.palette.primary.dark
  },

  translationContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: theme.palette.common.white
  },

  translationButton: {
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.grey[300]
    }
  },

  avatarIconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(1)
  },

  sunIcon: {
    fontSize: 50,
    color: theme.palette.warning.light
  },

  nameContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(2)
  },

  welcomeText: {
    color: theme.palette.common.white,
    marginTop: theme.spacing(1)
  },

  nameText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.common.white,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2)
  },

  listContainer: {
    padding: 0,
    width: '100%'
  },

  listButton: {
    backgroundColor: theme.palette.primary.main
  },

  listIcon: {
    marginLeft: theme.spacing(2),
    color: theme.palette.common.white
  },

  listText: {
    margin: theme.spacing(1),
    marginLeft: 1,
    color: theme.palette.common.white
  },

  disconnectIconContainer: {
    position: 'absolute',
    bottom: 50
  },

  disconnectIcon: {
    color: theme.palette.common.white
  }
}));

export default styles;
