import React from 'react';
import  './Footer.css'
import {GrFacebookOption} from 'react-icons/gr'
import {BsInstagram} from 'react-icons/bs'
import {GrTwitter} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <a href="#footer" className="footer__logo">Adam Chatila</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience Services</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#potfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><GrFacebookOption/></a>
        <a href="https://instagram.com"><BsInstagram/></a> 
        <a href="https://twitter.com"><GrTwitter/></a> 
      </div>
      <div className="footer__copyright">
        <small>&copy; Adam Chatila. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer