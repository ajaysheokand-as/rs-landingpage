import React from 'react'
import Button from './Button'
import RocketLaunch from "../data/RocketLaunch.png"

const Hero_section = () => {
    return (
        <div className='hero_container'>
            <div className='hero_left_div'>
                <div className='hero_left_title'>
                    Create Engaging<br></br> Landing Pages
                </div>
                <div className='hero_left_content'>
                Build beautiful landing pages in record time with<span className='hero_span'> Anima’s</span> Landing Page<br></br> UI kit for Figma. No code required!
                </div>
                <div className='left_hero_button'>
                <Button title='Get Started' bg="dark" icon={RocketLaunch}/>
                <Button title='How it Works'/>
                </div>
            </div>
            <div className='hero_right_div'>
                
                <div className='right_div_circle'>
                <div className='right_div_eclipse' >
                <img  src={require('../data/Ellipse1.png')} alt='image'/>

                </div>

                </div>
             

               

            </div>

        </div>
    )
}

export default Hero_section
