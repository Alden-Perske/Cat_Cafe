import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import BookNowCTA from '../Components/BookNowCTA'
import AboutUsCTA from '../Components/AboutUsCTA'

function Home() {
  return (
    <>
    <Navbar/>
    <BookNowCTA/>
    <AboutUsCTA/>
    <Footer/>
    </>
  )
}

export default Home