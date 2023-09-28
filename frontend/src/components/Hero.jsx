import React from 'react'
import {styles} from '../styles';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  return (
    <section className="relative w-full h-screen mx-auto cursor-pointer">
        <div className={`${styles.paddingX} absolute inset-0 max-w-7xl mx-auto flex flex-col justify-center items-center gap-5 text-center`}>
            <p className='text-white text-[36px] sm:text-[78px] font-sans font-extrabold'>Your Imagination Is<br />Your Only Limit</p>
            <p className='text-white font-regular text-[15px] sm:text-[18px] mt-8 sm:mt-3'>We always try to make our customer Happy.
            {isSmallScreen ? <br /> : null} We provide all kind of facilities. <br/> Your Satisfaction is our main priority</p>
            <button className='relative w-[214px] h-[60px] bg-green-500 rounded-xl text-[24px] mt-8 sm:mt-3 font-semibold text-white'>
                Discover more
            </button>
        </div>
    </section>
  )
}

export default Hero