import { useState, useEffect } from 'react'
import { Carousel } from './components/Carousel'
import { slides } from './images/CarouselImages.json'
import "./App.css"

function App() {

  return (
      <div className='App'>
      <Carousel data={ slides } />
      </div>
  )
}

export default App
