import React from 'react'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import WhatWeDo from '../WhatWeDo/WhatWeDo'
import MoreDetails from '../MoreDetails/MoreDetails'
import Footer from '../Footer/Footer'
import '../../App.css'

const Home = () => {
  return (
    <div className="home">
         <Header />
      <Hero />
      <WhatWeDo />
      <MoreDetails />
      <Footer />
    </div>
  )
}

export default Home