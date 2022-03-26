import React from 'react'

import logo from '../images/stewart-fasteners-logo.png'
import FooterStyled from '../styles/FooterStyled'

function Footer() {
  return (
    <FooterStyled>
        <div>
            <img src={logo} alt="Stewart Fasteners Logo" className = 'footer-logo' />
            <p className = 'footer-name'>Stewart Fastener</p>
        </div>

        <div className="footer-bottom">
            <p>Copyright © 2020 Stewart Fastener</p>
        </div>
    </FooterStyled>
  )
}

export default Footer