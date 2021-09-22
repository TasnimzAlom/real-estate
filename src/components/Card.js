import React from 'react'
import styled from 'styled-components';
// import { eachHome } from '../data/EachHome';
import { Button } from './Button';
import { BiKey } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const CardContainer = styled.section`

`;


const Cards = styled.div`
transition:0.3s ease-in-out;
cursor:pointer;




`;
const CardImg = styled.img`
width:100%;
height:100%;

&:hover{
    opacity:40%;
    
  
   
}

`;


const TextBox =styled.div`
display:flex;
justify-content:space-between;
margin:0;
`;

const CardTitle = styled.p`
text-shadow:none;
// padding: 0 .3rem;
position:relative;
bottom:3rem;
margin:0;
font-weight:500;
font-size:1.5rem;
color:white;
text-shadow: -1px -1px 7px black, -1px -1px 2px black;
`;
const PropertyName = styled.p`
text-shadow:none;
padding:0 .3rem;
position:relative;
bottom:2.1rem;
margin:0;
font-weight:500;
font-size:1.5rem;
color:white;
text-shadow: -1px -1px 7px black, -1px -1px 2px black;
// display:none;

`;

const RedKey = styled(BiKey)`
color:red;
width:40px;
height:30px;
margin:0;
`;

const Card = ({eachHome}) => {

    
    return (
        <>
    
        <Link to={eachHome.path}>
        <CardContainer >

            <Cards>           
              <CardImg src={eachHome.main} alt="house"/>
          
              <TextBox>
                

              <PropertyName>
            
              {eachHome.name}
                
                   </PropertyName>

                <CardTitle>

            <Button to={eachHome.path} className="btn2" >{eachHome.label}<RedKey/></Button>  
              
                    
                </CardTitle>
                
                    </TextBox>
                 
            </Cards> 
            
        </CardContainer>
        </Link>
        </>

    )
}

export default Card
