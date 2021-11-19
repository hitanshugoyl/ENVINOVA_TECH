
import React, {useRef}from 'react';
import { useHistory } from 'react-router';
import classes from './supportPage.module.css';
import supportMailpic from './images/supportimgs/supportMailpic.png';
import Grid from '@material-ui/core/Grid';
import homeending from './images/homeimgs/homeending.jpg'
import CenteredTabs from './components/centertabs';
import Footer from './components/footer/Footer';
import Navbar from './components/top/Navbar';
import CategoryBar from './components/top/CategoryBar';


const SupportPage=()=>{
const history=useHistory();
  const nameRef=useRef();
  const emailRef=useRef();
  const addressRef=useRef();
  const mobileNoRef=useRef();
  const messageRef=useRef();

  const handleSupportSubmit = (e) => {
    e.preventDefault();
    const Name=nameRef.current.value;
    const emailID=emailRef.current.value;
    const address=addressRef.current.value;
    const mobileNumber=mobileNoRef.current.value;
    const message=messageRef.current.value;
//console.log(Name + message + emailID + address + mobileNumber);
//send data to bakend
  };
const clickHereHandler=(e)=>{
  e.preventDefault();
  history.push("/faq");
}
return (
<React.Fragment>
<Navbar  />
          <CategoryBar />
<div style={{paddingTop:"75px",height:"152px"}}>
<h2 style={{fontWeight:"700",paddingTop:"75px",fontSize:"96px",color:"#000000",fontFamily:"Montserrat",lineHeight:"118px",marginLeft:"340px",height:"76px",width:"794px"}}>HELP CENTRE</h2>
</div>
<div style={{marginLeft:"400px"}}>
<h3 style={{marginLeft:"80px",fontWeight:"400",paddingTop:"120px",width:"587px",height:"45px",fontSize:"36px",color:"#828282",fontFamily:"Ibarra Real Nova",lineHeight:"45px"}}>​We’re happy to help you. </h3>
</div>
<div style={{paddingTop:"60px"}} >
<h2 style={{fontWeight:"500",paddingTop:"75px",fontSize:"36px",color:"#000000",textAlign:"center",fontFamily:"Oswald",lineHeight:"54px",marginLeft:"371px",height:"53px",width:"579px"}}>FOR ORDER RELATED QUERY</h2>
</div>


<form className={classes.form} onSubmit={handleSupportSubmit}>
      <div className={classes.control}>
        <label htmlFor='name'></label>
        <input type='text' id='name' placeholder='Name'  ref={nameRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='Email'></label>
        <input type='Email' id='Email' placeholder='Email'  ref={emailRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='Mnumber'></label>
        <input type='number' id='Mnumber' placeholder='Mobile Number' ref={mobileNoRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='Address'></label>
        <input type='text' id='Address' placeholder='Address' ref={addressRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='Message'></label>
        <input type="textarea" id='Address' placeholder='Message'  ref={messageRef}/>
      </div>
      <div className={classes.actions}>
        
        <button className={classes.submit} onClick={handleSupportSubmit}>SUBMIT</button>
      </div>
    </form>

    <div style={{paddingTop:"60px"}} >
<h2 style={{fontWeight:"700",paddingTop:"50px",fontSize:"48px",color:"#000000",textAlign:"center",fontFamily:"Montserrat",lineHeight:"59px",marginLeft:"300px",height:"59px",width:"752px"}}>Frequently Asked Questions</h2>
</div>
<button className={classes.submit} onClick={clickHereHandler}>+Click Here</button>

<Grid container spacing={2} style={{marginTop:"5px"}}>
      <Grid item  xs={6} style={{height:"500px"}}>
        <div>
      <h2 style={{fontWeight:"700",paddingTop:"50px",fontSize:"36px",color:"#000000",textAlign:"center",fontFamily:"Oswald",lineHeight:"54px",marginTop:"98px",marginLeft:"133px",height:"53px",width:"372px"}}>Still want to reach us:</h2>
    <h2 style={{fontWeight:"700",paddingTop:"50px",fontSize:"24px",color:"#000000",textAlign:"center",fontFamily:"Montserrat",lineHeight:"29px",paddingTop:"60px",marginLeft:"133px",height:"29px",width:"209px"}}>Mailing Address:</h2>
    <h4 style={{fontWeight:"700",paddingTop:"200px",fontSize:"24px",color:"#4F4F4F",fontFamily:"Ibarra Real Nova",lineHeight:"30px",paddingTop:"40px",marginLeft:"150px",height:"184px",width:"369px"}}>Cabin 7<br />
Basment<br />
SCF 103<br />
Phase 11<br />
Mohali <br />
Punjab 160062</h4>
</div>
</Grid>
<Grid item  xs={6} style={{height:"500px"}}>
<img src={supportMailpic} style={{width:"305px",height:"365px",marginLeft:"370px",marginTop:"130px"}}/>
</Grid>
      </Grid>

      <div style={{paddingTop:"50px"}}>
    <CenteredTabs />
</div>
<img src={homeending} style={{height:"263px",width:"1366px",paddingTop:"60px"}} />
<div style={{paddingTop:"100px"}}>
          <Footer/>
          </div>

</React.Fragment>
);

}

export default SupportPage;