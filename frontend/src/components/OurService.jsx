import React, {useState, useEffect} from 'react';
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {styles} from '../styles';
import {fadeIn, textVariant} from '../utils/motion';

const ServiceCard = ({image, name, description}) => {
    return (
        <Tilt className="w-[400px]">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * 1, 0.75)}
                className='w-full border border-4 border-[#F9F9F9] p-[1px] rounded-[20px] shadow-card'
                >
                <div
                    options={{
                        max:45, 
                        scale: 1, 
                        speed: 450
                    }}
                    className='bg-white rounded-[20px] py-12 px-12 min-h-[280px] flex justify-evenly items-start flex-col'
                >
                    <img src={'http://localhost:8000/'+ image} alt={name} className="w-16 h-16 object-contain" />
                    <h3 className="text-black text-[24px] font-bold text-center pt-5">{name}</h3>
                    <p className="text-[16px]">{description}</p>
                </div>
            </motion.div>
        </Tilt>
    )
}

const OurService = () => {

    let [services, setServices] = useState([])

    useEffect(() => {
        getServices();
    }, [])

    let getServices = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/services/')
        let data = await response.json();
        setServices(data)
    }
  return (
    <section>
        <motion.div variants={textVariant()} className='justify-center flex cursor-pointer'>
            <h2 className={`${styles.sectionHeadText}`}>Our Service</h2>
        </motion.div>
        <div className="mt-20 mb-20 flex flex-wrap gap-12 justify-center">
            {services.map((service, index) => (
                <ServiceCard key={service.name} index={index} {...service} />
            ))}
        </div>
    </section>
  )
}

export default OurService