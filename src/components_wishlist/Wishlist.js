import React,{useState} from 'react';
import WishlistNotLogged from './WishlistNotLogged'
  import WishlistEmpty from './WishlistEmpty';
  import WishlistLoggedin from './Wishlistloggedin';
  import NavBar from '../components/top/Navbar';
  import Footer from '../components/footer/Footer'; 
  import CategoryBar from '../components/top/CategoryBar';


const Wishlist=()=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const [isNotEmpty,setIsNotEmpty]=useState(false);
    const loggedInEmpty= (isLoggedIn && isNotEmpty) ? 'true' : 'false';
    const showWishlist=()=>{
      setIsLoggedIn(true);
    }
    const hideWishlist=()=>{
        setIsLoggedIn(false);
    }
    return (
        <div>
                    
        <NavBar /> 
       <CategoryBar />
       <h1 style={{marginTop:'30px',textAlign:'center',marginTop:'40px',fontFamily: 'Montserrat',fontStyle: 'normal',fontWeight: 'bold',fontSize: '96px',lineHeight: '78px',color: 'black'}}>WISHLIST</h1>  
       {/* <WishlistNotLogged /> */}
       {/* <WishlistEmpty /> */}
       {!isLoggedIn && <WishlistNotLogged />}
        {isLoggedIn && <WishlistLoggedin />} 
       {loggedInEmpty && <WishlistEmpty />};
       <Footer />
        </div>
    )
}

export default Wishlist;