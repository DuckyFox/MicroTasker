import React from 'react';
import { SearchTasks } from '@/Features/SearchTasks';

const Hero = () => {
    return (
        <div
            className='
                bg-[url(/images/HeroBg.png)]
                h-[90vh]
                flex
                flex-col
                justify-center
                items-center
                gap-y-4
            '
        >
            <h1 className='font-bold text-6xl'>
                MicroTasks
            </h1>
            <h3 className='font-medium text-4xl'>
                For You
            </h3>
            <SearchTasks/>
        </div>
    );
};

export default Hero;