import React from 'react'
import './App.css'
import {Navbar, Brand, CTA} from './components'
import {Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient_bg'>
        <Navbar />
        <Header />
        <div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
      </div>
        </div>
    </div>
  ) 
}

export default App































