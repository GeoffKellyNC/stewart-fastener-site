import React from 'react'

import { contactData } from '../data/homeData';
import styled from 'styled-components';

const ContactInfoStyled = styled.div`
    color: ${props => props.theme.colors.white};
    font-weight: bold;
    h3{
        color: white;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
}

    //? Better yet, come see us in person --> p tag
    .contact-tag{
        font-weight: 700;
        text-align: center;
        margin: 5% 0 0 0;
        padding: 0;
        color: ${props => props.theme.colors.white};
        font-size: 2em;
        border-bottom: 0.1em solid ${props => props.theme.colors.white};

    }

    //? Business Address --> div
    .business-address{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        height: 100%;
        align-items: center;
    }

    .street{
        margin: 0;
    }

    .hours h5{
        margin: 5% 0 2% 0;
        padding: 0;
        color: ${props => props.theme.colors.white};
        font-size: 2em;
        ${'' /* border-bottom: 0.1em solid ${props => props.theme.colors.white}; */}
        width: 25%;
        padding-left: 2em;
    }
    
    .hours p{
        margin: 0;
        padding: 0;
        color: ${props => props.theme.colors.white};
        font-size: 1em;
        font-weight: bold;
    }

    .contact-info{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        margin: 1em 0;
        padding: 0;
        color: ${props => props.theme.colors.white};
        font-size: 1em;
        font-weight: bold;
        align-items: center;
    }

    .contact-info p{
        margin: 0;
        padding: 0;
        color: ${props => props.theme.colors.white};
        font-size: 1em;
        font-weight: bold;

    }

`

function ContactInfo() {

  return (
    <ContactInfoStyled>
        <p className = 'contact-tag'> Better yet, come see us in person!</p>
        <p className = 'business-name'>{contactData.businessName}</p>
        <div className = 'business-address'>
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