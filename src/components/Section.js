import React from 'react'
import './section.css'

export default function section({sectionimg}) {
  return (
    <div className="section2" >
      <div className='wrap'>
      <img src={sectionimg}/>
      <div>
        <h1>Reach financial <br/> freedom</h1>
        <p>Whether it's spending less on take outs, or saving <br/> towards a birthday. We know how difficult it can be <br/> to manage your finances. That's why we came up <br/> with a solution that makes it feel less like a chore,<br/> and more like an exciting experience.</p>
      </div>
      </div>
      
    </div>
  )
}
