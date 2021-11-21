import React from 'react';
import WishlistNotLogged from './WishlistNotLogged';


const WishlistLoggedin =()=>{

    const Product=[
        {
            pname:'Product1',
            pprice:79,
        },
        {
         pname:'Product2',
         pprice:79,
     },
     {
         pname:'Product3',
         pprice:79,
     },
     {
         pname:'Product4',
         pprice:79,
     }
    ]
    return(
        <div>
<h2 style={{marginTop:'50px',fontFamily: 'Oswald',fontStyle: 'normal',fontWeight: 'bold',fontSize: '36px',
lineHeight: '53px',textAlign: 'center',color:' #C4C4C4'}}>3 Products</h2>     


<div style={{display:'flex' ,columnGap:'150px'}}>
                <img alt ='pic' style={{marginLeft:'50px',marginTop:'50px', width: '273px',height: '398px',background:'#C4C4C4',borderRadius: '5px'}}></img>
                <img alt ='pic' style={{marginLeft:'50px',marginTop:'50px', width: '273px',height: '398px',background:'#C4C4C4',borderRadius: '5px'}}></img>
                <img alt ='pic' style={{marginLeft:'50px',marginTop:'50px', width: '273px',height: '398px',background:'#C4C4C4',borderRadius: '5px'}}></img>
                <img alt ='pic' style={{marginLeft:'50px',marginTop:'50px', width: '273px',height: '398px',background:'#C4C4C4',borderRadius: '5px'}}></img>


            </div>
            <div style={{display:'flex',columnGap:'200px'}}>
                <p style={{marginLeft:'60px',marginTop:'30px',fontFamily:'Oswald',fontStyle: 'normal',fontWeight: 'normal',fontSize: '36px',lineHeight: '53px',textAlign: 'center',color: '#000000'}}>{Product[0].pname}</p>
                <p style={{marginLeft:'60px',marginTop:'30px',fontFamily:'Oswald',fontStyle: 'normal',fontWeight: 'normal',fontSize: '36px',lineHeight: '53px',textAlign: 'center',color: '#000000'}}>{Product[0].pname}</p>
                <p style={{marginLeft:'60px',marginTop:'30px',fontFamily:'Oswald',fontStyle: 'normal',fontWeight: 'normal',fontSize: '36px',lineHeight: '53px',textAlign: 'center',color: '#000000'}}>{Product[0].pname}</p>
                <p style={{marginLeft:'60px',marginTop:'30px',fontFamily:'Oswald',fontStyle: 'normal',fontWeight: 'normal',fontSize: '36px',lineHeight: '53px',textAlign: 'center',color: '#000000'}}>{Product[0].pname}</p>

            </div>
            <div style={{display:'flex',columnGap:'180px'}}>
                <p style={{marginLeft:'70px',marginTop:'1px',fontFamily:'Ibarra Real Nova',fontStyle: 'normal',fontWeight: 'bold',fontSize: '48px',lineHeight: '60px',textAlign: 'center',color: '#000000'}}>Rs {Product[0].pprice}</p>
                <p style={{marginLeft:'70px',marginTop:'1px',fontFamily:'Ibarra Real Nova',fontStyle: 'normal',fontWeight: 'bold',fontSize: '48px',lineHeight: '60px',textAlign: 'center',color: '#000000'}}>Rs {Product[0].pprice}</p>
                <p style={{marginLeft:'70px',marginTop:'1px',fontFamily:'Ibarra Real Nova',fontStyle: 'normal',fontWeight: 'bold',fontSize: '48px',lineHeight: '60px',textAlign: 'center',color: '#000000'}}>Rs {Product[0].pprice}</p>
                <p style={{marginLeft:'70px',marginTop:'1px',fontFamily:'Ibarra Real Nova',fontStyle: 'normal',fontWeight: 'bold',fontSize: '48px',lineHeight: '60px',textAlign: 'center',color: '#000000'}}>Rs {Product[0].pprice}</p>

            </div>
            <div style={{display:'flex',columnGap:'180px'}}>

                <button style={{marginBottom:'100px',fontFamily: 'Ibarra Real Nova',fontWeight:'bold',fontSize: '30px',background: '#F5A9A9',borderRadius: '10px',width: '350px',height: '68px'}}>Move to Bag</button>
          
                <button style={{marginBottom:'100px',fontFamily: 'Ibarra Real Nova',fontWeight:'bold',fontSize: '30px',background: '#F5A9A9',borderRadius: '10px',width: '350px',height: '68px'}}>Move to Bag</button>
                <button style={{marginBottom:'100px',fontFamily: 'Ibarra Real Nova',fontWeight:'bold',fontSize: '30px',background: '#F5A9A9',borderRadius: '10px',width: '350px',height: '68px'}}>Move to Bag</button>
                <button style={{marginBottom:'100px',fontFamily: 'Ibarra Real Nova',fontWeight:'bold',fontSize: '30px',background: '#F5A9A9',borderRadius: '10px',width: '350px',height: '68px'}}>Move to Bag</button>

            </div>


   </div>
    )
}


export default WishlistLoggedin;