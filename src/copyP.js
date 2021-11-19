import React from "react";
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

class ProductPage extends React.Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Spherical bamboo basket",
        src: [
          bas1,
          bas2,
          bas3,
          bas4,
          //   <img src={image} height={100} width={100} />
          // "./bas1.jpg",
          // "./bas1.jpg",
          // "./bas1.jpg",
          // "./bas1.jpg"
          // "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn1.vectorstock.com%2Fi%2F1000x1000%2F76%2F35%2Fempty-wicker-basket-wicker-basket-made-of-straw-vector-7997635.jpg&imgrefurl=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fempty-wicker-basket-wicker-basket-made-of-straw-vector-7997635&tbnid=ZiDG9rIQvdauEM&vet=12ahUKEwjU_72xu4_zAhWngksFHetgBjsQMygTegUIARCRAg..i&docid=2JtTO6hYVyV13M&w=874&h=1080&q=basket&ved=2ahUKEwjU_72xu4_zAhWngksFHetgBjsQMygTegUIARCRAg",
          // "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
          // "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
          // "https://www.upsieutoc.com/images/2020/06/27/img4.jpg"
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
      },
    ],
    index: 0,
  };

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  setAllState = (newState) => {
    let data = newState.data.data
//     data:
// SIN: 1
// about: "Macrame’s origins can be traced back to the 13th century Arabic weavers. It is a type of textile created through the use of knotting techniques. The majority of basic macramé knots are square and half knots that can be combined to form borders or braids. Physically, it is woven with cotton twine, yarn, jute, or hemp. Our products have been sourced from Gujarat and inter-knitted together to create these beautiful affluent macrame items."
// category: "Decor"
// description: "Our macrame wall hanging shelf adds versatile storage and decorative options to any design style. This spectacular bohemian-style shelf will add a chic and elevated look to your home. Each of the macrame wall hangers by enviNova has been painstakingly crafted by local craftsmen in India using 100% organic cotton strands to weave each design."
// discountAvailable: "NA"
// features: "• Dimensions: Hanging- Overall Height = 27”,Ring diameter = 2.5”, Shelf(L*B*H): 12” * 7.5” * 0.75”\r\n• Colour: On high quality wooden board, green cotton cords are weaved together to give a flattering look.\r\n• Material: It is 100% cotton made, eco-friendly, lightweight and easy to transport.\r\n• This wall hanging is made up of handcrafted elegant patterns and fringes.\r\n• It can be used for indoor, outdoor, kitchen, patio or low ceiling areas.\r\n• Decorate your walls with this truly beautiful bohemian style macramé shelf wall hanging with a great accent that goes with any modern or traditional decor style.\r\n• It is crafted with biodegradable cotton thread, bringing you closer to nature while you master the game of home design. This wall hanger boasts both endurance and aesthetics.\r\nNOTE: As this wooden ring and shelf is handcrafted there might be a slight colour variation, which is natural and hence makes the product unique.\r\n"
// id: "NOVADMIG0001"
// itemDimensions: "Hanging- Overall Height = 27”,Ring diameter = 2.5”, Shelf(L*B*H): 12” * 7.5” * 0.75”\r\n"
// itemWeight: "715g"
// name: "Macrame Wall Hanging Shelf-Grey"
// netQuantity: "1"
// price: "NA"
// return: "7 Days Return"
// sno: "1"
// subCategory: "Wall Hangings"
// totalRatings: "0"
// totalStars: "0"
    console.log(data)
    this.state.products[0]._id = data.id
    this.state.products[0].title = data.name
    this.state.products[0].description = data.description
    this.state.products[0].price = data.price
    let fetArr = data.features.split("\n")
    console.log(fetArr)
    fetArr = fetArr.map(ar=>{
      return ar.substring(2, ar.length-2)})
    this.state.products[0].Features = fetArr
  }

  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
    axios
      .post("http://localhost:8000/db/getProduct/",{
        ID: "NOVADMIG0001"
      })
      .then((res) => {
        console.log(res)
        // this.state.products[0]._id
        this.setAllState(res.data)
      })
      .catch((e) => console.log(e));
  }

  // const BagHandler =(event)=>{

  //     console.info('You clicked a link.');
  //   }

  render() {
    const { products, index } = this.state;
    return (
      <div className="app">
        {products.map((item) => (
          <div className="details" key={item._id}>
            <div className="big-img">
              <img src={item.src[index]} alt="" />
            </div>

            <div className="box">
              <div className="row">
                <h1>{item.title}</h1>
                <h5>
                  {item.star}
                  <AiFillStar /> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;5 Reviews
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
                tab={this.handleTab}
                myRef={this.myRef}
              />

              <button className="cart">
                <BsFillBagFill />
                Add to Bag
              </button>
              <button className="wish">
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
                    {this.state.products[0].Features.map(feature=>{
                      return (
                        <li>{feature}</li>
                      )
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
}

export default ProductPage;
