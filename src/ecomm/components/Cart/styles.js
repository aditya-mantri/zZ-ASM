import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  //toolbar: theme.mixins.toolbar,
  toolbar: {
    backgroundColor: '#d8d0d9',
    maxWidth:'1600px',
    height : '100%'
  },
  noitem: {
   textAlign:'center',
   textDecoration: 'bold',
   height: '580px'
  },
  title: {
    marginTop: '4.3%',
    marginBottom: '2%',

    textAlign:'center',
    color : '#696969',
    textDecoration : 'bold'
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'bold',

  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
}));
