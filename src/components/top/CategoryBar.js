import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Popover from '@mui/material/Popover';
import Grid from '@material-ui/core/Grid';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles({
    container:{
        paddingTop: "10px",
        marginTop: "70px",
      
    },
    grid:{
      overflow:"auto",width:"1350px",paddingLeft:"40px",paddingTop:"30px",paddingBottom:"30px",overflow:"hidden",position:"relative",
    },
    ulclass:{
      listStyleType:"none",
      textAlign: "center",
      fontFamily: "Ibarra Real Nova",
fontSize: "18px",
fontStyle: "normal",
fontWeight: "400",
lineHeight: "23px",
    },
    title:{
      color:" #9FC8A8",
      fontFamily: "Montserrat",
fontSize: "24px",
fontStyle: "normal",
fontWeight: "700",
lineHeight: "29px",
textAlign: "center",
paddingLeft:"50px"

    },
  root: {
    flexGrow: 1,
    
  },
});

export default function CategoryBar() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
   
  };

  const handleClose = () => {
    setAnchorEl(null);
  
  };

  const open = Boolean(anchorEl);
   const id = open ? 'simple-popover' : undefined; 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    
      <div className={classes.container}>
       
      <Tabs
        value={value}
        onChange={handleChange}
        onClick={handleClick}
        indicatorColor="primary"
        textColor="secondary"
        variant="fullWidth"
        centered
      >
      
        <Tab label="Shop All Categories" value="1" href="/categories"/>
        <Tab label="Bags" href="/bags"/>
        <Tab label="Decor" href="/decor"/>
        <Tab label="Essentials" href="/essentials"/>
        <Tab label="Kitchen" href="/kitchen"/>
        <Tab label="Stationary" href="stationary"/>
      </Tabs>
      <Popover
       id={id}
       open={open}
       anchorEl={anchorEl}
       onClose={handleClose}
       anchorReference="anchorPosition"
       anchorPosition={{ top: 750, left: 280 }}
       anchorOrigin={{
         vertical: 'bottom',
         horizontal: 'left',
       }}
       transformOrigin={{
         vertical: 'bottom',
         horizontal: 'left',
       }}
     >
     <div >
     <Grid container spacing={4} className={classes.grid}>
        <Grid item xs={3}>
          <h2 className={classes.title}>Bags</h2>
          <br />
          <ul className={classes.ulclass}>
            <li>Cotton</li>
            <li>Ikkat-Cotton</li>
            <li>Jute</li>
            <li>Macrame</li>
            <li>Shopping</li>
          </ul>
          <br />
          <Divider orientation="horizontal" style={{width:"60%",marginLeft:"80px"}}/>
          <br/>
          <h2 className={classes.title}>Decor</h2>
          <br/>
          <ul className={classes.ulclass}>
            <li>Aroma Candles</li>
            <li>Coasters</li>
          </ul>
          <br />
        </Grid>
        <Grid item xs={3}>
        <ul className={classes.ulclass}>
            <li>Flower Vase</li>
            <li>KeyChains</li>
            <li>Plant Hangers</li>
            <li>Storage Box</li>
            <li>Wall-Hangings</li>
          </ul>
          <br />
          <Divider orientation="horizontal" style={{width:"60%",marginLeft:"80px"}}/>
          <br/>
          <h2 className={classes.title}>Essentials</h2>
          <br/>
          <ul className={classes.ulclass}>
            <li>Comb</li>
            <li>Earbuds</li>
            <li>Facewipes</li>
            <li>Loofah</li>
            <li>Tongue-Cleaner</li>
          </ul>
        </Grid>
        <Grid item xs={3}>
        <ul className={classes.ulclass}>
            <li>Toothbrush</li>
            <li>Travel Kit</li>
            <li>Anandi Sanitary Pads</li>
          </ul>
          <br />
          <Divider orientation="horizontal" style={{width:"60%",marginLeft:"80px"}}/>
          <br/>
          <h2 className={classes.title}>Kitchen</h2>
          <br />
          <ul className={classes.ulclass}>
            <li>Bamboo</li>
            <li>Cane</li>
            <li>Coconut</li>
            <li>Copper</li>
            <li>Wheat-Fibre</li>
          </ul>
          <br />
        </Grid>
        <Grid item xs={3}>
          <h2 className={classes.title}>Stationary</h2>
          <br/>
          <ul className={classes.ulclass}>
            <li>Pencils</li>
            <li>Pens</li>
            <li>Pen Stands</li>
          </ul>
          <br />
        </Grid>
      </Grid>
     </div>
     </Popover> 
    
    </div>
  );
}
