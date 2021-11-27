import React from 'react';
import { useHistory } from 'react-router';
// import AddButton from 'AddButton';
import AddtoBag from './AddtoBag';
const Categoryproducts =()=>
{
    const history=useHistory();
    const handleProceed = (val) => {
     history.push(`/productpage/${val}`);
     console.log("clicked");
      };
    const submitCartHandler=(val)=>{
        //event.preventDefault();
           console.log(val.id+" "+val.pname);
           
          }
   const Product=[
       {
           id:1,
           pname:'Product1',
           pprice:79,
       },
       {
        id:2,
        pname:'Product2',
        pprice:79,
    },
    {
        id:3,
        pname:'Product3',
        pprice:79,
    },
    {
        id:4,
        pname:'Product4',
        pprice:79,
    }
   ]

    return (
        <div>
         <button style={{background:'transparent',border:'none'}}>  <img style={{width: '1275px',height: '483px',background: '#C4C4C4'}}></img></button>
            <div style={{display:'flex' ,columnGap:'150px'}}>
                <img alt ='pic' onClick={()=>{handleProceed(Product[0].id)}} style={{marginLeft:'50px',marginTop:'50px', width: '240px',height: '289px',background:'White',border: '2px solid #F5A9A9',boxSizing: 'border-box',borderRadius: '10px'}}></img>
                <img alt ='pic' onClick={()=>{handleProceed(Product[1].id)}} style={{width: '240px',marginTop:'50px',height: '289px', background:'white',border: '2px solid #F5A9A9',boxSizing: 'border-box',borderRadius: '10px'}}></img>
                <img alt ='pic' onClick={()=>{handleProceed(Product[2].id)}} style={{width: '240px',marginTop:'50px',height: '289px', background:'white',border: '2px solid #F5A9A9',boxSizing: 'border-box',borderRadius: '10px'}}></img>
                <img alt ='pic' onClick={()=>{handleProceed(Product[3].id)}} style={{width: '240px',marginTop:'50px',height: '289px', background:'white',border: '2px solid #F5A9A9',boxSizing: 'border-box',borderRadius: '10px'}}></img>


            </div>
            <div style={{display:'flex',columnGap:'250px'}}>
                <p style={{marginLeft:'60px',marginTop:'30px',fontFamily:'Oswald',fontStyle: 'normal',fontWeight: 'normal',fontSize: '36px',lineHeight: '53px',textAlign: 'center',color: '#000000'}}>{Product[0].pname}</p>
                <p style={{marginLeft:'60px',marginTop:'30px',fontFamily:'Oswald',fontStyle: 'normal',fontWeight: 'normal',fontSize: '36px',lineHeight: '53px',textAlign: 'center',color: '#000000'}}>{Product[0].pname}</p>
                <p style={{marginLeft:'60px',marginTop:'30px',fontFamily:'Oswald',fontStyle: 'normal',fontWeight: 'normal',fontSize: '36px',lineHeight: '53px',textAlign: 'center',color: '#000000'}}>{Product[0].pname}</p>
                <p style={{marginLeft:'60px',marginTop:'30px',fontFamily:'Oswald',fontStyle: 'normal',fontWeight: 'normal',fontSize: '36px',lineHeight: '53px',textAlign: 'center',color: '#000000'}}>{Product[0].pname}</p>

            </div>
            <div style={{display:'flex',columnGap:'250px'}}>
                <p style={{marginLeft:'70px',marginTop:'1px',fontFamily:'Ibarra Real Nova',fontStyle: 'normal',fontWeight: 'bold',fontSize: '48px',lineHeight: '60px',textAlign: 'center',color: '#000000'}}>Rs {Product[0].pprice}</p>
                <p style={{marginLeft:'70px',marginTop:'1px',fontFamily:'Ibarra Real Nova',fontStyle: 'normal',fontWeight: 'bold',fontSize: '48px',lineHeight: '60px',textAlign: 'center',color: '#000000'}}>Rs {Product[0].pprice}</p>
                <p style={{marginLeft:'70px',marginTop:'1px',fontFamily:'Ibarra Real Nova',fontStyle: 'normal',fontWeight: 'bold',fontSize: '48px',lineHeight: '60px',textAlign: 'center',color: '#000000'}}>Rs {Product[0].pprice}</p>
                <p style={{marginLeft:'70px',marginTop:'1px',fontFamily:'Ibarra Real Nova',fontStyle: 'normal',fontWeight: 'bold',fontSize: '48px',lineHeight: '60px',textAlign: 'center',color: '#000000'}}>Rs {Product[0].pprice}</p>

            </div>
<div style={{display:'flex',columnGap:'160px'}}>
    {/* <AddButton />
    <AddButton />

    <AddButton />
    <AddButton /> */}
    <AddtoBag onClick={()=>{
                submitCartHandler(Product[0])
              }}/>
    <AddtoBag onClick={()=>{
                submitCartHandler(Product[1])
              }}/>
              <AddtoBag onClick={()=>{
                submitCartHandler(Product[2])
              }}/>
              <AddtoBag onClick={()=>{
                submitCartHandler(Product[3])
              }}/>
    

    
</div>

        </div>
    )
}

export default Categoryproducts;