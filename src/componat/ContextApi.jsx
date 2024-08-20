import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'
let apiData = createContext()
const ContextApi = ({children}) => {
    let [ info , setinfo ] = useState([])
    const getdata = () => axios.get('https://dummyjson.com/products').then((Response)=>{
        setinfo(Response.data.products);        
    })
    useEffect(()=>{
        getdata()
    })
  return (
    <apiData.Provider value={info} >{children}</apiData.Provider>
  )
}

export {ContextApi , apiData}