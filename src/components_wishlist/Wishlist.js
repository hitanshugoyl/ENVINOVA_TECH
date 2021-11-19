import React from 'react';
import WishlistNotLogged from './WishlistNotLogged'
  import WishlistEmpty from './WishlistEmpty';
  import WishlistLoggedin from './Wishlistloggedin';
  import NavBar from '../components/top/Navbar';
  import Footer from '../components/footer/Footer'; 
  import CategoryBar from '../components/top/CategoryBar';
const Wishlist=()=>{
    
    return (
        <div>
            
            <h1 style={{marginTop:'30px',textAlign:'center',marginTop:'40px',fontFamily: 'Montserrat',fontStyle: 'normal',fontWeight: 'bold',fontSize: '96px',lineHeight: '78px',color: 'black'}}>WISHLIST</h1>           
       {/* <NavBar /> */}
       <CategoryBar />
       {/* <WishlistNotLogged /> */}
       {/* <WishlistEmpty /> */}
       <WishlistLoggedin />
       <Footer />
        </div>
    )
}

export default Wishlist;