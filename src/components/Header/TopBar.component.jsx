import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import LanguageMenu from './languageMenu.component';

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
  },

  bigBox: {
    width: '35vw',
    height:45,
    border: '0.2px solid lightgrey',
    borderColor:'#eeeeee',
    marginLeft:-25,
    marginTop: -20,
    [theme.breakpoints.down("md")]:{
     Width: '10vw',
    },
    [theme.breakpoints.down("xs")]:{
      minWidth: '0vw',

    }
      
  },
  smallBox: {
    width: '10rem',
    height:45,
    border: '0.2px solid lightgrey',
    borderColor:'#eeeeee',
    marginTop: -20,
    borderRightColor:'#fafafa',
    borderLeftColor:'#fafafa',
    
  },
  mediumBox:{
    width: '20vw',
    height:45,
    border: '0.2px solid lightgrey',
    borderColor:'#eeeeee',
    borderRightColor:'white',
    marginTop: -20,
    [theme.breakpoints.down("md")]:{
      Width: '5vw'
     },
     [theme.breakpoints.down("xs")]:{
       Width: '0vw',

  }
},

LoginBox: {
    width: '30em',
    height:45,
    border: '0.2px solid lightgrey',
    borderColor:'#eeeeee',
    marginTop: -20,
    borderRightColor:'#fafafa',
    borderLeftColor:'#fafafa',
    
},


socialsBox: {
  width: '10vw',
  height:45,
  border: '0.2px solid lightgrey',
  borderColor:'#eeeeee',
  marginTop: -20,
  borderRightColor:'white',
  borderLeftColor:'white',
  [theme.breakpoints.down("md")]:{
    Width: '5vw'
   },
   [theme.breakpoints.down("xs")]:{
     Width: '5vw'
}
},


LoginText:{
  ...theme.typography,
  color:'#212121',
  textDecoration:'none',

},

MailIcon :{
  marginTop:'1.2rem',
  fontSize:'1rem',
  [theme.breakpoints.down("md")]:{
    fontSize: '0.75rem'
   },
   [theme.breakpoints.between('md', 'sm')]: {
    fontSize: '0.5rem'
  },
  [theme.breakpoints.between('sm', 'xs')]: {
    fontSize: '0'
  },
  [theme.breakpoints.down("xs")]:{
    fontSize: 0
   },
  position:'absolute',
  marginLeft:'-17em'

},

PhoneIcon :{
  marginTop:'1.2rem',
  fontSize:'1rem',
  [theme.breakpoints.down("md")]:{
    fontSize: '0.75rem'
   },
   [theme.breakpoints.between('md', 'sm')]: {
    fontSize: '0.5rem'
  },
  [theme.breakpoints.between('sm', 'xs')]: {
    fontSize: '0'
  },
  [theme.breakpoints.down("xs")]:{
    fontSize: 0
   },
  position:'absolute',

},

mailContainer:{
  marginLeft:'15vw'
},

iconText:{
  ...theme.typography,
  color:'#212121',
  textDecoration:'none',
  fontSize:'1rem',
  [theme.breakpoints.down("md")]:{
    fontSize: '0.75rem'
   },
   [theme.breakpoints.down('sm')]: {
    fontSize: '0.5rem'
  },
  [theme.breakpoints.between('sm', 'xs')]: {
    fontSize: '0.1rem'
  },
  [theme.breakpoints.down("xs")]:{
    fontSize: 0
   },
   position:'absolute',
   marginLeft:'1.5em'

},


phoneContainer:{
  marginLeft:5,
  
},

socialIcons:{
  color:'#212121',
  fontSize:'1.4rem',
  marginTop:'1rem',
  [theme.breakpoints.down("md")]:{
    fontSize: '0.75rem'
   },
   [theme.breakpoints.down('sm')]: {
    fontSize: '0.5rem'
  },
  [theme.breakpoints.between('sm', 'xs')]: {
    fontSize: '0.1rem'
  },
  [theme.breakpoints.down("xs")]:{
    fontSize: 0
   },
   position:'absolute'
},

loginIcon:{
  color:'#212121',
  fontSize:20,
  marginTop:14
},

}));

const TopBar = () => {

  const classes = useStyles();

  return (
    <div>
      <Box display="flex" flexDirection = "row" p={1} m={1} bgcolor="background.paper" width='100%' >
  
        <Box p={1} bgcolor="white" className={classes.bigBox}>

            <Grid container direction="row" className={classes.root} spacing={1}>
                <Grid item xs={6}>
                    <Grid container justify="flex-end" spacing={1} className={classes.mailContainer}>           
                          <Grid item >
                            <MailIcon className={classes.MailIcon} />
                          </Grid>
                          <Grid item component={"a"} href="mailto:vinciguerradaniele@hotmail.com" rel="noopener noreffer" target="_blank" className={classes.iconText}>
                          <p>vinciguerradaniele@hotmail.com</p>
                          </Grid>
                   </Grid>
                </Grid>                 
            </Grid>

        </Box>

        <Box p={1} bgcolor="white" className={classes.mediumBox}>

          <Grid container direction="row" className={classes.root} spacing={1}>
              <Grid item xs={12}>
                  <Grid container justify="flex-start" spacing={1} className={classes.phoneContainer}>           
                        <Grid item >
                          <PhoneIcon className={classes.PhoneIcon} />
                        </Grid>
                        <Grid item className={classes.iconText}>
                        <p>+32 492.677.940</p>
                        </Grid>
                   </Grid>

            
              </Grid>                 
          </Grid>
          
       </Box>

       <Box p={1} bgcolor="white" className={classes.socialsBox}>
          
          <Grid container direction="row" className={classes.root} spacing={1}>
                  <Grid item xs={12}>
                      <Grid container justify="space-evenly"  alignItems="center" spacing={2} >           
                            <Grid item component={"a"} href="https://www.facebook.com" rel="noopener noreffer" target="_blank" >
                              <FacebookIcon className={classes.socialIcons} alt="facebook"/>
                            </Grid>
                            <Grid item component={"a"} href="https://www.twitter.com" rel="noopener noreffer" target="_blank">
                              <TwitterIcon className={classes.socialIcons} alt="twitter"/>
                            </Grid>
                            <Grid item component={"a"} href="https://www.instagram.com" rel="noopener noreffer" target="_blank">
                              <InstagramIcon className={classes.socialIcons} alt="instagram"/>
                            </Grid>
                            <Grid item component={"a"} href="https://www.pinterest.com" rel="noopener noreffer" target="_blank">
                              <PinterestIcon className={classes.socialIcons} alt="pinterest"/>
                            </Grid>
                      </Grid>      
                  </Grid>                 
              </Grid>
        </Box>

        <Box p={1} bgcolor="white" className={classes.smallBox}>
          <LanguageMenu />
        </Box>

        <Box p={1} bgcolor="white" className={classes.LoginBox}>
        <Grid container direction="row" className={classes.root} spacing={1}>
                  <Grid item xs={12}>
                      <Grid container justify="flex-start" spacing={1} >           
                            <Grid item >
                              <AccountCircleIcon  className={classes.loginIcon} alt="login" alignItems="center"/>
                            </Grid>
                            <Grid item className={classes.LoginText} alignItems="center">
                              <p>Login</p>
                            </Grid>
      
                      </Grid>      
                  </Grid>                 
              </Grid>
        </Box>

    </Box>
    </div>
  
  );
}

export default TopBar;
