import React from 'react'
import styled from 'styled-components';


const AboutWrapper = styled.section`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding:5rem 0;

@media screen and (max-width: 400px) {
    padding:4.5rem .5rem;
    
}
`;
const AboutTitle = styled.header`
font-size:3rem;
@media screen and (max-width: 400px) {
    font-size:2rem;
    
}
`;

const AboutMember = styled.div`
display:flex;
align-items:center;
margin:2rem;
flex-wrap: wrap;

@media screen and (max-width: 1000px) {
    margin:0;
    flex-direction: column-reverse;
}


`;
const AboutMember2 = styled.div`
display:flex;
align-items:center;
margin:2rem;
flex-direction: row-reverse;
@media screen and (max-width: 1000px) {
    margin:0;
    flex-direction: column-reverse;
}

`;

const AboutText = styled.div`
width:40%;
height:30%;
font-size:1.3rem;
background:rgba(66, 66, 66, 0.3);
padding:3rem;
margin:0;
color:#CDCDCD;
line-height:1.6rem;


@media screen and (max-width: 1000px) {   
    font-size:1rem;
    margin:0;
    width:80%;
    
  
 }
@media screen and (max-width: 768px) {   
    font-size:1rem;
    margin:0;
    width:100%;
    
  
 }

@media screen and (max-width: 400px) {   
    font-size:1rem;
    margin:0;
    padding:3rem 3.1rem;

    width:100%;
  
 }
`;
const AboutPerson = styled.div`

`;
const AboutImg = styled.div`
text-align:center;

h3{
color:#CDCDCD;

}

@media screen and (max-width: 1000px) {
   font-size:.8rem;
   margin:.5rem;
}

`;



const BossBaby = styled.img`
width:480px;
height:615px;

@media screen and (max-width: 768px) {   
    width:300px;
 height:400px;
  
 }

@media screen and (max-width: 1000px) {

 width:400px;
 height:500px;
}



`;
const Tuli = styled.img`
width:480px;
height:615px;
@media screen and (max-width: 768px) {   
    width:300px;
 height:400px;
  
 }

@media screen and (max-width: 1000px) {

 width:400px;
 height:500px;
}

`;
const Appi = styled.img`
width:480px;
height:615px;
@media screen and (max-width: 768px) {   
    width:300px;
 height:400px;
  
 }

@media screen and (max-width: 1000px) {

 width:400px;
 height:500px;
}

`;


const About = () => {
    
     
    return (
        <AboutWrapper className="about">
            <AboutTitle>
                About us
            </AboutTitle>

<AboutMember>
            <AboutText >
                <AboutPerson >
                    The President and top broker of alom real estate, Mahir Alom-Callaway is the star of the firm. He has been named "most sales before potty trained" by the new york times. His sales record will have you crying for your mommy!
                </AboutPerson>
            </AboutText>
            <AboutImg >
            <BossBaby
            src="https://i.ibb.co/hgbnc2j/242400804-578875073472578-8505318888658746889-n.jpg"
            alt="potato" 
            />
            <h2>Mahir Alom-Callaway</h2>
            <h3>ceo | broker | potato</h3>
            </AboutImg>
</AboutMember>
<AboutMember2> 

            <AboutText >
                <AboutPerson>
                The President's right hand, Tasnim Alom is in charge of the international listings. She has an eye for details and is looking to make the shift into the tech world. The new york times has also named her "best aunt in the whole wide world".
                </AboutPerson>
            </AboutText>
           <AboutImg >
    <Tuli src="https://i.ibb.co/ZWk0SLB/242529487-184301317146816-8417639111337819414-n.jpg"
            alt="me"    
            />
            <h2>Tasnim Alom</h2>
            <h3>Broker | front-end developer</h3> 
            </AboutImg>   
</AboutMember2>
           
           <AboutMember>         
            <AboutText >
                <AboutPerson>
                Sherri alom-callaway is the overseer of the president's day, and handles all of his needs legally and otherwise. She is the brains of the operation and has represented some of the world's most iconic homes! She has been named "Richest booger in new york city" by Forbes three years running. 
                </AboutPerson>
            </AboutText>
            <AboutImg >
            <Appi src="https://i.ibb.co/gmNx3wT/242765106-249067560325140-5196553976208896183-n.jpg" 
            alt="Sherri"    
            />
            <h2>Sherri alom-callaway</h2>
            <h3>property manager | broker</h3>
            </AboutImg>
</AboutMember>

            
        </AboutWrapper>
    )
}

export default About
