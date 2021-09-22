import React from 'react';

import Hero from './Hero';

import Info from './Info';

import { InfoData, InfoDataTwo } from '../data/InfoData';
import { sliderData } from '../data/SliderData';


const Landing = () => {
    return (
        <>
       
        <Hero slides={sliderData}/>
        <Info {...InfoData} {...InfoDataTwo}/>
        </>
    )
}

export default Landing
