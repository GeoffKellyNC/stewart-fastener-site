import React, { useState } from 'react'
import { send } from 'emailjs-com';

//? This is the emailjs key and Secret Data
import { EMAIL_JS_KEY, TEMPLATE_ID, SERVICE_ID } from '../../../constants';

//Importing Styled Component
import ContactFormStyled from '../styles/ContactFormStyled';

function ContactForm() {
    const [senderName, setSenderName] = useState('');
    const [senderEmail, setSenderEmail] = useState('');
    const [senderMessage, setSenderMessage] = useState('');

    const handleName = (e) => {
        setSenderName(e.target.value);
    }

    const handleEmail = (e) => {
        setSenderEmail(e.target.value);
    }

    const handleMessage = (e) => {
        setSenderMessage(e.target.value);
    }

    const sendMail = (e) => {
        e.preventDefault();
        send(
            `${SERVICE_ID}`,
            `${TEMPLATE_ID}`,
            { senderName, senderEmail, senderMessage },
            `${EMAIL_JS_KEY}`
        )
            .then((res) => {
                console.log('Message Sent', res.status, res.text);
            })
            .catch((err) => {console.error('Error', err)});
            setSenderName('');
            setSenderEmail('');
            setSenderMessage('');
    }



  return (
      <ContactFormStyled onSubmit={sendMail}>
        <input 
            type="text"
            name="senderName"
            placeholder="Your Name"
            onChange = {handleName}
            className = 'input-box'
        />
        <input 
            type="email"
            name="senderEmail"
            placeholder="Your Email"
            onChange = {handleEmail}
            className = 'input-box'
        />
        <textarea 
            type="text"
            name="senderMessage"
            placeholder="Your Message"
            onChange = {handleMessage}
            className = 'input-box'
            rows= '5'
            cols = '40'
        />
        <button type = 'submit' className = 'btn'>Submit</button>
      </ContactFormStyled>
  )
}

export default ContactForm