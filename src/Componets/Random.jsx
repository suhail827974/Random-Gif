import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import UseGIF from './UseGIF';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// console.log('consoling api key',API_KEY)
function Random() {

    // let [gift, setGift]=useState('')
    // let [loading, setLoading]=useState(false)
    
    // async function fetchedData(){
    //     setLoading(true)
    //     const url= `https://api.giphy.com/v1/gifs/random?api_key=ZEYIpQJckX9c13VGAUOs0b5CneWW8oJo&tag=&rating=g`
    //     // let output = await axios.get(url)
    //     let {data} = await axios.get(url)
    //     // console.log(data) 
    //     let imageSource = data.data.images.downsized_large.url;
    //     // console.log(imageSource) 
    //     setGift(imageSource)
    //     setLoading(false)
    // }

    // useEffect( ()=>{
    //     fetchedData()
    // },[])

    
    // destructure from custom hook 
    const {gift, loading, fetchedData}= UseGIF();

  return (
    <div style={{display:'flex', flexDirection:"column", alignItems:"center",border:"2px solid black"}}>
        <h4 style={{fontSize:'23px',border:"2px solid black"}}>Random Gif</h4>
        
        {
            loading?(<Spinner/>):(<img style={{maxWidth:'200px', margin:'10px'}} src={gift}  />)
        }
        
        <button onClick={()=> fetchedData()} style={{margin:'20px 0px', padding:'5px 20px',borderRadius:'10px'}}>
            Generate
        </button>
         
    </div>
  )
}

export default Random