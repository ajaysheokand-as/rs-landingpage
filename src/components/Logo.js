import React from 'react'
import Logobar from './Logobar'
import image1 from '../image/_Client logo (1).png'
import image2 from '../image/_Client logo (2).png'
import image3 from '../image/_Client logo (3).png'
import image4 from '../image/_Client logo (4).png'
import image5 from '../image/_Client logo (5).png'





const Logo = () => {
  return (
    <div>

<div className='logobar'>

    <div className='logos'>
        
      <Logobar  img ={image1}/>
      <Logobar img ={image2} />
      <Logobar  img ={image3} />
      <Logobar  img ={image4} />
      <Logobar  img ={image5} />
    
     
            </div>

        </div>
      
    </div>
  )
}

export default Logo
