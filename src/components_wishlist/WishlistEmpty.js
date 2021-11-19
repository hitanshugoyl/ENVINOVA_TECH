import React from 'react'

const WishlistEmpty=()=>{
    return(
        <div>
            <h2 style={{marginTop:'50px',fontFamily: 'Oswald',fontStyle: 'normal',fontWeight: 'bold',fontSize: '36px',
lineHeight: '53px',textAlign: 'center',color:' #C4C4C4'}}>0 Products</h2>

<h3 style={{marginTop:'50px',fontFamily: 'Ibarra Real Nova',fontStyle: 'normal',fontWeight: 'bold',fontSize: '36px',
lineHeight: '45px',textAlign: 'center'}}>Explore our extensive product line and save your favourites.</h3>
       
       <button style={{marginLeft:'500px',textAlign:'center',fontFamily: 'Oswald',fontSize:'64px', marginTop:'50px',alignItems:'center',width: '306px',height: '125px',background: '#FFBF87',borderRadius: '20px'}}>+Discover</button>

        </div>
    )
}

export default WishlistEmpty;