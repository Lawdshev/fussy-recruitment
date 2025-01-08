import React from 'react';
import WhatWeOffer from '@/components/shared/what-we-offer';
import Index from '@/components/recruitment-process';
import WhyFussy from '@/components/why-fussy';


const Hero = () => {
    return (
        <div>
            <Index/>
                <WhatWeOffer/>
            <WhyFussy/>
            </div> 
        
    );
};

export default Hero;