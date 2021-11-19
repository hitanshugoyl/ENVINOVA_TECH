import React from 'react';
import './AboutUs.css';
import Explore from './Explore';
import Quote from './Quote';
import ReadMore from './ReadMore';
import Navbar from '../components/top/Navbar';
import CategoryBar from '../components/top/CategoryBar';

const AboutUs =()=>
{
    return (
        <React.Fragment><Navbar  />
        <CategoryBar />
        <div className='AboutUs'>
            <h1>About Us</h1>
        <p>{info.aboutus}</p>
        <h1>Why Us</h1>
        <p>{info.whyus}</p>
        <h1 id='com'>Our Community</h1>
        <p>{info.community}</p>
        <h1 id='women'>WOMEN</h1>
        <h2 id='hygiene'>#Menstrual Hygiene</h2>
        <p>{info.women}</p>
        <br></br>
        <p>{info.women2}</p>

         <Explore />
         <Quote />
        

         <ReadMore />
        </div>
        </React.Fragment>
    )
}

const info={
    aboutus : 'Envinova stands out in a world of synthetic, unsustainable, and quick fashion businesses. With our authentic and eco-friendly products, let’s rekindle the compulsive shopper inside you. We believe that every cent you spend is a vote for the kind of world you want to live in. So, ditch the chemicals, and switch to our products concocted with natural hues and organic essence. We guarantee that we do not sell disappointments; instead, our products will bring you delight. ',
    whyus:'The ethos of Envinova is to celebrate nature and to promote a sustainable lifestyle. We are committed to phasing out the use of plastic and knocking on your door with 100% plastic-free and earth-friendly packaging. We pack our products with a lot of love and care. The goods are subjected to rigorous quality checks at different levels to ensure that only the best reaches your doorsteps. In the unlike case, where you have any complaints regarding our goods, we provide a no-hassle return and exchange policy if the product is unused and intact with original tags.',
    community:'We conduct a community program in which we strive to persuade people to embrace the concept of sustainable living by convincing them that it is the bottom line. ',
    women:'We advocate for our female customers as only they have the ability to procreate and hence bless the world. Menstrual hygiene is still a significant issue, and we are deeply concerned for women across the world. We have collaborated with Anandi Pads for this, with the promise that by working together, we will be able to break down the taboo. Anandi pads are compostable and environmentally friendly. Apart from being a sustainable option, it also reduces health risks without sacrificing convenience.',
    women2:'We believe Together we can make Green Menstruation a reality!'
};
export default AboutUs;