
import React from 'react';
import logo from './logoEnvinova.png'; // Tell webpack this JS file uses this image
import { useHistory } from 'react-router';

const logoStyle={
    
     height:44,
     margin: "0 auto",
     pointerEvents: "all",
     cursor:"pointer"
  
  };

const Header=({className},props) =>{
  const history=useHistory();
  const imageClick=()=>{
    history.push("/");
  }
  return <img src={logo} alt="Logo" style={logoStyle} onClick={imageClick} />
     
}

export default Header;
