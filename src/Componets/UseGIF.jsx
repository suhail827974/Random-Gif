import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// console.log('consoling api key',API_KEY)

const tagApi = `https://api.giphy.com/v1/gifs/random?api_key=ZEYIpQJckX9c13VGAUOs0b5CneWW8oJo&tag=&tag`
const randomApi =`https://api.giphy.com/v1/gifs/random?api_key=ZEYIpQJckX9c13VGAUOs0b5CneWW8oJo&tag=&rating=g`

// ------------ Creating our Custom Hook ------------
function UseGIF(tag) {
  
    let [gift, setGift]=useState('')
    let [loading, setLoading]=useState(false)
    
    async function fetchedData(tag){
        setLoading(true)
        let {data} = await axios.get(tag?(randomApi):(tagApi))
        let imageSource = data.data.images.downsized_large.url;
        setGift(imageSource)
        setLoading(false)
    }
  
    useEffect( ()=>{
        fetchedData('typing')
    },[])

    return {gift, loading, fetchedData}
 
  }

export default UseGIF