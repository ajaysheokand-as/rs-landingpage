import React from 'react'

const Footer = () => {
  return (
    <div className='footer_containetr'>
        <div className='footer_content'>
        © 2023 Anima’s Landing Page Ui Kit. 
        </div>
        <div className='Footer_social'>
        <img src={require('../data/Social Icons (1).png')} alt='react image' />
              <img src={require('../data/Social Icons (2).png')} alt='react image' />
              <img src={require('../data/Social Icons (3).png')} alt='react image' />
              <img src={require('../data/Social Icons (4).png')} alt='react image' />
        </div>
      
    </div>  
  )
}

export default Footer
