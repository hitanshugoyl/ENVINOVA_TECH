import React from 'react'
import FooterUpperIcons from './FooterUpperIcons'
import FooterMiddle from './FooterMiddle'
import Slogon from './Picture2.png';
function Footer() {
    return (
        <div style={{marginTop:"24px"}}>
                        <img src ={Slogon} style={{height:"163px", width:"1366px", top:"2700px", position:"relative"}}></img>

            <FooterUpperIcons/>
            <FooterMiddle/>
        </div>
    )
}

export default Footer