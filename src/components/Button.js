import React from 'react'

const Button = (props) => {
  return (
    <div  className='rocket_button'>
        
        <button className='button_class'>
        <div className='rocket'>
        <img src={require('../data/RocketLaunch.png')} alt='image'/>
        </div>
        {
            props.title
        }

      </button>
    </div>
  )
}

export default Button
