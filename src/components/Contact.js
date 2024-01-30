import React from 'react'
import Button from './Button'

const Contact = () => {
  return (
    <div className='Contact_container'>
      <div className='Contact_container_inner'>
        <div className='contact_inner_body'>
          <div className='contact_inner_body_text_l'>
            Let’s get in touch!
          </div>
          <div className='contact_inner_body_text_s'>
            Got questions about the Landing Page UI Kit? Our team is here to help. Contact us for quick and friendly support.
          </div>

        </div>
<div className='contact_left_right'>
        <div className='contact_left_div'>
          <div className='contact_join_div'>
            <div className='contact_left_div_inner'>
              <div className='contact_left_div_inner_pic'>
                <img src={require("../data/PhoneCall.png")} alt='react image' />

              </div>
              <div className='contact_left_div_inner_pic_with_text' >
                +012 345 6789
              </div>
            </div>
            <div className='contact_left_div_inner'>

              <div className='contact_left_div_inner_pic'>
                <img src={require("../data/EnvelopeSimple (1).png")} alt='react image' />

              </div>
              <div className='contact_left_div_inner_pic_with_text' >
                Hello@animaapp.com
              </div>
            </div>
          </div>
          <div className='social_media'>
            <div className='connect_with'>
              Connect with us
            </div>
            <div className='social_media_icon'>
              <img src={require('../data/Social Icons (1).png')} alt='react image' />
              <img src={require('../data/Social Icons (2).png')} alt='react image' />
              <img src={require('../data/Social Icons (3).png')} alt='react image' />
              <img src={require('../data/Social Icons (4).png')} alt='react image' />
            </div>

          </div>
        </div>
        <div className='contact_right_div'>

          <div className='contact_input_div'>

            <span className='input_pic'><img src={require('../data/User.png')} alt='react image' /> </span>
            <input  className="cont_input_class"type="text" placeholder='Full Name' />

          </div>

          <div className='contact_input_div'>

            <span className='input_pic'><img src={require('../data/EnvelopeSimple (1).png')} alt='react image' /> </span>
            <input   className="cont_input_class" type="text" placeholder='Email' />

          </div>
          <Button title="Submit" bg="dark"/>
        </div>
        </div>

      </div>

    </div>
  )
}

export default Contact
