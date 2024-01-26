import React, { useState } from 'react'

function Sajan() {
    let [cup, setCup]=useState(10)
    var abc=()=>{
        setCup(cup-1)
    }
  return (
    <div>
      UseState Hook 
      <h1>{cup}</h1>
      <button onClick={abc}>--</button>
      <button onClick={()=>setCup(cup+1)}>++</button>
    </div>
  )
}

export default Sajan
