import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='nav_container'>
      
    <div className='title_logo'>
      <div className='nav_logo'>
        <img src={require('../data/logo.png')} alt='image'/>
      </div>
      
      <div className='title_with_logo'>
          Landing <span className='title_span'>Page</span>
      </div>
      </div>
      <div className='left_nav'>
     <div className='nav_contact_button'>

        Contact

    </div>
     <div>
     <Button title='How it Works'/>
     </div>
     <div>
     <Button title='Get Started'/>
     </div>
      

    
    </div>
    </div>
  )
}

export default Navbar
