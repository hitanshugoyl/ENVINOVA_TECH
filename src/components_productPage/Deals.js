import React from 'react';
 import './Deals1.css'
import img1 from './bas1.jpg';
import img2 from './bas2.jpg';
import { BsFillBagFill } from 'react-icons/bs';

const Deals = () => {

    const Deals =[
{
  name:'Sheprical Bamboo basket',
  price:499
},
{
  name:'Sheprical Bamboo basket',
  price:499
}
    ];

    return (
    <div className='Deals'>
       <h1>Great Deals For You</h1>
        <h2>Buy More,Save More</h2>

<div class="pic">
  <div class="pic1">
    
  <img style={{marginTop:'20px',height:'252px',width:'193px',background:' #C4C4C4'}}></img> 
  </div>
  {/* <h3 id='one'>{Deals[0].name}</h3>
  <h3 id='priceone'>Rs{Deals[0].price}</h3> */}
  <p style={{marginTop:'100px',fontSize: '48px',fontFamily: 'Montserrat'}}>+</p>
  <div class="pic2">
    
    <img style={{marginTop:'20px',height:'252px',width:'193px',background:' #C4C4C4'}}></img> 
  
  </div>
  {/* <h3 id='two'>{Deals[1].name}</h3>
  <h3 id='pricetwo'>Rs{Deals[1].price}</h3> */}


<div className='discount'>
  <p id='together'>Together For</p>
  <div className='dealoffer'>
  <p id='dealprice'>Rs {Deals[0].price+Deals[1].price-99}</p>
  <p id='originalprice'>Rs {Deals[0].price+Deals[1].price}</p>
  {/* <div className='line'><hr ></hr></div> */}
  <h4>(10% off)</h4>
  </div>
  <button className="cart"><BsFillBagFill />Add to Bag</button>

</div>
       </div>
        </div>
    
 

    )
}

export default Deals;
