import Carousel from 'react-grid-carousel';
import React from 'react';

const Gallery = () => {
    return (
      <Carousel cols={4} rows={1} gap={20}  loop>
        <Carousel.Item>
          <img width="85%" src="https://picsum.photos/800/600?random=1" />
          <h2 >Product Title</h2>
          <h2>Price</h2>
        </Carousel.Item>
        <Carousel.Item>
          <img width="85%" src="https://picsum.photos/800/600?random=2" />
           <h2 >Product Title</h2>
          <h2>Price</h2>
        </Carousel.Item>
        <Carousel.Item>
          <img width="85%" src="https://picsum.photos/800/600?random=4" /> 
          <h2 >Product Title</h2>
          <h2>Price</h2>
        </Carousel.Item>
        <Carousel.Item>
          <img width="85%" src="https://picsum.photos/800/600?random=5" />
           <h2 >Product Title</h2>
          <h2>Price</h2>
        </Carousel.Item>
        <Carousel.Item>
          <img width="85%" src="https://picsum.photos/800/600?random=3" />
           <h2 >Product Title</h2>
          <h2>Price</h2>
        </Carousel.Item>
        <Carousel.Item>
          <img width="85%" src="https://picsum.photos/800/600?random=1" /> 
          <h2 >Product Title</h2>
          <h2>Price</h2>
        </Carousel.Item>
        <Carousel.Item>
          <img width="85%" src="https://picsum.photos/800/600?random=8" /> 
          <h2 >Product Title</h2>
          <h2>Price</h2>
        </Carousel.Item>
        <Carousel.Item>
          <img width="85%" src="https://picsum.photos/800/600?random=5" /> 
          <h2 >Product Title</h2>
          <h2>Price</h2>
        </Carousel.Item>
        <Carousel.Item>
          <img width="85%" src="https://picsum.photos/800/600?random=7" />
          <h2 >Product Title</h2>
          <h2>Price</h2>
        </Carousel.Item>
        <Carousel.Item>
          <img width="85%" src="https://picsum.photos/800/600?random=2" />
          <h2 >Product Title</h2>
          <h2>Price</h2>
        </Carousel.Item>
        <Carousel.Item>
          <img width="85%" src="https://picsum.photos/800/600?random=3" />
          <h2 >Product Title</h2>
          <h2>Price</h2>
        </Carousel.Item>
        <Carousel.Item>
          <img width="85%" src="https://picsum.photos/800/600?random=3" />
          <h2 >Product Title</h2>
          <h2>Price</h2>
        </Carousel.Item>
        <Carousel.Item>
          <img width="85%" src="https://picsum.photos/800/600?random=3" />
          <h2 >Product Title</h2>
          <h2>Price</h2>
        </Carousel.Item>
        <Carousel.Item>
          <img width="85%" src="https://picsum.photos/800/600?random=3" />
          <h2 >Product Title</h2>
          <h2>Price</h2>
        </Carousel.Item>
      </Carousel>
    );
  }
  export default Gallery;