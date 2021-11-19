import React, { Component } from 'react'
import './DeatilsThumb.css';
export class DetailsThumb extends Component {
    render() {
        const {images, tab, myRef} = this.props;
        return (
            <div className="thumb" ref={myRef}>
                {
                images.map((img, index) =>(
                    <img style={{width:'80px',height:'80px',marginTop:'50px',marginBottom:'30px'}} src={img} alt="" key={index} 
                    onClick={() => tab(index)}
                    />
                ))
                }
            </div>
        )
    }
}

export default DetailsThumb