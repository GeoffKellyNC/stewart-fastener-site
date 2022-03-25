//Imorting React
import React, { useState } from 'react'

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