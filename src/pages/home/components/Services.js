import React from 'react'

//? Importing servicesData
import { servicesData } from '../data/homeData';

//? ServicesStyled is a styled component
import ServicesStyled from '../styles/ServicesStyled';

function Services() {


  return (
    <ServicesStyled className = 'services-container'>
        <span>Services</span>
        <div>
        {
            servicesData.map(service => {
                return <p key = {service.id}>{service.name}</p>
            })
        }
        </div>
        <div className = 'learn-btn'>
            <button>Learn More</button>
         </div>
    </ServicesStyled>
  )
}

export default Services;