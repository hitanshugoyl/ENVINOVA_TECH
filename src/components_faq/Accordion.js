import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { MdAdd } from "react-icons/md";
import Heading from './Heading';
import Footer from '../components/footer/Footer';
import CenteredTabs from '../components/centertabs';
import homeending from '../images/homeimgs/homeending.jpg';
const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
 
  position: relative;
  
  background: white;
  padding: 20px;
`;

const Container = styled.div`
  
  box-shadow: white;
`;

const Wrap = styled.div`
  background: white;
  color: black;
  display: flex;
  align-items: left;
  justify-content:space-between;
  text-align: left;
  cursor: pointer;
  font-family:Montserrat;

  h1 {
    padding: 2rem;
    font-size: 24px;
  }

  span {
    margin-right: 1.5rem;
    color:black;
    
    
  }
`;

const Dropdown = styled.div`
  background: white;
  color: black;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  font-family: Ibarra Real Nova;
font-size:18px,
  p {
    font-size: 18px;
    
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <React.Fragment>
    <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
      <Heading />
      <AccordionSection>
        <Container>
          {Data.map((item, id) => {
            return (
              <>
                <Wrap onClick={() => toggle(id)} key={id}>
                

                  <h1>{item.Quesno} . {item.question}</h1>
                  <span>{clicked === id ? <FiMinus/> : <MdAdd />}</span>
                </Wrap>
                {clicked === id? (
                  <Dropdown>
                    <p style={{textAlign:'center'}}>{item.Answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
    <div style={{paddingTop:"50px"}}>
    <CenteredTabs />
</div>
<img src={homeending} style={{height:"auto", width:"100%",paddingTop:"10px"}} />
<h2 style={{
fontFamily: "Montserrat",
width:"100%",
fontWeight: "bold",
fontSize: "30px",
lineHeight: "37px",
textAlign: "center"
}}>For corporate enquiries/bulk order, please write to us at <span style={{color:"pink"}}>care@envinovastore.com</span> </h2>
    <div style={{marginTop:"10px"}}>
    <Footer/>
    </div>
    </React.Fragment>
  );
};

export default Accordion;
