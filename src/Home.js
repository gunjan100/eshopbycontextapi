import React, { useState } from 'react'
import Hero from './component/Hero'
import Services from './component/Services'
import Trusted from './component/Trusted'
import FeaturedP from './component/FeaturedP'

const Home = () => {
  const data={
    name:"MY EcomShop"
  }

  return (
    <>
     <Hero mydata={data}/>
     <FeaturedP/>
     <Services/>
     <Trusted/>
    </>
  )
}

export default Home
