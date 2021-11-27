import React from 'react';
import { DropdownButton } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import CategoryProducts from './categoryProducts';
import { useState } from 'react'
// import CustomSelect from './CustomSelect'
import ReactDom from 'react-dom';


import { BsChevronDown } from "react-icons/bs";

import NavBar from '../top/Navbar'
import CategoryBar from '../top/CategoryBar';
import Footer from '../footer/Footer';



const Decor = () => {



  return (
    <div>

       <NavBar />
      <CategoryBar />





      <h1 style={{
        fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: 'bold', fontSize: '96px', lineHeight: '117px', textAlign: 'center',
        color: '#000000'
      }}> Decor</h1>


      <div style={{ display: 'flex', flexDirection: 'row', columnGap: '400px' }}>
        <div className="dropdown">
          <Dropdown>
            <Dropdown.Toggle
              variant="secondary btn-sm"
              id="dropdown-basic" style={{
                marginLeft: '150px', fontSize: '36px', background: 'white', border: '2px solid #E5E5E5', fontFamily: 'Oswald', fontWeight: 'bold'
              }}>
              Category:All <BsChevronDown />
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: '240px', fontFamily: 'Oswald', border: '2px solid #E5E5E5', backgroundColor: 'white', display: 'flex', flexDirection: 'column', color: 'black', fontSize: '30px', rowGap: '10px' }}>
              <Dropdown.Item href="#" >Bags</Dropdown.Item>
              <Dropdown.Item href="#">Essentials</Dropdown.Item>
              <Dropdown.Item href="#">Decor</Dropdown.Item>
              <Dropdown.Item href="#">Kitchen</Dropdown.Item>
              <Dropdown.Item href="#">Stationary</Dropdown.Item>


            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div>
          <Dropdown>
            <Dropdown.Toggle
              variant="secondary btn-sm"
              id="dropdown-basic" style={{
                marginLeft: '50px', fontSize: '36px', background: 'white', border: '2px solid #E5E5E5', fontFamily: 'Oswald', fontWeight: 'bold'
              }}>
              Sort by: Popularity <BsChevronDown />
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: '335px', fontFamily: 'Oswald', border: '2px solid #E5E5E5', backgroundColor: 'white', display: 'flex', flexDirection: 'column', color: 'black', fontSize: '30px', rowGap: '10px' }}>
              <Dropdown.Item href="#" >Price low to high
              </Dropdown.Item>
              <Dropdown.Item href="#">Price high to low
              </Dropdown.Item>
              <Dropdown.Item href="#">A-Z</Dropdown.Item>


            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div>
        <CategoryProducts />
      </div>
      <Footer />

    </div>
  )
}

export default Decor;