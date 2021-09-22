import React, {useState, useEffect, useRef} from 'react'
import styled from "styled-components/macro";
import { Button } from './Button';
import { BiKey } from 'react-icons/bi';



const HeroSection =styled.section`
height:100vh;
max-height:1100px;
position:relative;
overflow:hidden;
border:none;
`;

const HeroWrapper = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;
position:relative;
border:none;

`;

const HeroSlide = styled.div`
z-index:1;
width:100%;
height:100%;

`;

const HeroSlider = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
border:none;

&::before {
    content: "";
    position:absolute;
    z-index:2;
    width:100%;
    height:100vh;
    bottom:0vh;
    left:0;
    overflow:hidden;
    opacity:0.4;
    background: linear-gradient(
        0deg,
        rgba(0,0,0,0.2) 0%,
        rgba(0,0,0,0.2) 50%,
        rgba(0,0,0,0.6) 100%);
}

`;

const HeroImage = styled.img`
position:absolute;
top:0;
left:0;
width:100vw;
height:100vh;
object-fit:cover;

`;

const HeroContent = styled.div`
position:relative;
z-index:25;
display:flex;
flex-direction:column;
max-width:1600px;
width:calc(100% - 100px);
color:#fff;
text-align:left;

h1{
    font-size:clamp(1rem, 8vw, 2rem);
    font-weight:900;
    text-transform:uppercase;
    text-align:left;
}

p{
    
    margin-bottom:.8rem;
    @media screen and (max-width: 768px) {
        margin:0;
    }
}
`;

const Arrow = styled(BiKey)`
color:red;
width:40px;
height:30px;
margin:0;
`;


const Hero = ({slides}) => {
const [current, setCurrent]=useState(1);
const length = slides.length;
const timeout = useRef(null);

useEffect(()=>{
const nextSlide =()=>{
    setCurrent(current => (current === length -1 ? 0 : current +1))
}
timeout.current = setTimeout(nextSlide, 5000)

return function() {
    if (timeout.current) {
        clearTimeout(timeout.current);
    };
};

},[current, length]);

  
// if(!Array.isArray(slides) || slides.length <= 0){
//     return null
// }

    return (
        <HeroSection>
            <HeroWrapper>
            {slides.map((slide, index)=>{
                return (
                    <HeroSlide key={index}>
                        {index === current && (
 <HeroSlider>
 <HeroImage src={slide.image} alt={slide.alt}/>
 <HeroContent>
 <h1>{slide.title}</h1>
 <p>{slide.price}</p>
 
 
     <Button 
     to="/homes"
    
     css={`
     background:#000;
     max-width:170px;
     display:flex;
     align-items:center;
     
     @media screen and (max-width: 768px) {
         margin:0;
     }
     `}
     >
     {slide.label}
     <Arrow/>
     </Button>
   
     </HeroContent>
</HeroSlider>
                        )}
                       
                    </HeroSlide>
                )
            })}
           
                
         
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
