import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const TuliPage = styled.section`
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

const TuliInfo=styled.p`
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
const TuliWrapper = styled.div`
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



const Tuli = () => {
    return (
        <>
        <TuliPage>

<HouseBox>
        <House>240 tuli ave.</House>
        <Bath>playa flamingo, costa rica</Bath>
        <Price>$10,567,000</Price>
        </HouseBox>

        <Carousel autoPlay>


            <Abox>
            <Photo  src="https://i.ibb.co/MczxXzZ/5b08aa64-d5de-48b3-9466-d309345992d4-1.jpg"  alt="house"/>
            </Abox>
            <Photo  src="https://i.ibb.co/546P9sw/cos2.jpg"  alt="house"/>
              
            <Photo  src="https://i.ibb.co/9G82WsM/cos3.jpg"  alt="house"/>

            <Photo  src="https://i.ibb.co/B3Gkf2L/cos4.jpg"  alt="house"/>

            <Photo  src="https://i.ibb.co/4s1pZdw/cos5.jpg" alt="house"/>

            <Photo  src="https://i.ibb.co/6yLwMKK/cos6.jpg"  alt="house"/>

            <Photo  src="https://i.ibb.co/pyZpTGT/cos7.jpg"  alt="house"/>

            <Photo  src="https://i.ibb.co/hXXypZs/cos9.jpg"  alt="house"/>

            <Photo  src="https://i.ibb.co/WDBGZst/cos1.jpg"   alt="house"/>

    

        </Carousel>
        
        <TuliWrapper>
        <InfoBox>
        <Details>
        
        <Square>
        <div>
        <Bed>5 </Bed>
        <Bed>4.5</Bed>
        <Bed>15,445</Bed>
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
        <TuliInfo>This beautiful beachfront property will make you feel like your'e on an oasis while you file your taxes! Pocket doors throughout the common areas, an infinity pool on the deck, and gorgeous custom marble counters wherever you turn. A large double garage, plenty of storage in the crawl space and a manicured yard make this the move in and worry free home you've been looking for! </TuliInfo>
        <Link to="/Homes"><Schedule>Back to listings</Schedule></Link>
        </MinfoBox>
        </TuliWrapper>
         </TuliPage>
         
         </>
    )
}

export default Tuli