import React from 'react'
import AddtoBag from './AddtoBag'

const CategoryProducts=()=>{

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
    return (
        <div>
 {/* <img style={{width: '1275px',height: '483px',background: '#C4C4C4'}}></img> */}
            <div style={{display:'flex' ,columnGap:'140px',marginLeft:'10px'}}>
                <img style={{marginLeft:'50px',marginTop:'50px', width: '240px',height: '289px',background:'White',border: '2px solid #F5A9A9',boxSizing: 'border-box',borderRadius: '10px'}}></img>
                <img style={{width: '240px',marginTop:'50px',height: '289px', background:'white',border: '2px solid #F5A9A9',boxSizing: 'border-box',borderRadius: '10px'}}></img>
                <img style={{width: '240px',marginTop:'50px',height: '289px', background:'white',border: '2px solid #F5A9A9',boxSizing: 'border-box',borderRadius: '10px'}}></img>
                <img style={{width: '240px',marginTop:'50px',height: '289px', background:'white',border: '2px solid #F5A9A9',boxSizing: 'border-box',borderRadius: '10px'}}></img>


            </div>
            <div style={{display:'flex',columnGap:'200px'}}>
                <p style={{marginLeft:'60px',marginTop:'30px',fontFamily:'Oswald',fontStyle: 'normal',fontWeight: 'normal',fontSize: '36px',lineHeight: '53px',textAlign: 'center',color: '#000000'}}>{Product[0].pname}</p>
                <p style={{marginLeft:'60px',marginTop:'30px',fontFamily:'Oswald',fontStyle: 'normal',fontWeight: 'normal',fontSize: '36px',lineHeight: '53px',textAlign: 'center',color: '#000000'}}>{Product[0].pname}</p>
                <p style={{marginLeft:'60px',marginTop:'30px',fontFamily:'Oswald',fontStyle: 'normal',fontWeight: 'normal',fontSize: '36px',lineHeight: '53px',textAlign: 'center',color: '#000000'}}>{Product[0].pname}</p>
                <p style={{marginLeft:'60px',marginTop:'30px',fontFamily:'Oswald',fontStyle: 'normal',fontWeight: 'normal',fontSize: '36px',lineHeight: '53px',textAlign: 'center',color: '#000000'}}>{Product[0].pname}</p>

            </div>
            <div style={{display:'flex',columnGap:'190px'}}>
                <p style={{marginLeft:'70px',marginTop:'1px',fontFamily:'Ibarra Real Nova',fontStyle: 'normal',fontWeight: 'bold',fontSize: '48px',lineHeight: '60px',textAlign: 'center',color: '#000000'}}>Rs {Product[0].pprice}</p>
                <p style={{marginLeft:'70px',marginTop:'1px',fontFamily:'Ibarra Real Nova',fontStyle: 'normal',fontWeight: 'bold',fontSize: '48px',lineHeight: '60px',textAlign: 'center',color: '#000000'}}>Rs {Product[0].pprice}</p>
                <p style={{marginLeft:'70px',marginTop:'1px',fontFamily:'Ibarra Real Nova',fontStyle: 'normal',fontWeight: 'bold',fontSize: '48px',lineHeight: '60px',textAlign: 'center',color: '#000000'}}>Rs {Product[0].pprice}</p>
                <p style={{marginLeft:'70px',marginTop:'1px',fontFamily:'Ibarra Real Nova',fontStyle: 'normal',fontWeight: 'bold',fontSize: '48px',lineHeight: '60px',textAlign: 'center',color: '#000000'}}>Rs {Product[0].pprice}</p>

            </div>
<div style={{display:'flex',columnGap:'130px'}}>
    {/* <AddButton />
    <AddButton />

    <AddButton />
    <AddButton /> */}
    <AddtoBag />
    <AddtoBag /><AddtoBag /><AddtoBag />
    

    
</div>
        </div>
    )
}

export default CategoryProducts;