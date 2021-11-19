
import React,{useRef,useState,useContext} from 'react';
import classes from './signuppage.module.css';
import Grid from '@material-ui/core/Grid';
import CenteredTabs from './components/centertabs';
import Footer from './components/footer/Footer';
import Navbar from './components/top/Navbar';
import CategoryBar from './components/top/CategoryBar';
import homeending from './images/homeimgs/homeending.jpg';
import profilephoto from './images/profileimgs/profilephoto.png';
import googleicon from './images/profileimgs/googleicon.png';
import AuthContext from './store/auth-context';

const Signup=()=>{
const [isLogin,setIsLogin]=useState(true);
const switchModeHandler=()=>{
  setIsLogin((prevState)=>!prevState);
}
const AuthCtx=useContext(AuthContext);
  const firstnameRef = useRef();
  const passwordRef = useRef();
  const emailRef=useRef();
  const lastnameRef=useRef();
  const mobileNoRef=useRef();


  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName=firstnameRef.current.value;
    const lastName=lastnameRef.current.value;
    const emailID=emailRef.current.value;
    const inputPassword=passwordRef.current.value;
    const mobileNumber=mobileNoRef.current.value;
//console.log(firstName + lastName + emailID + inputPassword + mobileNumber);
if(isLogin){
//LOGIN ENDPOINT
//success case: AuthCtx.login(data.idToken); where idToken from database.
}else{
  //SIGNUP ENDPOINT
}


  };
    return(
<React.Fragment>
<Navbar  />
          <CategoryBar />
<div>
    <h1 className={classes.h1p}>PROFILE</h1>
    </div>
<div>
    <img src={profilephoto} className={classes.profilephoto}/>
    </div>
    <section className={classes.auth}>
    <form className={classes.form} >
    <div className={classes.control}>
        <label htmlFor='Email'></label>
        <input type='Email' id='Email' placeholder='Email' ref={emailRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='password'></label>
        <input type='password' id='password' placeholder='Password' ref={passwordRef}/>
      </div>
      <div className={classes.actions}>
        <button className={classes.submitb} onClick={handleSubmit}>LOGIN</button>
      </div>
      </form>
      <div>
    <h1 className={classes.userh1}>NEW USER?</h1>
    </div>
      <form className={classes.form2} onSubmit={handleSubmit}>
      <div className={classes.control}>
        <label htmlFor='firstname'></label>
        <input type='text' id='firstname' placeholder='First Name' ref={firstnameRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='lastname'></label>
        <input type='text' id='lastname' placeholder='Last Name'ref={lastnameRef}/>
      </div>
      
      <div className={classes.control}>
        <label htmlFor='Mnumber'></label>
        <input type='number' id='Mnumber' placeholder='Mobile'ref={mobileNoRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='Email'></label>
        <input type='Email' id='Email' placeholder='Email'ref={emailRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='password'></label>
        <input type='password' id='password' placeholder='Password' ref={passwordRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='confirmpassword'></label>
        <input type='password' id='confirmpassword' placeholder='Confirm Password'/>
      </div>
      <div className={classes.actions}>
        <button className={classes.submitb} onClick={handleSubmit}>SIGN UP</button>
      </div>
    </form>
    </section>
    <h2 className={classes.h2or}>OR</h2>
    <div className={classes.actionsignup}>
        
        <button className={classes.signupg} ><img src={googleicon} style={{marginLeft:"-340px",marginTop:"-5px"}}/><div style={{paddingLeft:"20px",width:"250px",marginLeft:"90px",marginTop:"-50px"}}>SIGN UP WITH GOOGLE</div></button>
      </div>

          <div style={{marginTop:"120px"}}>
    <CenteredTabs />
</div>
<img src={homeending} style={{height:"263px",width:"1366px",paddingTop:"60px"}} />
<div style={{paddingTop:"100px"}}>
          <Footer/>
          </div>
</React.Fragment>
    )
}
export default Signup;