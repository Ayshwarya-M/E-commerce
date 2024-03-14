import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import Newsletter from '../Components/Newsletter/Newsletter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Offers/>
      <Popular/>
      <Newsletter/>
    </div>
  )
}

export default Shop