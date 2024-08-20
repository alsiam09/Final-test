import React, { useEffect, useState } from 'react'
import ProDetHead from '../componat/ProDetHead'
import Productdesk from '../componat/Productdesk'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ProdectDetail = () => {
    let ProdectID = useParams()
    
    let [ onprodata , Setonprodata ] = useState([])
    
    const getdatajon = () => {
        axios.get(`https://dummyjson.com/products/${ProdectID.id}`).then((response)=>{
            Setonprodata(response.data);
            
        })
    }
    useEffect(()=>{
        getdatajon()
    })
    return (
    <section>
        <ProDetHead/>
        <div className="container mx-auto">
            <Productdesk onprodata={onprodata}/>
        </div>
    </section>
  )
}

export default ProdectDetail