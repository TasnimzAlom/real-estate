import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const DavidPage = styled.section`
display:flex;
align-items:center;
flex-direction:column;
padding:5rem 0;
max-width:70vw;

@media screen and (max-width: 1500px) {
    max-width:80vw;
    
}

@media screen and (max-width: 1200px) {
    max-width:90vw;
    
}

@media screen and (max-width: 900px) {
    max-width:95vw;
    
}

@media screen and (max-width: 768px) {
    max-width:98vw;
    
}
`;

const Abox=styled.div`
width:90%;
height:90%;
@media screen and (max-width: 1300px) {
    width:90%;
    
}
`;
const Photo = styled.img`
width:80%;
height:80%;
`;

const DavidInfo=styled.p`
width:100%;
font-size:1.4rem;
color:grey;

@media screen and (max-width: 1300px) {
    font-size:1.2rem;
     
 }

 @media screen and (max-width: 768px) {
    padding:1rem;
    
       
        
    }
`;

const Price=styled.h2`
width:100%;
font-size:2rem;
margin-bottom:1rem;
font-weight:400;

@media screen and (max-width: 1300px) {
    font-size:1.2rem;
     
 }
`;

const Bed=styled.h3`
width:100%;
font-size:1.4rem;
transition: 0.4s ease-in-out;
&:hover{
    color:red;
}

@media screen and (max-width: 1300px) {
    font-size:1.2rem;
     
 }
`;

const Bath=styled.h3`
width:100%;
font-size:1.2rem;
font-weight:400;
color:grey;
line-height:1.7rem;
transition: 0.4s ease-in-out;
&:hover{
    color:red;
}

@media screen and (max-width: 1300px) {
    font-size:1rem;
     
 }
`;
const House =styled.h1`
font-size:2rem;
font-weight:400;

@media screen and (max-width: 1300px) {
   font-size:1.5rem;
    
}

`;
const HouseBox =styled.div`
background:rgba(66, 66, 66, 0.5);
padding:1rem;
width:100%;

`;
const Square = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
grid-gap:2em;
grid-column:2;



@media screen and (max-width: 768px) {
    
    display:flex;
    justify-content:center;
   align-items:center;
   border-right:1px grey solid;
   padding:0 2rem;  
    }
`;

const Schedule = styled.h3`
font-weight:400;
font-size:1.2rem;
padding:2rem 0 .2rem 0;
margin-bottom:0;
display:flex;
color:grey;
text-align:center;
cursor:pointer;
&:hover{
    transition: 0.9s ease-in-out;
    border-bottom:1px white solid;
    color:whitesmoke;

}

@media screen and (max-width: 768px) {
   align-items:center;  
   padding:0 2rem;

   &:hover{
       color:red;
       border:none;
   }
    }
`;

const Details = styled.div`
@media screen and (max-width: 768px) {
    display:flex;
   
    background:rgba(66, 66, 66, 0.3);

    padding:1rem;
    width:100vw;
       
    h3{
        color:white;
    }
        
    }
`;
const InfoBox = styled.div``;
const DavidWrapper = styled.div`
display:grid;

grid-template-columns: 1fr 1fr 2fr;

@media screen and (max-width: 768px) {
grid-template-columns: 1fr;

   
    
}


`;

const MinfoBox = styled.div`
display:flex;
justfify-content:center;
flex-direction:column;
`;


const David = () => {
    return (
        <>
        <DavidPage>
    <HouseBox>
        <House>800 David rd.</House>
        <Bath>Bali, Indonesia</Bath>
        <Price>$4,899,870</Price>

        </HouseBox>

        <Carousel autoPlay>
            <Abox>
            <Photo src="https://i.ibb.co/jDthfJZ/f31c3c8e-7b86-41be-8766-d9e499136bf1.jpg"alt="house"/>
            
            </Abox>
            <Photo src="https://i.ibb.co/KDMtxMV/bal8.jpg" alt="house"/>

            <Photo src="https://i.ibb.co/hRVLtdn/bal9.jpg"  alt="house"/>

            <Photo src="https://i.ibb.co/qsZ4NRt/bal10.jpg"alt="house"/>

            <Photo src="https://i.ibb.co/Z1Z6jBd/bal1.jpg" alt="house"/>

            <Photo src="https://i.ibb.co/3v58FXK/bal2.jpg" alt="house"/>

            <Photo src="https://i.ibb.co/G7t742s/bal3.jpg" alt="house"/>

            <Photo src="https://i.ibb.co/pJ17DLZ/bal4.jpg" alt="house"/>

            <Photo src="https://i.ibb.co/5kBXcgk/bal5.jpg"  alt="house"/>

            <Photo src="https://i.ibb.co/C6R8fbX/bal6.jpg"  alt="house"/>

            <Photo src="https://i.ibb.co/vwQ4nZL/bal7.jpg"  alt="house"/>
            
          
    

        </Carousel>
        
        <DavidWrapper>
        <InfoBox>
        <div></div>
        <Details>
        <Square>
        <div>
        <Bed>5 </Bed>
        <Bed>5</Bed>
        <Bed>12,500</Bed>
        </div>
        <div>
        <Bath>Beds </Bath>
        <Bath>Baths</Bath>
        <Bath>Sq. Ft</Bath> 
        </div>
        </Square>
        <Schedule>Schedule a showing </Schedule>

        </Details>  
        </InfoBox>
        <div></div>
        <MinfoBox>
        <DavidInfo>Modern open concept living w/4 peaceful bedrooms, 5 bathrooms (Master w/ensuite), Spacious Living Room, Dining room w/Bay window, & an Open Kitchen w/Stainless Steel appliances. Blending an original DiCastri design with a modern West Coast finish has created a historic family home.</DavidInfo>

        <Link to="/Homes"><Schedule>Back to listings</Schedule></Link>


        </MinfoBox>
      
        </DavidWrapper>
         </DavidPage>
         
         </>
    )
}

export default David