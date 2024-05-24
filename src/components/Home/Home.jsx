import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import { createPortal } from 'react-dom'
import CategoryShowCate from './CategoryShowCate'

const Home = () => {
  return createPortal(
    <div>
        <Banner />
        <HomeCategory />
        <CategoryShowCate />
    </div>,
    document.getElementById('home')
  )
}

export default Home
