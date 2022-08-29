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
          <p>I'm a Roskilde Teknisk Skole student for about 1 year, i do coding and projects for fun in my free time and learning new stuff, I'm a Hard worker And always looking forward to learn new things </p>
          <a href="#contact" className="btn-contact btn-primary">Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About