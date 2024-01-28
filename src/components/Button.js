import React from 'react'

const Button = (props) => {
  console.log("Props=>", props);
  return (
    <div  className='rocket_button'>
        
        <button className={`button_class ${props.bg === "dark" ? "bg-dark" : " " }`}>
        {props.icon && <div className='rocket'>
         <img src={props.icon} alt='image'/>
        </div>}
        <div className={`button-text ${props.bg === "dark" ? "text-white" : " " }` }>
          {props.title}
        </div>

      </button>
    </div>
  )
}

export default Button
