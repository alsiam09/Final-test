import React, { useEffect, useState } from 'react'
import ProDetHead from '../componat/ProDetHead'
import Productdesk from '../componat/Productdesk'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ProdectDetail = () => {
    let ProdectID = useParams()
    
    let [ onprodata , Setonprodata ] = useState([])
    let [ onprodataX , SetonprodataX ] = useState([])
    
    const getdatajon = () => {
        axios.get(`https://dummyjson.com/products/${ProdectID.id}`).then((response)=>{
            Setonprodata(response.data);
            SetonprodataX(response.data.images);
            
        })
    }
    useEffect(()=>{
        getdatajon()
    })
    return (
    <section>
        <ProDetHead/>
        <div className="container mx-auto">
            <Productdesk onprodataX={onprodataX} onprodata={onprodata}/>
        </div>
    </section>
  )
}

export default ProdectDetail