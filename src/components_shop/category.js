import React from 'react';
import CategoryProducts from './categoryproducts'
import NavBar from '../components/top/Navbar';
import Footer from '../components/footer/Footer'; 
import CategoryBar from '../components/top/CategoryBar';


const category =()=>
{
    const category =[
        {
            name:'Bags',

        },
        {
          name:'Decor',  
        },
        {
            name:'Essentials',
        },
        {
            name:'Kitchen',
        }
    ]
    return (
        <div> 
            <NavBar />
            <CategoryBar />

           
            <h1 style={{textAlign:'left',marginLeft:'100px',fontFamily: 'Montserrat',fontStyle: 'normal',fontWeight: 'bold',fontSize: '64px',lineHeight: '78px',color: '#F5A9A9'}}>{category[0].name}</h1>           
           
           <CategoryProducts />
            <h1 style={{textAlign:'left',marginLeft:'100px',fontFamily: 'Montserrat',fontStyle: 'normal',fontWeight: 'bold',fontSize: '64px',lineHeight: '78px',color: '#F5A9A9'}}>{category[1].name}</h1>           
            <CategoryProducts />

            <h1 style={{textAlign:'left',marginLeft:'100px',fontFamily: 'Montserrat',fontStyle: 'normal',fontWeight: 'bold',fontSize: '64px',lineHeight: '78px',color: '#F5A9A9'}}>{category[2].name}</h1>           
            <CategoryProducts />

            <h1 style={{textAlign:'left',marginLeft:'100px',fontFamily: 'Montserrat',fontStyle: 'normal',fontWeight: 'bold',fontSize: '64px',lineHeight: '78px',color: '#F5A9A9'}}>{category[3].name}</h1>           
            <CategoryProducts />

            <Footer />


        </div>
    )
}

export default category;