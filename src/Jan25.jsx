import React, { useEffect, useState } from 'react'
import './test.scss'
function Jan25() {
    let [isActive, setIsActive]=useState(true)
    let [isHead, setIsHead]=useState('')
    var abc=()=>{
        setIsActive(!isActive)
    }
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(scrollY> 250)
            {
                setIsHead('aa')
            }
            else 
            {
                setIsHead('')
            }
        })
    },[])
  return (
    <div>
        <header className={isHead}></header>
      <h1 className={isActive ? " ":"hide"}>This is demo</h1>
      <button onClick={abc}>toggle</button>
    </div>
  )
}

export default Jan25
