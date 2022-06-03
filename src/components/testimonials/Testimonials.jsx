import React from 'react'
import './Testimonials.css'

import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react'; 

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data = [
  {
    teacher: AVTR1,
    name: 'Amalie Christiansen',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod atque, nostrum dicta vitae velit eius cupiditate nulla nobis placeat debitis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugiat dolore fugit veritatis, molestias cumque!',

  },
  {
    teacher: AVTR2,
    name: 'Amalie Christiansen',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod atque, nostrum dicta vitae velit eius cupiditate nulla nobis placeat debitis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugiat dolore fugit veritatis, molestias cumque!',

  },
  {
    teacher: AVTR3,
    name: 'Amalie Christiansen',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod atque, nostrum dicta vitae velit eius cupiditate nulla nobis placeat debitis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugiat dolore fugit veritatis, molestias cumque!',

  },
  {
    teacher: AVTR4,
    name: 'Amalie Christiansen',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod atque, nostrum dicta vitae velit eius cupiditate nulla nobis placeat debitis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugiat dolore fugit veritatis, molestias cumque!',

  },
]




const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From my Teachers</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable: true }}
      
      >
      {
        data.map(({teacher,name,review}, index) =>{
        return (
          <SwiperSlide key={index} className="testimonial">
          <div className="teacher__avatar">
            <img src={teacher} alt="avatar one"/> 
          </div>
          <h5 className="teacher__name">{name}</h5>
          <small className="teacher__review">{review}</small>
        </SwiperSlide>
        )
      })
}
      </Swiper>
    </section>
  )
}

export default Testimonials
