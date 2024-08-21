import React from 'react'
import Random from './Componets/Random'
import Tag from './Componets/Tag'

export default function App() {
  return (
    <div style={{backgroundColor:"#07f070", width:'99.4vw',height:"96vh"}}>
      <h1 style={{display:'flex', justifyContent:'center',backgroundColor:'red',borderRadius:'10px'}}>Random Gif</h1>
      <div>
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}

