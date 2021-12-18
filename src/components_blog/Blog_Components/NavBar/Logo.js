import React from 'react';
import logo from './logoEnvinova.png'; // Tell webpack this JS file uses this image

const logoStyle={
    
     height:40,
     margin: "0 auto",
  
  };

const Header=({className}) =>{
  
  return <img src={logo} alt="Logo" style={logoStyle} />
     
}

export default Header;