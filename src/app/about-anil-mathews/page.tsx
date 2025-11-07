import React from 'react'
import AboutAuthor from '../components/home/AboutAuthor'
import FlipSwitch from '../components/home/FlipSwitch'
import Footer from '../components/home/Footer'
import Header from '../components/home/Header'

const page = () => {
  return (
    <section>
      <Header />
      <AboutAuthor />
      <FlipSwitch />
      <Footer />
    </section>
  )
}

export default page
