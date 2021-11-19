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
import Profile from './profile';
import AboutUs from './About/AboutUs';

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
          <Route path="/rewards" exact>
           <Rewards /> 
          </Route>
          <Route path="/about" exact>
           <AboutUs /> 
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
