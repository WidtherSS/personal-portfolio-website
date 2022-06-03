import React from 'react'
import CV from '../../assets/cv.pdf'

function CTA() {
  return (
    <div className="cta">
        <a href="{CV} dowmload" className='btn'>Download cv</a>
        <a href="#contact" className='btn btn-primary' >Let's Talk</a>
    </div>
  )
}

export default CTA