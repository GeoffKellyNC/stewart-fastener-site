import React from 'react'

//?Importing home data 
import { homeData } from './data/homeData';

//? HomeStyled is a styled component
import HomeStyled from './styles/HomeStyled';

function Home() {
  return (
    <HomeStyled>
        <div className = 'top-btns-container'>
            <button className = 'catalog-btn top-btn'> View Catalog </button>
            <button className = 'contact-btn top-btn'> Contact Us</button>
        </div>
    </HomeStyled>
  )
}

export default Home