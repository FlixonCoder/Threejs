import React from 'react'
import Hero from '../components/Hero'
import NavBar from '../components/Navbar'
import ProductViewer from '../components/ProductViewer'

const Home = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
    </main>
  )
}

export default Home
