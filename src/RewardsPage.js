import React from "react";
import envinovaLogo from './images/rewardsimgs/envinovaLogo.png';
import coins50 from './images/rewardsimgs/coins50.png';
import rewardsprogram from './images/rewardsimgs/rewardsprogram.png';
import classes from './RewardsPage.module.css';
import spendearn from './images/rewardsimgs/spendearn.png'
import {Grid} from '@material-ui/core';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import pinkLogo from './images/rewardsimgs/pinkLogo.png';
import purpleLogo from './images/rewardsimgs/purpleLogo.png';
import lilacLogo from './images/rewardsimgs/lilacLogo.png';
import savingsnova from './images/rewardsimgs/savingsnova.png';
import refer from './images/rewardsimgs/refer.png';
import shop from './images/rewardsimgs/shop.png';
import vouchers from './images/rewardsimgs/vouchers.png';
import freegift from './images/rewardsimgs/freegift.png';
import participate from './images/rewardsimgs/participate.png';
import redeem from './images/rewardsimgs/redeem.png';
import mobilerewards from './images/rewardsimgs/mobilerewards.png';
import Navbar from './components/top/Navbar';
const Rewards=()=>{

return(
<React.Fragment>
<Navbar/>
<img src={envinovaLogo} className={classes.img1}/>


<img src={rewardsprogram} className={classes.img2}/>


<img src={coins50} className={classes.img3}/>


    <h2 className={classes.h2}>Start earning <span className={classes.text1}>Nova Coins</span> to redeem exciting rewards</h2>


    <h2 className={classes.h2lilac}>How it Works?</h2>


<img src={spendearn} className={classes.img4}/>


    <h2 className={classes.h2steps}>Three Easy Steps</h2>

<Grid container spacing={2} style={{marginTop:"150px",marginLeft:"83px",marginBottom:"100px"}}>
      <Grid item  xl={4} xs={4} style={{height:"400px",width:"350px"}}>
      <Card  style={{ maxWidth:"360px" ,border: "none", boxShadow: "none" }} >
      <CardMedia sx={{maxWidth:200,maxHeight:300,marginLeft:9,marginTop:2,marginBottom:2}}
        component="img"
        height="200"
        src={pinkLogo}
        alt="pink logo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign="center" fontFamily="Montserrat" fontWeight="700" fontSize="42px" lineHeight="52px">
        Create account
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center" fontFamily="Ibarra Real Nova" fontWeight="400" fontSize="25px" lineHeight="38px">
        We give you 1000 points<br /> for signing up.
        </Typography>
      </CardContent>
    </Card>
</Grid>
<Grid item  xl={4} xs={4} style={{height:"400px",width:"350px"}}>
      <Card style={{ maxWidth:"360px" ,border: "none", boxShadow: "none" }}>
      <CardMedia sx={{maxWidth:200,maxHeight:300,marginLeft:9,marginTop:2,marginBottom:2}}
        component="img"
        height="200"
        width="200"
        image={purpleLogo}
        alt="purple logo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"textAlign="center" fontFamily="Montserrat" fontWeight="700" fontSize="42px" lineHeight="52px">
        Earn Coins
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center" fontFamily="Ibarra Real Nova" fontWeight="400" fontSize="25px" lineHeight="38px">
        Earn through purchases <br />and challenges.
        </Typography>
      </CardContent>
    </Card>
</Grid>
<Grid item  xl={4} xs={4} style={{height:"400px",width:"350px"}}>
      <Card style={{ maxWidth:"360px",border: "none", boxShadow: "none"}}>
      <CardMedia sx={{maxWidth:200,maxHeight:300,marginLeft:9,marginTop:2,marginBottom:2}}
        component="img"
        height="200"
        width="200"
        image={lilacLogo}
        alt="lilac logo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign="center" fontFamily="Montserrat" fontWeight="700" fontSize="42px" lineHeight="52px">
        Get Rewards
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center" fontFamily="Ibarra Real Nova" fontWeight="400" fontSize="25px" lineHeight="38px">
        Use Nova Coins on <br /> your store purchases.
        </Typography>
      </CardContent>
    </Card>
</Grid>
      </Grid>
      <h2 className={classes.savings}>Savings <span className={classes.spansavings}>upto</span> 5%  on all<br/> your purchases</h2>
      <img src={savingsnova} className={classes.img5}/>
      <h2 className={classes.h2steps}>Ways to Earn</h2>

      <Grid container spacing={2} style={{marginTop:"150px",marginLeft:"83px",marginBottom:"100px"}}>
      <Grid item  xl={4} xs={4} style={{height:"400px",width:"350px"}}>
      <Card  style={{ maxWidth:"360px" ,border: "none", boxShadow: "none" }} >
      <CardMedia sx={{maxWidth:200,maxHeight:300,marginLeft:9,marginTop:2,marginBottom:2}}
        component="img"
        height="200"
        src={refer}
        alt="refer"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign="center" fontFamily="Montserrat" fontWeight="700" fontSize="42px" lineHeight="52px">
        Refer
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center" fontFamily="Ibarra Real Nova" fontWeight="400" fontSize="25px" lineHeight="38px">
        We give you 500 points<br/>  when your friend makes<br/> their first purchase.
        </Typography>
      </CardContent>
    </Card>
</Grid>
<Grid item  xl={4} xs={4} style={{height:"400px",width:"350px"}}>
      <Card style={{ maxWidth:"360px" ,border: "none", boxShadow: "none" }}>
      <CardMedia sx={{maxWidth:200,maxHeight:300,marginLeft:9,marginTop:2,marginBottom:2}}
        component="img"
        height="200"
        width="200"
        image={shop}
        alt="shop"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"textAlign="center" fontFamily="Montserrat" fontWeight="700" fontSize="42px" lineHeight="52px">
        Shop
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center" fontFamily="Ibarra Real Nova" fontWeight="400" fontSize="25px" lineHeight="38px">
        We give you 1 point for <br/>every ₹1 spent on all your <br/>purchases
        </Typography>
      </CardContent>
    </Card>
</Grid>
<Grid item  xl={4} xs={4} style={{height:"400px",width:"350px"}}>
      <Card style={{ maxWidth:"360px",border: "none", boxShadow: "none"}}>
      <CardMedia sx={{maxWidth:200,maxHeight:300,marginLeft:9,marginTop:2,marginBottom:2}}
        component="img"
        height="200"
        width="200"
        image={participate}
        alt="participate"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign="center" fontFamily="Montserrat" fontWeight="700" fontSize="42px" lineHeight="52px">
        Participate
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center" fontFamily="Ibarra Real Nova" fontWeight="400" fontSize="25px" lineHeight="38px">
        We give you points for<br/> participating in our <br/>challenges
        </Typography>
      </CardContent>
    </Card>
</Grid>
      </Grid>
      <h2 className={classes.h2steps}>Pretty Perks</h2>
      <Grid container spacing={2} style={{marginTop:"150px",marginLeft:"83px",marginBottom:"100px"}}>
      <Grid item  xl={4} xs={4} style={{height:"400px",width:"350px"}}>
      <Card  style={{ maxWidth:"360px" ,border: "none", boxShadow: "none" }} >
      <CardMedia sx={{maxWidth:200,maxHeight:300,marginLeft:9,marginTop:2,marginBottom:2}}
        component="img"
        height="200"
        src={redeem}
        alt="redeem"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign="center" fontFamily="Montserrat" fontWeight="700" fontSize="42px" lineHeight="52px">
        Redeem
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center" fontFamily="Ibarra Real Nova" fontWeight="400" fontSize="25px" lineHeight="38px">
        upto 100% redemption of<br/> your Nova coins on our<br/> store
        </Typography>
      </CardContent>
    </Card>
</Grid>
<Grid item  xl={4} xs={4} style={{height:"400px",width:"350px"}}>
      <Card style={{ maxWidth:"360px" ,border: "none", boxShadow: "none" }}>
      <CardMedia sx={{maxWidth:200,maxHeight:300,marginLeft:9,marginTop:2,marginBottom:2}}
        component="img"
        height="200"
        width="200"
        image={freegift}
        alt="freegift"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"textAlign="center" fontFamily="Montserrat" fontWeight="700" fontSize="42px" lineHeight="52px">
        Free Gift
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center" fontFamily="Ibarra Real Nova" fontWeight="400" fontSize="25px" lineHeight="38px">
        Enjoy an exciting free gift<br/> on your birthday
        </Typography>
      </CardContent>
    </Card>
</Grid>
<Grid item  xl={4} xs={4} style={{height:"400px",width:"350px"}}>
      <Card style={{ maxWidth:"360px",border: "none", boxShadow: "none"}}>
      <CardMedia sx={{maxWidth:200,maxHeight:300,marginLeft:9,marginTop:2,marginBottom:2}}
        component="img"
        height="200"
        width="200"
        image={vouchers}
        alt="vouchers"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign="center" fontFamily="Montserrat" fontWeight="700" fontSize="42px" lineHeight="52px">
        Vouchers
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center" fontFamily="Ibarra Real Nova" fontWeight="400" fontSize="25px" lineHeight="38px">
        Get amazing deals &<br/> vouchers using your Nova<br/> coins 
        </Typography>
      </CardContent>
    </Card>
</Grid>
      </Grid>
      <h2 className={classes.h2steps}>Challenges</h2>
      <Grid container spacing={3} style={{marginTop:"150px",marginLeft:"85px"}}>
      <Grid item  xl={6} xs={6} style={{height:"1000px",width:"570px"}}>
      <img src={mobilerewards} className={classes.img6} />
      </Grid>
       <Grid item xl={6} xs={6} style={{height:"1000px",width:"570px"}}>
      <h2 className={classes.h2p}>The perspective for a sustainable<br/> tomorrow is yet to achieve. Therefore, <br/>to accomplish this goal, our mobile <br/>app offers a gamut of weekly<br/> challenges. By logging in to our<br/> mobile app, one can participate in<br/> these challenges to earn Nova Coins <br/>and exciting hampers.</h2>
      </Grid>
      </Grid>
</React.Fragment>
);

}
export default Rewards;