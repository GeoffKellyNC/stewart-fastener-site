//Imorting React
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//Component: Nav
import Nav from "./Nav/Nav";
//Component: MobileNav
import MobileNav from "./MobileNav/MobileNav";
//Importing Hamburger Menu
import { AiOutlineMenu } from "react-icons/ai";
//Styling from styled components
import HeaderStyled from './styles/HeaderStyled';




function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = (e) => {
        setIsOpen(!isOpen);
    }


  return (
    <HeaderStyled>
        <div className = 'nav-logo'>
            <Link to = '/'>
                <img 
                    src = 'https://i.imgur.com/Mcp6ia1.png'
                    alt = 'Stewart Fastener Logo'
                    className = 'nav-logo'
                />
            </Link>
        </div>
        <Nav />
        <AiOutlineMenu 
            className = 'ham-menu' 
            onClick={(e) => handleMenu(e)} 
        />
        {
            isOpen && <MobileNav />
        }
    </HeaderStyled>
  )
}

export default Header