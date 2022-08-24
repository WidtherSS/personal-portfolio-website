import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBookAlt} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {MdOutlineMessage} from 'react-icons/md'
import { useState } from 'react';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() =>setActiveNav('#')} className={activeNav=== '#' ? 'active' : ''}><AiOutlineHome/><span className="span">home</span></a>
      <a href="#about" onClick={() =>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : '' }><AiOutlineUser/><span className="span">about</span></a>
      <a href="#experience" onClick={() =>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : '' }><BiBookAlt/><span className="span">experience</span></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineMessage/><span className="span">contact</span></a>
      


    </nav>
  )
}

export default Nav