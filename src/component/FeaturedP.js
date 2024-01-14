import React, { useContext } from 'react'
import { AppContext } from '../context/ProductContext'
import Product from './Product'

const FeaturedP = () => {
    const {isLoading, featuredProduct} = useContext (AppContext)
    console.log(featuredProduct)
    if(isLoading){
        return <div>.....Loading</div>
    }
    
  return (
    <>
      <section className='bg-info'>
        <div className="container">
            <h6>Check Now</h6>
            <h3>Our Features Services</h3>
            <div className="card-group justify-content-around ">
                {
                    featuredProduct.map((curEle)=>{
                        
                        return <Product key={curEle.id} {...curEle}/>
                    })
                }
            </div>
        </div>
      </section>
    </>
  )
}

export default FeaturedP
