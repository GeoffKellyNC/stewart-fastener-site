import React from 'react'
import { Link } from 'react-router-dom'
//? Link Data is stored in Data Folder under Header Data
import { links } from '../data/headerData'

import NavStyled from './NavStyled'

function Nav() {
  return (
    //? NavStyled is a styled component
    <NavStyled>
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
    </NavStyled>
  )
}


export default Nav;