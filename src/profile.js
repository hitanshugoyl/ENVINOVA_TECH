import React from 'react';
import './profile.css';
import Footer from './components/footer/Footer';
import Navbar from "./components/top/Navbar";

const profile = () => {
    return (
        <div class="text-center">
            <Navbar />
            <p>PROFILE</p>
            <br />
            <br />
            <br />
            <br />
            <div class="row justify-content-center align-items-center h-100">
                <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <form action="" />
                    <div class="form-group">
                        <input class="form-control" id="floatingInput" placeholder="Email/Mobile Number" />
                    </div>
                </div>
            </div>
            <br />
            <div class="row justify-content-center align-items-center h-100">
                <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <form action="" />
                    <div class="form-group">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    </div>
                </div>
            </div>
            <br />
            {/* <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div className="rectangle2 " style={{position: 'absolute', width: '357px', height: '97px',background: '#F5A9A9',borderRadius: '20px'}}>
            </div>
            </div> */}

            <button style={{ width: '357px', height: '97px',bordeRadius: '20px',fontFamily: 'Oswald',fontWeight:'normal',fontSize: '72px',lineHeight: '107px',background: '#F5A9A9',borderRadius: '10px', textAlign: 'center'}}>Login</button>
            
            <br />
            <div class="row">
                <p id="newUser">NEW USER?</p>
            </div>
            <br />
            <br />

            <div class="row justify-content-center align-items-center h-100">
                <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <form action="" />
                    <div class="form-group">
                    <input type="text" id="fname" placeholder="First Name*" textAlign="center"/> 
                    </div>
                </div>
            </div>
            <br />
            <div class="row justify-content-center align-items-center h-100">
                <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <form action="" />
                    <div class="form-group">
                    <input type="text" id="lname" placeholder="Last Name" textAlign="center"/>  
                    </div>
                </div>
            </div>
            <br />
            <div class="row justify-content-center align-items-center h-100">
                <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <form action="" />
                    <div class="form-group">
                    <input type="number" id="mobile" placeholder="Mobile*" textAlign="center"/>  
                    </div>
                </div>
            </div>
            <br />
            <div class="row justify-content-center align-items-center h-100">
                <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <form action="" />
                    <div class="form-group">
                    <input type="text" id="email" placeholder="Email ID" textAlign="center"/>  
                    </div>
                </div>
            </div>
            <br />
            <div class="row justify-content-center align-items-center h-100">
                <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <form action="" />
                    <div class="form-group">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password*" />
                    </div>
                </div>
            </div>
            <br />
            <div class="row justify-content-center align-items-center h-100">
                <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <form action="" />
                    <div class="form-group">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Confirm Password*" />
                    </div>
                </div>
            </div>

            <br />
            <br />
            <button style={{ width: '357px', height: '97px',bordeRadius: '20px',fontFamily: 'Oswald',fontWeight:'normal',fontSize: '72px',lineHeight: '107px',background: '#F5A9A9',borderRadius: '10px', textAlign: 'center'}}>Sign Up</button>
            <br />
            <br />
            <div class="row">
                <p id="or">or</p>
            </div>
            
            <div class="row">
                <button style={{position: 'absolute', width: '439px', height: '56px', background: '#FFFFFF', border: '1px solid #000000', boxSizing: 'border-box', borderRadius: '10px'}}>Sign Up with Google</button>
            </div>
            {/* <Footer /> */}
            <br />
        </div>
    )
}
export default profile;