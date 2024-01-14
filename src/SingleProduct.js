import React, { useContext, useEffect } from 'react'
import { AppContext } from './context/ProductContext'
import { useParams } from 'react-router-dom'

const API="https://api.pujakaitem.com/api/products"

const SingleProduct = () => {
  const {singleProduct,isSingleLoading, getSingleProduct } =useContext(AppContext)
  const{proId} = useParams()
  console.log(singleProduct)
  const{id, name, price, color, image, star, categorey,reviews}=singleProduct

  useEffect(() => {
    getSingleProduct(`${API}?id=${proId}`);    
  }, [])
  
  return (
        <div>{name}</div>
  )
}

export default SingleProduct