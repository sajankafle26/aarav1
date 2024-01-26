import React, { useEffect, useState } from 'react'
function Aarambha() {
    let [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/products').then((a)=>a.json()).then(b=>setData(b.products))
    }, [])
    console.log(data)
  return (
    <div>
      <h2>useEffect </h2>
      <ol>
      {data.map((a)=>(
        <li key={a}>{a.title} <img src={a.thumbnail}/></li>
      ))}
      </ol>
    </div>
  )
}

export default Aarambha
