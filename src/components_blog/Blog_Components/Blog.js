import React from 'react';
import './Blog.css';
import RecentPosts from './RecentPosts';

const Content = {
    blog1: 'Do you endorse organic, chemical-free, and natural goods? Are you looking for products to make your home an eco-friendly yet appealing abode? Then Envinova is the right swipe for you. Fetch the best products that are a perfect match for your preferences and pocket. '
    ,
    blog2: 'As you Sow, Shall you Reap',
    blog3:' We cannot brush aside the truth that the environmental crisis is the result of our avarice. The hues green and blue are no longer associated with the earth. However, it’s never too late to make a change. Whenever the worst befalls, uniting as one conscious has changed the sail’s breeze always. Together we can make a difference and heal the unhealed.'
   , blog4:'Reduce the environmental impact of your shopping cart with us. Our products are constituted with everything sustainable, and it is the necessity of the hour. The items are composed of coconut, bamboo, wheat hem, organic and recycled cotton, jute, and kraft paper waste to reduce waste and consumption; these raw materials are robust and have a longer life cycle. '
   , blog5: 'Learn more about how your choices will cast a pronounced impact on the environment by reading our blog posts.'
}
const Blog = () => {
    return (

        <div className='Blog'>
            <div className='c1'>{Content.blog1}</div>
            <h1>Recent Posts</h1>
            <RecentPosts />
            <div className='c2'>{Content.blog2}</div>
            <div className='c3'>{Content.blog3}</div>
            <div className='c4'>{Content.blog4}</div>
            <div className='c5'>{Content.blog5}</div>

        </div>
    );
}

export default Blog;