import Carousel from 'react-grid-carousel';
import React from 'react';
import homecarouselimg1 from '../images/homeimgs/homecarouselimg1.png'
import homecarouselimg2 from '../images/homeimgs/homecarouselimg2.png'
import homecarouselimg3 from '../images/homeimgs/homecarouselimg3.png'
import homecarouselimg4 from '../images/homeimgs/homecarouselimg4.png'
import classes from './HomeCarouselimg.module.css';
import { useHistory } from 'react-router';

const Gallery = () => {
  const history=useHistory();
  const handleImgClick=()=>{
    history.push("/deals")
  }
    return (
        <div >
      <Carousel cols={1} rows={1} gap={1} loop autoplay={4000} showDots >
        <Carousel.Item style={{width:"1312px",height:"575px"}} >
          <div className={classes.container}>
          <img width="1312px" height="600px" src={homecarouselimg2} className={classes.image} onClick={handleImgClick}/>
          </div>
        </Carousel.Item>
        <Carousel.Item style={{width:"1312px",height:"575px"}}>
        <div className={classes.container}>
          <img width="1312px" height="600px" src={homecarouselimg3} className={classes.image} onClick={handleImgClick} />
          </div>
        </Carousel.Item>
        <Carousel.Item style={{width:"1312px",height:"575px"}}>
        <div className={classes.container}>
          <img width="1312px" height="600px" src={homecarouselimg4} className={classes.image} onClick={handleImgClick}/>
          </div>
        </Carousel.Item>
     
        
      </Carousel>
    
      </div>
    );
  }
  export default Gallery;