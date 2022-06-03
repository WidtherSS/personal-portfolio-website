import React from 'react';
import './Experience.css';
import {BsFillPatchCheckFill} from 'react-icons/bs'

function experience() {
  return (
    <section id="experience">
      <h5>What Skills i Have</h5>
      <h2>My Experience</h2>

        <div className="container experience__container">
          <div className="experience__front-end">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__deteils">
                  <BsFillPatchCheckFill className="experience__deteils-icon"/>
                  <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                  </div>
              </article>
              <article className="experience__deteils">
                  <BsFillPatchCheckFill className="experience__deteils-icon"/>
                  <div>
                  <h4>CSS</h4>
                  <small className="text-light">Intermediated</small>
                  </div>
              </article>
              <article className="experience__deteils">
                  <BsFillPatchCheckFill className="experience__deteils-icon"/>
                  <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Experienced</small>
                  </div>
              </article>
              <article className="experience__deteils">
                  <BsFillPatchCheckFill className="experience__deteils-icon"/>
                  <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Experienced</small>
                  </div>
              </article>
              <article className="experience__deteils">
                  <BsFillPatchCheckFill className="experience__deteils-icon"/>
                  <div>
                  <h4>Tailwind</h4>
                  <small className="text-light">Experienced</small>
                  </div>
              </article> 
              <article className="experience__deteils">
                  <BsFillPatchCheckFill className="experience__deteils-icon"/>
                  <div>
                  <h4>React</h4>
                  <small className="text-light">Experienced</small>
                  </div>
              </article> 
                
            </div>
          </div>

          {/*END OF FRONTEND */}


          <div className="experience__UIdesigning">
          <h3>UI Design</h3>
            <div className="experience__content">
              <article className="experience__deteils">
                  <BsFillPatchCheckFill className="experience__deteils-icon"/>
                  <div>
                  <h4>Colors</h4>
                  <small className="text-light">Experienced</small>
                  </div>
              </article>
              <article className="experience__deteils">
                  <BsFillPatchCheckFill className="experience__deteils-icon"/>
                  <div>
                  <h4>Ghraphic Design</h4>
                  <small className="text-light">Intermediated</small>
                  </div>
              </article>
              <article className="experience__deteils">
                  <BsFillPatchCheckFill className="experience__deteils-icon"/>
                  <div>
                  <h4>Layouts</h4>
                  <small className="text-light">Experienced</small>
                  </div>
              </article>
              <article className="experience__deteils">
                  <BsFillPatchCheckFill className="experience__deteils-icon"/>
                  <div>
                  <h4>Typeography</h4>
                  <small className="text-light">Experienced</small>
                  </div>
              </article>
              <article className="experience__deteils">
                  <BsFillPatchCheckFill className="experience__deteils-icon"/>
                  <div>
                  <h4>Visuel Design</h4>
                  <small className="text-light">Experienced</small>
                  </div>
              </article>     
            </div>

          </div>
          
        
        </div> 
    </section>
  )
}

export default experience