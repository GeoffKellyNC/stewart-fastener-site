import React, { useEffect } from 'react'

//? Importing Screws .svg
import screws from '../svg/screws.svg'
//?Importing ContactForm component
import ContactForm from '../components/ContactForm';
//?Importing ContactUsStyled component --> This is a styled component
import ContactUsStyled from '../styles/ContactUsStyled';
//? Importing ContactInfo component
import ContactInfo from '../components/ContactInfo';




function ContactUs(props) {


  return (
    <ContactUsStyled>
        <h2>Contact Us</h2>
        <div>
            <ContactForm />
            <ContactInfo />
        </div>
        <img 
            src = {screws}
            alt = 'screws'
            className = 'screws'
        />
    </ContactUsStyled>
  )
}

export default ContactUs