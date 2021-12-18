import { CallMissedSharp } from '@material-ui/icons';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import React from 'react';
import Page from './supportPage';
import Rewards from './RewardsPage';
import ProductPage from './ProductPage';
import Bags from './components/Bags/Bags';
import Category from './components_shop/category';
import Cart from './components cart/Cart';
import Wishlist from './components_wishlist/Wishlist';
import CartExample from './components cart/Cart';
import AboutUs from './About/AboutUs';
import Profile from './profile';
import CartProvider from './store/cartProvider';
import BagsPage from '../src/components/Bags/Bags';
import Decor from './components/Bags/Decor';
import Essentials from './components/Bags/Essentials';
import Kitchen from './components/Bags/Kitchen';
import Stationary from './components/Bags/Stationary';
import  Accordion from './components_faq/Accordion';


function App() {
  return (
//     <Home/>
//     );
 <React.Fragment>

     <div className="App">
     {/* <Router>
      <div>
    <div className="App"> */}
{/* <Bags /> */}
{/* <Category /> */}
{/* <Cart /> */}
{/* <AboutUs /> */}

{/* <Wishlist /> */}
   <Router>
      <div>
      
        <Switch>
          <Route path="/" exact> 
       <Home />
          </Route>
          <Route path="/support" exact>
           <Page /> 
          </Route>
          <Route path="/wishlist" exact>
           <Wishlist /> 
          </Route>
          <Route path="/bag" exact>
           <CartExample /> 
          </Route>
          <Route path="/profile" exact>
           <Profile /> 
          </Route>
          <Route path="/bags" exact>
           <BagsPage /> 
          </Route>
          <Route path="/decor" exact>
           <Decor /> 
          </Route>
          <Route path="/essentials" exact>
           <Essentials /> 
          </Route>
          <Route path="/kitchen" exact>
           <Kitchen /> 
          </Route>
          <Route path="/stationary" exact>
           <Stationary /> 
          </Route>
           {/* <Route path="/blogs" exact>
           <BlogApp /> 
          </Route>  */}
          <Route path="/faq" exact>
           <Accordion /> 
          </Route>
          <Route path="/productpage/:id" exact>
           <ProductPage /> 
          </Route>
          <Route path="/rewards" exact>
           <Rewards /> 
          </Route>
          <Route path="/about" exact>
           <AboutUs /> 
          </Route>
          <Route path="/categories" exact>
           <Category /> 
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
    </React.Fragment>

 );
//         <Switch>
//           <Route path="/" exact> 
//        <Home />
//           </Route>
//           <Route path="/support" exact>
//            <Page /> 
//           </Route>
//           <Route path="/rewards" exact>
//            <Rewards /> 
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//     </div>
//     </React.Fragment> 
    
  // );
}

export default App;
