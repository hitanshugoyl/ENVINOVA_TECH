import React from 'react';
import classes from '../Bag.module.css';
import data from '../data';
import { useState } from 'react';
import RecentlyViewed from './RecentlyViewed';
import Checkout from './Checkout';
import NavBar from '../components/top/Navbar';
import Footer from '../components/footer/Footer'; 
import CategoryBar from '../components/top/CategoryBar';

function Example() {
    const { products } = data;
    const qty=0;
    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {
            const exist = cartItems.find((x) => x.id === product.id);
            if (exist) {
              setCartItems(
                cartItems.map((x) =>
                  x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
              );
            } else {
              setCartItems([...cartItems, { ...product, qty: 1 }]);
            }
          };
          const onRemove = (product) => {
            const exist = cartItems.find((x) => x.id === product.id);
            if (exist.qty === 1) {
              setCartItems(cartItems.filter((x) => x.id !== product.id));
            } else {
              setCartItems(
                cartItems.map((x) =>
                  x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
              );
            }
          };
    return (
        <div className={classes.all}>

<NavBar />
<CategoryBar />

            <h1 style={{
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '64px',
                lineHeight: '78px',
                textAlign: 'center',

                color: '#F5A9A9'
            }}>Bag</h1>

            <div className={classes.container}>
                <p style={{ marginRight: '200px', marginLeft: '154px' }}>Product</p>
                <p style={{ marginRight: '255px', marginLeft: '400px' }} >Quantity</p>
                <p>Total</p>
            </div>
            <div>
                <hr style={{ width: '1286px', height: '5px', background: '#C4C4C4' }}></hr>
            </div>
            <div className={classes.container2}>
                <div>
                
                    <img alt='pic' style={{ marginLeft: '174px', background: '#C4C4C4', borderradius: '5px', width: '99px', height: '75px' }}></img>
                    
                
                    <p>{products[1].name} <br /> {products[1].price}</p>
                    </div>
                <div className={classes.quantity} style={{border: '2px solid #C4C4C4',boxSizing: 'border-box',width: '330px',height: '46px'}}>
                <button onRemove={onRemove}  style={{height:'46px',width:'41px',background: '#FFFFFF'}} >-</button>&nbsp;&nbsp;&nbsp;&nbsp;{qty}&nbsp;&nbsp;&nbsp;&nbsp;
                    <button  onClick={onAdd} style={{height:'46px',width:'41px',background: '#FFFFFF'}} >+</button>
                    </div>
                    <div>
                    <p style={{marginRight:'170px'}}>Rs{qty*products[1].price}</p>
                    </div>
            </div>
            <div>
              <br /><br /><br />
                <hr style={{ width: '1286px', height: '5px', background: '#C4C4C4' }}></hr>
            </div>

            <div className={classes.total}>
                <h1>Total : Rs{products[1].price*qty}</h1>
                <p>Prices are inclusive of all taxes <br />Shipping calculated at checkout</p>
                <Checkout />
                <h6>Redeem your Nova Coins at checkout</h6>

            </div>
<RecentlyViewed />
  <h1 style={{marginTop:'50px',fontFamily: 'Montserrat',fontStyle: 'normal',fontWeight: 'bold',fonSize: '36px',lineHeight: '44px',textAlign: 'center',color: '#9FC8A8'}}>Happy Ordering!</h1>
<Footer />
        </div>
    )
}
export default Example;


// import React, { PureComponent } from "react";
// import { Provider } from "react-redux";
// import { createStore, combineReducers } from "redux";
// import {
//   Cart,
//   Product,
//   CheckoutButton,
//   cartLocalization,
//   cartReducer,
//   setCartCurrency
// } from "react-shopping-cart";

// import "bootstrap/dist/css/bootstrap.css";
// import "animate.css/animate.min.css";
// import "font-awesome/css/font-awesome.min.css";

// const { getDefaultLocalization } = cartLocalization;

// // You may take localization object from wherever you want, that's just an example
// // For more information, see localization section
// const iPadCaseLocalization = {
//   color: "Color",
//   iPadCase: "iPad case",
//   red: "Red",
//   green: "Green",
//   yellow: "Yellow",
//   GBP: "£",
//   EUR: "€",
//   USD: "$"
// };

// const iPadPropertiesWithAdditionalCostLocalization = {
//   yellow: "Yellow (+{cost, number, CUR})"
// };

// const store = createStore(
//   combineReducers({
//     cart: cartReducer
//     // Your own reducers, sir
//   })
// );

// store.dispatch(setCartCurrency("USD"));

// class Example extends PureComponent {
//   state = {
//     product: {
//       name: "iPadCase",
//       id: "ipad-case",
//       path: "/shop/ipad-case/",
//       properties: {
//         color: [
//           "red",
//           "green",
//           {
//             additionalCost: {
//               GBP: 1,
//               EUR: 2,
//               USD: 3.5
//             },
//             value: "yellow"
//           }
//         ]
//       },
//       propertiesToShowInCart: ["color"],
//       prices: { GBP: 70, EUR: 80, USD: 90 },
//       currency: "GBP",
//       imageSrc: "1-483x321.jpeg"
//     },
//     getProductLocalization: getDefaultLocalization("product", "en", {
//       ...iPadCaseLocalization,
//       ...iPadPropertiesWithAdditionalCostLocalization
//     }),
//     getCheckoutButtonLocalization: getDefaultLocalization(
//       "checkoutButton",
//       "en",
//       iPadCaseLocalization
//     ),
//     getCartLocalization: getDefaultLocalization(
//       "cart",
//       "en",
//       iPadCaseLocalization
//     )
//   };

//   render() {
//     const {
//       product,
//       getCheckoutButtonLocalization,
//       getProductLocalization,
//       getCartLocalization
//     } = this.state;

//     const checkoutButtonElement = (
//       <CheckoutButton
//         getLocalization={getCheckoutButtonLocalization}
//         checkoutURL="/to/my/checkout"
//       />
//     );
//     return (
//       <Provider store={store}>
//         <div className="container">
//           <Product
//             {...product}
//             checkoutButton={checkoutButtonElement}
//             getLocalization={getProductLocalization}
//           />
//           <Cart
//             checkoutButton={checkoutButtonElement}
//             getLocalization={getCartLocalization}
//           />
//         </div>
//       </Provider>
//     );
//   }
// }

// export default Example;