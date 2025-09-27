import React from 'react'
import Features from './component/FeaturesSection'
import Testimonials from './component/TestimonialsSection'
import Header from './component/Navbar'
import Footer from './component/Footer'
import Hero from './component/HeroSection'
import About from './component/About'


const App = () => {

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <Footer />
      
    </div>)
}

export default App
