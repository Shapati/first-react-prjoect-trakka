import React, { useRef }  from "react"
import './heading.css'

export default function Heading({image ,image2,decorate}){

  const email = useRef()
  const submit = useRef()
  const key = () =>{
   if(email.current.value.includes('@') && email.current.value.includes('.com')){
     submit.current.classList.remove('black')
   }else{
    submit.current.classList.add('black')
   }
  }

  return (
    <div className="section">
      <div className="wholesection">

      
      <div className="firstsection">
        <img src={image2} />
        <h1>Give your finances <br></br> the attention it <br></br> deserves</h1>
        <p>We built a tool that gives you control of your expenses, budgets <br></br> and savings. Sign up for the waitlist and get notified as soon as <br></br>  we're live.</p>
        <div className="inputbox" ref={submit}>
          <input placeholder="Enter your email address" 
          type="email" 
          onKeyUp={key}
          ref={email} 
           ></input>
          <button>Join the waitlist</button>
        </div>
      </div>

      <div className="secondsection">
        <img src={image} />
      </div>

    </div>

    <div className="decorator">
      <img src={decorate}/>
    </div>
 
    </div>
  )
}
