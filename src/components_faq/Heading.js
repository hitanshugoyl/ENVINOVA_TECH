import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/top/Navbar';


const Heading=()=>{
    return(
        <React.Fragment>
            <Navbar/>
            <h1 style={{fontFamily: 'Montserrat',
fonStyle: 'normal',
fontWeight: 'bold',
fontSize: '64px',
lineHeight: '78px',
textAlign: 'center',

margin:'20px',
color: '#F5A9A9'
}}>FREQUENTLY ASKED
QUESTIONS (FAQ)</h1>
        </React.Fragment>
    )
}

export default Heading;