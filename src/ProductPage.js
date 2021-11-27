import {React, useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import About from "./components_productPage/About";
import "./ProductPage.css";
//import Colors from './components_productPage/Colors'
import DetailsThumb from "./components_productPage/DetailsThumb";
import Deals from "./components_productPage/Deals";
import bas1 from "./components_productPage/bas1.jpg";
import bas2 from "./components_productPage/bas2.jpg";
import bas3 from "./components_productPage/bas3.jpg";
import bas4 from "./components_productPage/bas4.jpg";
import Rating from "./components_productPage/Rating";
import AlsoBought from "./components_productPage/AlsoBought";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import Slider from "./components_productPage/Slider";
// import Bag from './Bag';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import axios from "axios";

function ProductPage() {
  const {id}=useParams();
  const [products, setProducts] = useState([{
    _id: "1",
    title: "hello",
    src: [
      bas1,
      bas2,
      bas3,
      bas4,
    ],
    description: "Free delivery above 799/-",
    content1: "100% Original product  ",
    content2: "Easy and secured product ",
    content3: "10 day free return / Exchange ",
    price: 499,
    colors: ["red", "black", "crimson", "teal"],
    count: 1,
    offers: "Redeem your nova coins",
    Features: [],
    Featureinfo1:
      "Color : These handcrafted baskets are multicolored, with beige and pink stripes running in a crisscross pattern around the entire surface.",
    Featureinfo2:
      "Material : It is 100% bamboo made, eco-friendly, lightweight and easy to transport.",
    star: 5,
  }])

  // let myRef = React.createRef();
  const submitCartHandler=(val)=>{
//event.preventDefault();
   console.log(val._id+" "+val.title);
  }
  console.log(products._id)
const submitWishlistHandler=(event)=>{
    
  }
  let handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };



  const setStates = (resData) => {
    let newProducts = products.map(item=>{
      item._id = resData.id
      item.title = resData.name
      item.description = resData.description
      item.Features = resData.features.toString().split("\n").map(iteme=>{
        if(iteme.length != 0){
          return iteme.substring(2, iteme.length -2)
        }
      })
      item.price = 499
      return item
    })

    return newProducts
  }

  useEffect(()=>{
    // products[0].title = "helllo brother"
    axios
      .post("http://localhost:8000/db/getProduct/",{
        ID: "NOVADMIG0001"
      })
      .then((res) => {
        let data = res.data.data.data
        console.log(data)
        // setProducts(setStates(data))
        // this.state.products[0]._id
        
      })
      .catch((e) => console.log(e));
  })

  return (
    
      <div className="app">
        {products.map((item) => (
          <div className="details" key={item._id}>
            <div className="big-img">
              <img src={item.src[0]} alt="" />
            </div>

            <div className="box">
              <div className="row">
                <h1>{item.title}</h1>
                <h5>
                  {item.star}
                  <AiFillStar/> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;5 Reviews
                </h5>
                <hr size="2" width="100%" color="#9FC8A8"></hr>
                <span>Rs.{item.price}</span>
                <h6>Inclusive of all taxes</h6>
              </div>
              <div className="desc">
                <h2>{item.description}</h2>
              </div>
              <div className="del">
                <h2>Delivery options</h2>
                <input
                  type="number"
                  name="pincode"
                  maxLength="6"
                  value="pincode"
                ></input>
                <button className="check">Check</button>
                <p>
                  Please enter your PIN code to check if your area is servicable
                </p>
              </div>
              <div className="content">
                <div className="content1">
                  <p>{item.content1}</p>
                </div>
                <div className="content2">
                  {" "}
                  <p>{item.content2}</p>
                </div>
                <div className="content3">
                  <p>{item.content3}</p>
                </div>
              </div>
              <DetailsThumb
                images={item.src}
                tab={handleTab}
                // myRef={this.myRef}
              />

              <button className="cart" onClick={()=>{
                submitCartHandler(products[0])
              }}>
                <BsFillBagFill />
                Add to Bag
              </button>
              <button className="wish" onClick={submitWishlistHandler} >
                <AiOutlineHeart />
                Wishlist
              </button>

              <div className="offers">
                <h2>Offers</h2>
                <p>{item.offers}</p>
              </div>
              <div className="features">
                <h2>Features</h2>
                <div className="featureinfo">
                  <ul>
                    {products[0].Features.map((feature) => {
                      return <li>{feature}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <About> </About>
            <Deals />
            <Rating />
            <AlsoBought />
            <Slider />
          </div>
        ))}
      </div>
    
  );
}

export default ProductPage;

