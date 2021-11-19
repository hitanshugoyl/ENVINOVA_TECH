import React from 'react';


const Empty=()=>{
    return(
        <div><p style={{fontFamily: 'Ibarra Real Nova',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '36px',
            lineHeight: '45px',            
            textAlign: 'center',
            marginTop:'200px',
            
            color: '#000000'}}>Sorry,your bag is empty</p>
            <div style={{width: '1365px',
height: '201px',
marginLeft: '1px',
marginRight:'1px',
width:'100%',
marginTop: '-150px',

background: '#EFEFEF'}}></div>

<button style={{fontFamily: 'Oswald',
fontStyle: 'normal',
fontWeight: 'normal',
fontSize: '36px',
lineHeight: '53px',
textAlign: 'center',
alignItems:'center',

color: '#000000' ,
background: '#F5A9A9',
borderRadius: '20px' ,marginLeft:'45%' ,marginTop:'30px'}}>+Shop Now</button>

  
            
            </div>
    )
}

export default Empty;