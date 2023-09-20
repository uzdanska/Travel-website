import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {styles} from '../styles';
import {navLinks} from '../constants';
import {menu, close} from '../assets';

const Navbar = () => {

    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
        <div className="w-full flex justify-between items-cnter max w-7xl mx-auto">
            <div className="justify-start flex-row">
                <Link
                    to="/"
                    className='items-center gap-2'
                    onClick={() => {
                        setActive("");
                    }}
                >   
                    <p className="text-white font-bold text-[24px] leading-none">Travel</p>
                    <p className="text-white font-bold text-[32px] leading-none">Goo</p>
                </Link>
            </div>
            <ul className="list-non hidden sm:flex flex-row justify-center gap-10 space-x-4 mx-auto">
                {navLinks.map((link) => (
                    <li
                        key={link.id}
                        className={`${
                            active === link.title ? "text-white" :   "text-white"} hover:text-green-500 text-[20px] font-semibold font-sans cursor-pointer`}
                        onClick={() => setActive(link.title)}
                    >
                        <a href={'#${link.id}'}> {link.title}</a>
                    </li>
                ))}
            </ul>
            <div className="icon-navbar hidden sm:flex space-x-5">
                <img src="src/assets/clarity_favorite-line.svg" alt="" />
                <img src="src/assets/healthicons_ui-user-profile-outline.svg" alt="" />
            </div>
            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img 
                    src={toggle ? close : menu}
                    alt="menu"
                    className='w-[28px] h-[28px] object-contain cursor-pointer'
                    onClick={() => setToggle(!toggle)} 
                />
                <div className={`${!toggle ? 'hidden' : 'flex'} bg-green-500 p-6 absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
                    <ul className="list-non flex justify-end items-start flex-col gap-4">
                        {navLinks.map((link) => (
                            <li
                                key={link.id}
                                className={`${
                                    active === link.title ? "text-green-800" : "text-white"} font-poppins font-bold cursor-pointer text-[18px] hover:text-green-800`}
                                onClick={() => {
                                    setToggle(!toggle);
                                    setActive(link.title);
                                }}
                            >
                                <a href={`#${link.id}`}> {link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar