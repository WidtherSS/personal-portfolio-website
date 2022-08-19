import React from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wl5sl6s', 'template_srim30x', form.current,'8Zk0ZDdoJ3vFgnpWi' )
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>adamchatila2020@gmail.com</h5>
            <a href="mailto:adamchatila2020@gmail.com" target="_blank" rel = "noreferrer" >Send a message</a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option-icon"/>
            <h4>Messanger</h4>
            <h5>Adam Chatila</h5>
            <a href="https://m.me/adam.chatila.54" target="_blank" rel = "noreferrer" >Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+4528732176</h5>
            <a href="https://api.whatsapp.com/send?phone=+4528732176" target="_blank" rel = "noreferrer" >Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTEIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required/>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact