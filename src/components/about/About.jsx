import React from 'react'
import './About.css'
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolder} from 'react-icons/vsc'




function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>experience</h5>
              <small>1.5 Years of Studying</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>0 Clients</small>
            </article>

            <article className="about__card">
              < VscFolder className="about__icon"/>
              <h5>Projects</h5>
              <small>8+ Completed Projects</small>
            </article>
          </div>
          <p> I have been a student at RTS since (Aug.2021). In my free time, i'm usually working with new projects. I am a hard worker and and I’m always happy to learn new things.</p>
          <a href="#contact" className="btn-contact btn-primary">Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About