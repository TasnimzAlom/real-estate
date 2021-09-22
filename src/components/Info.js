import React from 'react'
import styled from "styled-components";
// import { InfoData } from '../data/InfoData';
import { Button } from './Button';
import { BiKey } from 'react-icons/bi';


// import { InfoData } from '../data/InfoData';


const Section = styled.section`
width:100%;
height:100%;
padding:4rem 0;
text-shadow:none;
color:white;
background:#000;

h1{
    text-shadow:none;
}

p{
    text-shadow:none;
}
`;


const Container = styled.div`
padding:3rem calc((100vw-1300px)/2);
display:grid;
grid-template-columns:1fr 1fr;
grid-template-rows:800px;


@media screen and (max-width:768px) {
grid-template-columns:1fr;
   
}
`;


const CoLeft = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    line-height:1.4;
    padding:1rem 2rem;
  
    h1{
        margin-bottom:1rem;
        font-size:clamp(1.5rem,6vw,2rem);

    }

    p{
        margin-bottom:2rem;
    }
    
`;


const CoRight = styled.div`
padding:1rem 2rem;
display:flex;
justify-content:center;
align-items:center;

@media screen and (max-width:768px) {

}

    img{
        width:100%;
        height:100%;
        object-fit:cover;

        @media screen and (max-width:768px) {
            width:90%;
            height:90%;
               
            }
    }
`;

const Key = styled(BiKey)`
 color:red;
 width:40px;
height:30px;
margin:0;
`;

const Info = ({heading, paraOne, paraTwo, image, heading2, paraOne2, paraTwo2, image2, label}) => {
   
    return (
        <>
        <Section>
            <Container>
                <CoLeft >
                <h1>{heading}</h1>
                <p>{paraOne}</p>
                <p>{paraTwo}</p>
                <Button className="btn" to="/Sherri">{label} <Key/></Button>

                </CoLeft>
                <CoRight >
                    <img src={image} alt="home"/>
                </CoRight>

            </Container>
        </Section>
        <Section>
            <Container>
            <CoRight >
                    <img src={image2} alt="home"/>
                </CoRight>
                <CoLeft >
                <h1>{heading2}</h1>
                <p>{paraOne2}</p>
                <p>{paraTwo2}</p>
                    <Button className="btn" to="/Tuli">{label}<Key/></Button>
                </CoLeft >
                

            </Container>
        </Section>
        </>
    )
}

export default Info
