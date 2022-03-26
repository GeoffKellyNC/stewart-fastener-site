import React from 'react'

//? Importing Qeustion Character .svg
import question from '../svg/question2.svg'

import GetTKUStyled from '../styles/GetTKUStyled';

function GetToKnowUs() {
  return (
    <GetTKUStyled>
      <img src={question} alt='question' className = 'question-img' />
        <div>
            <h2>Take some time to get to know us...</h2>
        </div>
        <div className = 'learn-btn'>
            <button>Learn More</button>
         </div>
    </GetTKUStyled>
  )
}

export default GetToKnowUs