import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/Product-management.png'
import IMG2 from '../../assets/twitter.png'
import IMG3 from '../../assets/cph-uni.png'
import IMG4 from '../../assets/youtube.png'
import IMG5 from '../../assets/moon.png'
import IMG6 from '../../assets/moon.png'


const data= [
  {
    id:1,
    image: IMG4,
    title:'Youtube HomePage',
    github: 'https://github.com/WidtherSS/Youtube-Project',
    demo:''
  },
  {
    id:2,
    image: IMG1,
    title:'Product Management',
    github: 'https://github.com/WidtherSS/Product-Management',
    demo:''
  },
  {
    id:3,
    image: IMG3,
    title:'universities',
    github: 'https://github.com/WidtherSS/Universities',
    demo:''
  },
  {
    id:4,
    image: IMG2,
    title:'twitter',
    github: 'https://github.com/WidtherSS/HiFiCorner',
    demo:''
  },
  {
    id:5,
    image: IMG5,
    title:'Moon Css',
    github: 'https://github.com/WidtherSS/HiFiCorner',
    demo:''
  },
  {
    id:6,
    image: IMG6,
    title:'Moon Css',
    github: 'https://github.com/WidtherSS/The-Moon-',
    demo:''
  },

]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id,image,title,github, demo})=>{
        return(
          <article key={id}  className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3> 
          <div className="portfolio__item-cta">
          <a href={github} className="btn">GitHub</a>
          <a href={demo} className="btn btn-primary" target="_blank" rel = "noreferrer"> Live Demo</a>
          </div>
        </article>
        )
  })
}
      </div>
    </section>
  )
}

export default Portfolio



