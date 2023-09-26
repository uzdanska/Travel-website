import React, {useState, useEffect} from 'react'
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import {styles} from '../styles';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceDetailsCard = ({image, name, number, index}) => {
    const adding = index % 2 === 0 ? "+" : "k+";
    return (
        <Tilt className="w-[210px]">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * 1, 0.75)}
                className='w-full p-[1px] rounded-[20px] shadow-card'
                >
                <div
                    options={{
                        max:45, 
                        scale: 1, 
                        speed: 450
                    }}
                    className='bg-white rounded-[20px] py-12 px-12 h-[230px] flex justify-evenly items-center flex-col'
                >
                    <img src={'http://localhost:8000/'+ image} alt={name} className="w-13 h-13 object-contain" />
                    
                    <p className="text-[36px] font-bold p-3">{number}{adding}</p>
                    <h3 className="text-black text-[20px] text-center">{name}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

const ServiceDetails = () => {
  
    let [servicesDetails, setServicesDetails] = useState([])

    useEffect(() => {
        getServicesDetails();
    }, [])

    let getServicesDetails = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/service_details/')
        let data = await response.json();
        setServicesDetails(data)
    }
  return (
    <>
        <div className="">
            <div className="bg-map">
                <motion.div variants={textVariant()} className='justify-center flex cursor-pointer'>
                <h2 className={`${styles.sectionHeadText}`}>We always try to give you<br/>
                the best service</h2>
            </motion.div>
            <div className="mt-20 mb-20 flex flex-wrap gap-12 justify-center">
                {servicesDetails.map((servicesDetail, index) => (
                    <ServiceDetailsCard key={servicesDetail.name} index={index} {...servicesDetail} />
                ))}
            </div>
        </div>
     </div>
    </>
  )
}

export default SectionWrapper(ServiceDetails, "about")