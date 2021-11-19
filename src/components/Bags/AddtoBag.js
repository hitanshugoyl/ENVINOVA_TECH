import React from 'react'
import { BsFillBagFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';

const AddtoBag=()=>{
  return (
      <div style={{display:'flex'}}>
         
         <button style={{marginTop:'10px',fontFamily: 'Ibarra Real Nova',fontSize: '24px',width:'160px',lineHeight: '30px',marginLeft:'45px',height: '47px',background: '#F5A9A9',borderRadius: '5px 0px 0px 5px'}}><BsFillBagFill /> Add to bag</button>
      <button style={{marginBottom:'50px',marginTop:'10px',width: '50px',height: '47px',background: '#E5E5E5',borderRadius: '0px 5px 5px 0px'}}><AiOutlineHeart /></button>
      </div>
  )
}

export default AddtoBag;