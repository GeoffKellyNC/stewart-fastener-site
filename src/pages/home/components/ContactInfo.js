import React from 'react'

import { contactData } from '../data/homeData';
import styled from 'styled-components';

const ContactInfoStyled = styled.div`
    h3{
        color: white;
    }
`

function ContactInfo() {

  return (
    <ContactInfoStyled>
        <p> Better yet, come see us in person!</p>
        <p className = 'business-name'>{contactData.businessName}</p>
        <div>
            <p className = 'street'>{contactData.address.street}</p>
            <span className = 'city-state'>{contactData.address.city}, {contactData.address.state} {contactData.address.zip}</span>
        </div>
        <div className = 'hours'>
            <h5>Hours</h5>
            <p>{contactData.businessHours.monday.name} : {contactData.businessHours.monday.time}</p>
            <p>{contactData.businessHours.tuesday.name} : {contactData.businessHours.tuesday.time}</p>
            <p>{contactData.businessHours.wednesday.name} : {contactData.businessHours.wednesday.time}</p>
            <p>{contactData.businessHours.thursday.name} : {contactData.businessHours.thursday.time}</p>
            <p>{contactData.businessHours.friday.name} : {contactData.businessHours.friday.time}</p>
            <p>{contactData.businessHours.saturday.name} : {contactData.businessHours.saturday.time}</p>
            <p>{contactData.businessHours.sunday.name} : {contactData.businessHours.sunday.time}</p>
        </div>
        <div className = 'contact-info'>
            <p>Call Us: {contactData.phone} or {contactData.localPhone}</p>
            <p>Email Us: {contactData.email}</p>
            <p>Fax: {contactData.fax}</p>
        </div>
    </ContactInfoStyled>
  )
}

export default ContactInfo