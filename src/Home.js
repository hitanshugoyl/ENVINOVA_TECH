import AutoGrid from "./components/top/Grid";
import * as React from 'react';
import { useHistory } from "react-router-dom";
import Card from '@mui/material/Card';
import kitchenProducts from './images/homeimgs/kitchenProducts.jpg';
import CardMedia from '@mui/material/CardMedia';
import {Grid} from '@material-ui/core';
import { CardActionArea } from '@mui/material';
import ShopUnder299 from './images/homeimgs/ShopUnder299.jpg'
import ShopUnder999 from './images/homeimgs/ShopUnder999.jpg'
import cosmetics from './images/homeimgs/cosmetics.jpg';
import cashbackRewards from './images/homeimgs/cashbackRewards.jpg';
import mobilephoto from './images/homeimgs/mobilephoto.jpg';
import gplay from './images/homeimgs/gplay.jpg';
import appstore from './images/homeimgs/appstore.jpg';
import sustainability from './images/homeimgs/sustainability.png';
import novastoreimg from './images/homeimgs/novastoreimg.png';
import FreeShipping from './images/homeimgs/FreeShipping.png';
import CenteredTabs from "./components/centertabs";
import homeending from './images/homeimgs/homeending.jpg';
import Navbar from "./components/top/Navbar";
import CategoryBar from "./components/top/CategoryBar";
import Footer from "./components/footer/Footer";
import Gallery from "./components/carousel";
import HomeCarousel from "./components/HomeCarousel";
import Home1Img from "./home1img";
import classes from './Home.module.css';



const Home=()=>{
  const history = useHistory();
  function handleClick() {
    history.push("/rewards");
  }
  const goToSupport=()=>{
    history.push("/support");
  }

return (
<React.Fragment>
<Navbar  />
      <CategoryBar />
      
{/* <AutoGrid/> */}
<div style={{marginTop:"100px"}}>
< HomeCarousel />
</div>
<Home1Img />
    <Grid container spacing={2}>
        <Grid item xl={6} xs={6}>
    <Card  style={{height:"auto",width:"80%",marginLeft:"26px"}}>
      <CardActionArea >
        <CardMedia
component="img"
height="auto"
        src={ShopUnder299}
        
        />
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xl={6} xs={6}>
    <Card id='card' style={{height:"auto",width:"80%"}}>
      <CardActionArea >
        <CardMedia
component="img"
height="auto"
        src={ShopUnder999}
        
        />
      </CardActionArea>
    </Card>
    </Grid>
    </Grid>
    <div style={{paddingTop:"95px"}}>
        <h1 style={{fontWeight:"700",fontSize:"64px",color:"#4F4F4F",fontFamily:"Oswald",lineHeight:"92px",marginLeft:"26px"}}>TOP CATEGORIES</h1>
        <Grid container style={{paddingTop:"45px"}}>
            <Grid item xl={12}>
            <Card  style={{height:"auto",width:"90%",marginLeft:"26px",marginRight:"26px"}}>
            <CardActionArea >
             <CardMedia
               component="img"
                 height="auto"
        src={kitchenProducts}
        
        />
      </CardActionArea>
    </Card>
                </Grid>
        </Grid>
    
    </div>
    <div style={{paddingTop:"98px"}}>
        <h1 style={{fontWeight:"700",fontSize:"64px",color:"#4F4F4F",fontFamily:"Oswald",lineHeight:"95px",marginLeft:"26px"}}>TRENDING DAILY</h1>
        <Grid container style={{paddingTop:"45px"}}>
            <Grid item xl={12}>
            <Card  style={{height:"auto",width:"90%",marginLeft:"26px"}}>
            <CardActionArea >
             <CardMedia
               component="img"
                 height="auto"
        src={cosmetics}
        
        />
      </CardActionArea>
    </Card>
                </Grid>
        </Grid>
    
    </div>
    <div style={{paddingTop:"152px",marginLeft:"121px",textAlign:"center",width:"60%",height:"auto",marginRight:"121px"}}>
        <span >
           <h1 style={{fontWeight:"700",fontSize:"64px",color:"#4F4F4F",fontFamily:"Montserrat",lineHeight:"79px"}}>SMALL ON WALLET;</h1>
           <h1 style={{fontWeight:"700",fontSize:"144px",color:"#4F4F4F",fontFamily:"Montserrat",lineHeight:"176px"}}>LARGE ON JOY</h1>
        </span>
    </div>
    <div style={{paddingTop:"154px",marginLeft:"120px",marginRight:"167px",textAlign:"center",width:"80%",height:"auto"}}>
       
           <h1 style={{fontWeight:"normal",fontSize:"42px",color: "#828282",fontFamily:"Oswald",lineHeight:"72px"}}>Every purchase you make in our store earns you points.</h1>
    </div>
    <Grid container style={{paddingTop:"135px"}}>
            <Grid item xl={12}>
            <Card  style={{height:"auto",width:"100%",marginRight:"26px"}}>
            <CardActionArea >
             <CardMedia
               component="img"
                 height="auto"
                 onClick={handleClick}
        src={cashbackRewards}
        
        />
      </CardActionArea>
    </Card>
                </Grid>
        </Grid>
        <div className={classes.mobile} style={{paddingTop:"119px",textAlign:"center",width:"100%",height:"auto"}}>
       
           <h1 style={{fontWeight:"700",fontSize:"96px",color:"#4F4F4F",fontFamily:"Montserrat",lineHeight:"118px"}}>EXPERIENCE US ON 
MOBILE APP</h1>
    </div>
    <div style={{paddingTop:"200px",marginLeft:"782px",textAlign:"center",width:"340px",height:"71px"}}>
       
           <h1 style={{fontWeight:"500",fontSize:"48px",color:"#828282",fontFamily:"Oswald",lineHeight:"72px",width:"450px"}}>FEATURES OF APP</h1>
           <h1 style={{fontWeight:"400",fontSize:"36px",color:"#000000",fontFamily:"Oswald",lineHeight:"54px",width:"450px"}}>One step closer to green living. </h1>
    </div>
       
           
  
    <Grid container spacing={3} >
            <Grid item xl={6} xs={6}>
            <Card  style={{height:"819px",width:"414px",marginLeft:"90px",borderRadius: "40px 40px 40px 40px"}}>
             <CardMedia
               component="img"
                 height="819"
        src={mobilephoto} 
        />
    </Card>
                </Grid>
                
                <Grid item xl={3} xs={3} style={{paddingTop:"600px"}}>
                <Card  style={{height:"101px",width:"300px",borderRadius: "20px 20px 20px 20px"}}>
             <CardMedia
               component="img"
                 height="101"
                 src={gplay}
        
        />
    </Card>
                    </Grid>
                    <Grid item xl={3} xs={3} style={{paddingTop:"600px"}}>
            <Card  style={{height:"101px",width:"300px",marginRight:"66px",borderRadius: "20px 20px 20px 20px"}}>
             <CardMedia
               component="img"
                 height="101"
                 src={appstore}
                 
        />
    </Card>
                </Grid>
                    
            
                 </Grid> 
                 <div style={{paddingTop:"60px",textAlign:"center",width:"90%",height:"auto"}}>
       
       <h1 style={{fontWeight:"700",fontSize:"96px",color:"#4F4F4F",fontFamily:"Monserrat",lineHeight:"118px"}}>ONE-STOP SHOP</h1>
</div>
<div style={{paddingTop:"80px"}}>
    <img src={sustainability} style={{height:"auto",width:"50%",marginLeft:"233px"}} />
</div>
<Grid container style={{paddingTop:"135px"}}>
            <Grid item xl={12}>
            <Card  style={{height:"auto",width:"80%",marginLeft:"82px"}}>
             <CardMedia
               component="img"
                 height="auto"
        src={novastoreimg}
        />
   
    </Card>
                </Grid>
        </Grid> 
        <div style={{paddingTop:"100px"}}>
        <h1 style={{fontWeight:"700",fontSize:"36px",color:"#F5A9A9",fontFamily:"Montserrat",lineHeight:"44px",marginLeft:"150px"}}>MY FEED</h1>
            </div> 
        <div style={{paddingTop:"50px",marginRight:"54px",marginLeft:"54px"}}> 
        <Gallery />
        </div>
        <Grid container style={{paddingTop:"155px"}}>
            <Grid item xl={12}>
            <Card  style={{height:"auto",width:"90%",marginLeft:"30px",borderRadius: "30px 30px 30px 30px"}}>
             <CardMedia
               component="img"
                 height="auto"
                 
        src={FreeShipping}
        />
    </Card>
                </Grid>
                </Grid>
<div style={{paddingTop:"200px"}}>
    <CenteredTabs />
</div>
<img src={homeending} style={{height:"auto", width:"100%",paddingTop:"60px"}} />
<div style={{marginTop:"66px"}}>
      <Footer/>
      </div>
</React.Fragment>
);
}

export default Home;