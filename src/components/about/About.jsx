import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg';
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
          <div className="about__me-img">
            <img src={ME} alt="About Image"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>experience</h5>
              <small>+2 Years of Studying and Projects</small>
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
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In fugiat possimus dolor alias incidunt at asperiores consectetur! Qui similique voluptatem quo provident, dignissimos, labore vitae, nam illum non eum laborum.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About