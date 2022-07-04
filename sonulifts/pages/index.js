import React from 'react'

const Home = () => {
  return (
    <>
      HeroBanner
      <div>
        <h2>Completely Personalized Workout Plan</h2>
        <p>Get stronger and bigger faster</p>
      </div>

      <div>
        {['Product 1', 'Product 2'].map((product) => product)}
      </div>

      Footer
    </>

  )
}

export default Home