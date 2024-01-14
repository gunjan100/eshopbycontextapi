import React from 'react'
import { NavLink } from 'react-router-dom'

const Product = (curEle) => {
    const {id, name, price, category, image, description
    }=curEle
  return (
    <>
    <NavLink to={`/singleProduct/${id}`}>
    <div class="card" style={{width: "18rem"}}>
  <img src={image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">{description}</p>
    <p class="card-text">{price}</p>
    <p class="card-text">{category}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </NavLink>    
    </>
  )
}

export default Product