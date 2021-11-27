import React from 'react'
import { BsFillBagFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';

const AddtoBag=(props)=>{
  return (
      <div style={{display:'flex'}}>
         
         <button onClick={props.onClick} style={{fontFamily: 'Ibarra Real Nova',fontSize: '24px',width:'160px',lineHeight: '30px',marginLeft:'45px',height: '47px',background: '#F5A9A9',borderRadius: '5px 0px 0px 5px'}}><BsFillBagFill /> Add to bag</button>
      <button onClick={props.onClick} style={{width: '50px',height: '47px',background: '#E5E5E5',borderRadius: '0px 5px 5px 0px'}}><AiOutlineHeart /></button>
      </div>
  )
}

export default AddtoBag;