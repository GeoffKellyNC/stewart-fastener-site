import React, { useState } from 'react'

//?Importing home data 
import { homeData } from './data/homeData';
//? Importing Service component
import Services from './components/Services';

//? HomeStyled is a styled component
import HomeStyled from './styles/HomeStyled';

function Home() {
  return (
    <HomeStyled>
        <div className = 'top-btns-container'>
            <button className = 'catalog-btn top-btn'> View Catalog </button>
            <button className = 'contact-btn top-btn'> Contact Us</button>
        </div>
        <div className = 'top-text-container'>
            <h1>Welcome to Stewart Fastener</h1>
            <p className = 'tag-text'>Since 1998, Steward Fastener has been providing fastener solutions to a wide range of industries throughout North Carolina, South Carolina and the eastern United States.</p>
            <span className = 'top-span-text'> Here at Stewart Fastener, we dedicate ourselves to providing customers with the highest quality services. </span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim ut tellus. Et magnis dis parturient montes nascetur ridiculus. Purus ut faucibus pulvinar elementum integer. Sit amet cursus sit amet dictum sit. Aliquet eget sit amet tellus cras. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Pellentesque dignissim enim sit amet venenatis urna. Scelerisque felis imperdiet proin fermentum leo vel orci porta. </p>
        </div>
        <Services />
        <h3> Stewart Fastener is different than your average fastener supply company.</h3>
        <p className = 'p-desc-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </HomeStyled>
  )
}

export default Home