import React from 'react'

const Highlighted = () => {
    return (
        <>

            <div className='HighlightedCTA'>
                <div className='Visuals'>
                    <div className='circle'>
                        <div className='Ellipse1'>
                            <img src={require('../image/Ellipse 1.png')} alt='image' />
                        </div>
                        <div className='MobileMockup'>
                            <img src={require('../image/Mobile Mockup.png')} alt='image' />
                        </div>
                        <div className='Ellipse2'>
                            <img src={require('../image/Ellipse 2.png')} alt='image' />
                        </div>
                    </div>
                </div>
                <div className='CTATeXT'>
                <div className='Highlitext'>
                Get Landing Page UI Kit Today!
                </div>
                <div className='Highlitext2'>
                Break the Figma limits and explore the endless possibilities with Anima.
                </div>
                <div className='HighButton'>
                <img src={require('../image/Button.png')} alt='image' />
                </div>
                </div>
               
            </div>
        </>


    )
}

export default Highlighted
