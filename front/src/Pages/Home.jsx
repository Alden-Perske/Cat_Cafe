import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import BookNowCTA from '../Components/BookNowCTA'
import AboutUsCTA from '../Components/AboutUsCTA'

function Home() {
  return (
    <>

      <div id='sticky'>
      <Navbar />
      <div id='background'>
        <BookNowCTA />
        <AboutUsCTA />
      </div>
      <Footer />
      </div>
      



    </>
  )
}

export default Home