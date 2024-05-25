import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import { createPortal } from 'react-dom'
import CategoryShowCate from './CategoryShowCate'
import Register from './Register'
import Locations from './Locations'
import Brands from './Brands'

const Home = () => {
  return createPortal(
    <div>
        <Banner />
        <HomeCategory />
        <CategoryShowCate />
        <Register />
        <Locations />
        <Brands />
    </div>,
    document.getElementById('home')
  )
}

export default Home
