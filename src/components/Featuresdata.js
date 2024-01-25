import React from 'react'
import Features from './Features'
import image1 from '../image/MagicWand.png'
import image2 from '../image/Confetti.png'
import image3 from '../image/BoundingBox.png'



const Featuresdata = () => {
  return (

    <>
    
    <div className='features'>

<div className='headline'>

      <div className='featuretext'>
        Features
      </div>

      <div className='featuretest2'>
        These are just a few features you’ll get using Anima Landing Page Ui Kit.
      </div>

      <div className='cardsrow'>
      <Features title1="Fast building" title2="Tailor Anima's Landing Page UI Kit to your unique style and brand with customisable components, in no time!" img ={image1}/>
      <Features title1="Responsive Design" title2="No need to worry about screen size. Anima's Landing Page UI Kit adapts to any screen size, from desktop to mobile." img ={image2} />
      <Features title1="No Code Needed" title2="Zero coding skills required, Anima's Landing Page UI Kit empowers you to create stunning landing pages with ease." img ={image3} />
</div>


      </div>

</div>

            </>
  )
}

export default Featuresdata
