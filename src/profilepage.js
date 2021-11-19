
import React from 'react';
import classes from './profilepage.module.css';
import Grid from '@material-ui/core/Grid';
import CenteredTabs from './components/centertabs';
import Footer from './components/footer/Footer';
import Navbar from './components/top/Navbar';
import CategoryBar from './components/top/CategoryBar';
import homeending from './images/homeimgs/homeending.jpg';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { NoEncryption } from '@material-ui/icons';

const Profile=()=>{

    return(
<React.Fragment>
<Navbar  />
          <CategoryBar />
          <Grid container spacing={2} style={{paddingTop:"100px"}}>
            <Grid item xl={4} xs={4}>
            <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          border:"none",
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      > 
      <div style={{marginBottom:"600px",marginLeft:"50px"}} ><span className={classes.h1menu}>MY PROFILE</span></div>
      <div style={{marginBottom:"400px",marginLeft:"-210px"}} ><span className={classes.h1menu}>MY ADDRESSES</span></div>
      <div style={{marginBottom:"200px",marginLeft:"-270px"}} ><span className={classes.h1menu}>MY ORDERS</span></div>
      <div style={{marginBottom:"0px",marginLeft:"-210px"}} ><span className={classes.h1menu}>MY WALLET</span></div>
      <div style={{marginTop:"200px",marginLeft:"-300px"}}>
      <button style={{marginTop:"-150px",marginLeft:"100px",marginRight:"200px"}} className={classes.btnmenu}>SIGN OUT</button>
          </div>
          </Box>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xl={4} xs={4}>
            
            </Grid>
            <Grid item xl={4} xs={4}>
            
            </Grid>
        </Grid>

          <div style={{marginTop:"1200px"}}>
    <CenteredTabs />
</div>
<img src={homeending} style={{height:"263px",width:"1366px",paddingTop:"60px"}} />
<div style={{paddingTop:"100px"}}>
          <Footer/>
          </div>
</React.Fragment>
    )
}
export default Profile;