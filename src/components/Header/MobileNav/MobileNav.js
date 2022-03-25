import React from 'react'
import { Link } from 'react-router-dom'
import { links } from '../data/headerData'
import MobileNavStyled from './MobileNavStyled'

function MobileNav() {
  return (
    <MobileNavStyled>
    <ul>
        {links.map(link => {
            return (
                <li key={link.id}>
                    <Link to={link.path}>{link.text}</Link>
                </li>  
            ) 
        })
     }
    </ul>
</MobileNavStyled>
  )
}

export default MobileNav