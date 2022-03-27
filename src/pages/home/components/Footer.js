import React from 'react'

import FooterIcons from './FooterIcons'

import logo from '../images/stewart-fasteners-logo.png'
import FooterStyled from '../styles/FooterStyled'


function Footer() {
  return (
    <FooterStyled>
        <div className = 'footer-container'>
            <img src={logo} alt="Stewart Fasteners Logo" className = 'footer-logo' />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.4994658709224!2d-80.94076048454849!3d35.11920748032928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88569f2235c38c63%3A0x3cfd8880d6f7c06!2sStewart%20Fastener%20%26%20Tool!5e0!3m2!1sen!2sus!4v1648348591687!5m2!1sen!2sus" width="400" height="300" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title = 'Google Map' className = 'google-map'></iframe>
        </div>
        {/* <FooterIcons /> */}

        <div className="footer-bottom">
            <p>Copyright © 2020 Stewart Fastener</p>
            <span>Designed and Developed by <a href = '#'>Geoffrey Kelly</a></span>
        </div>
    </FooterStyled>
  )
}

export default Footer