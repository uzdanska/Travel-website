import React from 'react'
import { motion } from "framer-motion";

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { worldMap } from '../assets';

const PopularDestination = () => {
  return (
    <>
    <div className='bg-white'>
    
    <motion.div variants={textVariant()} className='justify-center flex cursor-pointer'>
            <h2 className={`${styles.sectionHeadText}`}>Our Popular Distinations</h2>
    </motion.div>
    <div className="flex flex-row gap-10 w-full justify-between h-screen">
        <div className='bg-map w-1/2 transform scale-120'></div>
        <div></div>
    </div>
    </div>
    </>
    
  )
}

export default PopularDestination