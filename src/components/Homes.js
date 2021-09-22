import React from 'react';

import styled from 'styled-components';
import Card from './Card';
import { eachHome} from "../data/EachHome";


const HomeSection = styled.section`
background:#000;
width:100vw;
// height:100vh;
display:flex;
flex-direction:column;
align-items:center;
object-fit:cover;



`;

const HomeViewer = styled.div`
margin-top:5rem;
background:#000;

display: grid;
padding:2rem;
grid-template-columns: repeat(3, 1fr);
grid-gap: .5rem;

@media screen and (max-width : 1300px){
    margin-top:5rem;
    
    grid-template-columns: repeat(2, 1fr);
    p{
        font-size:1rem;
    }
}

@media screen and (max-width : 900px){
    grid-template-columns: repeat(1, 1fr);
}

`;


const Homes = () => {
    return (
        <>
     
        <HomeSection>

          
                <HomeViewer>
                {eachHome.map(eachHome => {
                return(
                    
                   <Card eachHome={eachHome}/>
            
                )
             
            })}
                     
                </HomeViewer>
        </HomeSection>
        </>
    )
}

export default Homes
