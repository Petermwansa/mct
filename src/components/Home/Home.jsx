import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import { createPortal } from 'react-dom'

const Home = () => {
  return createPortal(
    <div>
        <Banner />
        <HomeCategory />
    </div>,
    document.getElementById('home')
  )
}

export default Home
