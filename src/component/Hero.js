import React from 'react'

const Hero = ({mydata}) => {
    const {name}=mydata
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col">
                <h1>Welcome to {name} </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur asperiores numquam mollitia a eligendi unde! Eius, nemo veniam. Odio cum rerum sint delectus! Reprehenderit modi est maiores? Optio, blanditiis dolorum?</p>
                <button type="button" class="btn btn-outline-warning">About Us</button>
                </div>
            <div className="col"><img src="images/hero.jpg" className='img-fluid' alt="" /></div>
        </div>
      </div>
    </>
  )
}

export default Hero
