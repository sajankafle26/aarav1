import React from 'react'
import { useParams } from 'react-router-dom'

function About() {
    let {id}=useParams()
  return (
    <div>
      <h1>About Us {id}</h1>
    </div>
  )
}

export default About
