import React from 'react';
 import './About.css';

const About = () =>{
    const About = [
        {
            Productname:'Bamboo',
            Product:'All of our products are handcrafted using natural, eco-friendly raw materials. Bamboo is one such material that has been used by the human civilization for more than 20 thousand years. Unlike plastic material, which contribute to 7.27% of pollution to our mother earth, bamboo allows us to reconnect with nature while also making our environment more sustainable. Our products are gardened by the local artisans of Tripura and are made of 100% natural dried bamboo with a handmade finish. Bamboo Baskets are woven together using a variety of techniques such as coiling, plaiting, twining, and wicker. The pattern on the basket is aesthetically put together with a smile by our rural artisans with great care.',
            AboutProduct:'Indirectly, the things you use in your daily life can have a huge impact on the decisions you make in front of others. When you bring your fruits or other things to the temple, as well as your own personal basket, it should be a thing of beauty. A spherical bamboo basket created by hand is ideal for such purposes.'
        
        },
       
        

    ];
    return (
    <div className='About'>
        
        <h2 id='bamboo'>About {About[0].Productname}</h2>
        <div>
            <p id='bamboo-p'>{About[0].Product} </p>
        </div>
        <h2 id='product'>About Product</h2>
        <div>
            <p id='product-p'> {About[0].AboutProduct}</p>
        </div>
    </div>
        )
}



export default About;