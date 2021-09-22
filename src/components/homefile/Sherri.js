import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const SherriPage = styled.section`
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

const SherriInfo=styled.p`
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
const SherriWrapper = styled.div`
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


const Sherri = () => {
    return (
        <>
        <SherriPage>

<HouseBox>
        <House>670 Sherri hill</House>
        <Bath>reunion, florida</Bath>
        <Price>$5,509,000</Price>

        </HouseBox>

        <Carousel autoPlay>




            <Abox>
            <Photo  src="https://i.ibb.co/TPBcJzB/c6a379ca-44b3-4b54-9247-7d5d38a7e76f.jpg" alt="house"/>
            </Abox>

            <Photo  src="https://i.ibb.co/ByJkNHd/re4.jpg" alt="house"/>

            <Photo  src="https://i.ibb.co/xmMm8FJ/re6.jpg"   alt="house"/>
              
            <Photo  src="https://i.ibb.co/ydQXCMM/re7.jpg"   alt="house"/>

            <Photo  src="https://i.ibb.co/jkGwYZ6/re8.jpg"  alt="house"/>

            <Photo  src="https://i.ibb.co/kJCXKxQ/re9.jpg"  alt="house"/>

            <Photo  src="https://i.ibb.co/4RLgN1Y/reu.jpg" alt="house"/>

            <Photo  src="https://i.ibb.co/KWsdLXg/re1.jpg" alt="house"/>

            <Photo  src="https://i.ibb.co/1bVB95G/re2.jpg" alt="house"/>

            <Photo  src="https://i.ibb.co/qy0C8B1/re3.jpg" alt="house"/>



            <Photo  src="https://i.ibb.co/GPgZ1MD/re5.jpg" alt="house"/>

    

        </Carousel>
        
        <SherriWrapper>
        <InfoBox>
        <div></div>
        <Details>
        <Square>
        <div>
        <Bed>5 </Bed>
        <Bed>5.5</Bed>
        <Bed>16,000</Bed>
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
        <SherriInfo>THIS IS A UNIQUE PROPERTY.This 5 very affordable bedroom house offers outstanding views of the city, ocean and mountains. Laminate Flooring is in ALL the Bedrooms - ABSOLUTELY the most beautiful FLOORS. The gentle slopped driveway leads up to your hilltop building site offering secure views without much site preparation. Great layout for any young family just starting out at a reasonable price. A new marble finished fireplace creates warmth and focus to a space that is ideal for entertaining.</SherriInfo>
        <Link to="/Homes"><Schedule>Back to listings</Schedule></Link>


        </MinfoBox>
      
        </SherriWrapper>
         </SherriPage>
         
         </>
    )
}

export default Sherri