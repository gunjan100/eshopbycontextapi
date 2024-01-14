import React, { useContext } from 'react'
import Hero from './component/Hero'
import { AppContext } from './context/ProductContext';

const AboutUs = () => {
  const myname =useContext(AppContext)

  const data={
    name:"Gunjan",
  };
  return (
    <>
   
      <Hero mydata={data}/>
    </>
  )
}

export default AboutUs
