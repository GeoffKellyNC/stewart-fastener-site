import React from 'react'

//? Importing servicesData
import { servicesData } from '../data/homeData';

//? ServicesStyled is a styled component
import ServicesStyled from '../styles/ServicesStyled';

function Services() {

  const handelMouseEvent = (e) => {
  //  console.log(e.target);
    
  }


  return (
    
    <ServicesStyled className = 'services-container' onMouseEnter = {(e) => handelMouseEvent(e)}>
        <span>Services</span>
        <div>
        {
            servicesData.map(service => {
                return <p 
                          key = {service.id}
                          className = {service.className}
                          >{service.name}
                        </p>
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