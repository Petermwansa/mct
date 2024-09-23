import React, { useState } from 'react';
import PageHeader from '../PageHeader/PageHeader';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import Search from './Search';
import ShopCategory from './ShopCategory';
import './Shop.css';
import image3 from '../../assets/images/laptops/macbook-air.jpg';
import image4 from '../../assets/images/phones/iphone-14-pro-max.jpeg';
import image5 from '../../assets/images/phones/Galaxy_S22_Ultra_PR_main1F.jpg';
import image6 from '../../assets/images/phones/Pixel-5.jpg';
import image7 from '../../assets/images/watches/2024-05-27 13.27.40.jpg';
import image8 from '../../assets/images/watches/2024-05-27 13.30.01.jpg';
import image9 from '../../assets/images/watches/2024-05-27 13.30.21.jpg';
import image10 from '../../assets/images/watches/2024-05-27 13.30.29.jpg';
import image11 from '../../assets/images/watches/2024-05-27 13.30.36.jpg';
import image12 from '../../assets/images/pencils/2024-05-27 13.31.29.jpg';
import image13 from '../../assets/images/pencils/2024-05-27 13.31.39.jpg';
import image14 from '../../assets/images/pencils/2024-05-27 13.31.47.jpg';
import image15 from '../../assets/images/pencils/2024-05-27 13.31.55.jpg';
import image16 from '../../assets/images/tablets/ipad-pro20-2022.jpeg';
import image18 from '../../assets/images/laptops/download.jpeg';
import image19 from '../../assets/images/earphones/airpodsPro.png';
import image20 from '../../assets/images/earphones/airpodsmax.jpeg';
import image21 from '../../assets/images/tablets/ipad-10-wifi.jpeg';
import image22 from '../../assets/images/magsafe/2024-05-27 13.31.13.jpg';
import image23 from '../../assets/images/watches/2024-09-23 21.41.03.jpg';

import { Helmet } from 'react-helmet';



const Data = [

  {
    id: "124e13b9-4b2f-a74d-a77b362d6ead",
    category: "laptops",
    name: "MacBook Air 13",
    seller: "Apple",
    price: 835,
    stock: 20,
    ratings: 4,
    ratingsCount: 3725,
    img: image3,
    shipping: 1,
    quantity: 0
  },
  {
    id: "124e13b9-24-4b2f-a74d-a77b362d6ead",
    category: "Phones",
    name: "iPhone 14 Pro Max",
    seller: "Apple",
    price: 1130,
    stock: 20,
    ratings: 4,
    ratingsCount: 3725,
    img: image4 ,
    shipping: 1,
    quantity: 0
  },
  {
    id: "124e13b9-2d54-4b2f-a74d-a77b362dd",
    category: "Phones",
    name: "Samsung S23 Ultra",
    seller: "Samsung",
    price: 746,
    stock: 20,
    ratings: 4,
    ratingsCount: 3725,
    img: image5,
    shipping: 1,
    quantity: 0
  },
  {
    id: "124e13b9-2d54-4b77b362d6ead",
    category: "Phones",
    name: "Google Pixel 5",
    seller: "Google",
    price: 236,
    stock: 20,
    ratings: 4,
    ratingsCount: 3725,
    img: image6,
    shipping: 1,
    quantity: 0
  },
  {
    id: "124e13b9-2d5a74d-a77b362d6ead",
    category: "Watches",
    name: "Apple watch S9 GPS",
    seller: "Apple",
    price: 410,
    stock: 20,
    ratings: 4,
    ratingsCount: 3725,
    img: image7,
    shipping: 1,
    quantity: 0
  },
  {
    id: "124e13b9-2d5a74d-a77b362d6s",
    category: "Watches",
    name: "Apple watch S9 GPS Aluminium Case",
    seller: "Apple",
    price: 370,
    stock: 20,
    ratings: 4,
    ratingsCount: 3725,
    img: image23,
    shipping: 1,
    quantity: 0
  },
  {
    id: "12-4b2f-a74d-a77b362d6ead",
    category: "Watches",
    name: "Apple watch SE 2023",
    seller: "Apple",
    price: 285,
    stock: 20,
    ratings: 4,
    ratingsCount: 3725,
    img: image8,
    shipping: 1,
    quantity: 0
  },
  {
    id: "124e13b9-2d54-4b2f-a74d-a77b362d6",
    category: "Watches",
    name: "Apple watch SE 2023",
    seller: "Apple",
    price: 285,
    stock: 20,
    ratings: 4,
    ratingsCount: 3725,
    img: image9,
    shipping: 1,
    quantity: 0
  },
  {
    id: "124e134b2f-a74d-a77b362d6ead",
    category: "Watches",
    name: "Apple watch SE",
    seller: "Apple",
    price: 285,
    stock: 20,
    ratings: 4,
    ratingsCount: 3725,
    img: image10,
    shipping: 1,
    quantity: 0
  },
  {
    id: "124e1b362d6ead",
    category: "Watches",
    name: "Apple Watch",
    seller: "Apple",
    price: 285,
    stock: 20,
    ratings: 4,
    ratingsCount: 3725,
    img: image11,
    shipping: 1,
    quantity: 0
  },
  {
    id: "124e13b9-2d54-a77b362d6ead",
    category: "Pencils",
    name: "Apple Pencil 2",
    seller: "Apple",
    price: 120,
    stock: 20,
    ratings: 4,
    ratingsCount: 3725,
    img: image12,
    shipping: 1,
    quantity: 0
  },
  {
    id: "124e13b9-2d54-47b362d6ead",
    category: "Pencils",
    name: "Apple Pencil 2",
    seller: "Apple",
    price: 120,
    stock: 20,
    ratings: 4,
    ratingsCount: 3725,
    img: image13,
    shipping: 1,
    quantity: 0
  },
  {
    id: "124e13b9f-a74d-a77b362d6ead",
    category: "Pencils",
    name: "Apple Pencil 2",
    seller: "Apple",
    price: 120,
    stock: 20,
    ratings: 4,
    ratingsCount: 3725,
    img: image14,
    shipping: 1,
    quantity: 0
  },
  {
    id: "124e13b9-2d-a77b362d6ead",
    category: "Pencils",
    name: "Apple Pencil 2",
    seller: "Apple",
    price: 120,
    stock: 20,
    ratings: 4,
    ratingsCount: 3725,
    img: image15,
    shipping: 1,
    quantity: 0
  },
  {
    id: "124e13hhhb9-2d-a7jhvjhvjhvhjvhj7b3eadjbj",
    category: "tablets",
    name: "Apple iPad Air 5  M1Cellular",
    seller: "Apple",
    price: 629,
    stock: 20,
    ratings: 4,
    ratingsCount: 3725,
    img: image16,
    shipping: 1,
    quantity: 0
  },
  {
    id: "124e13b9-2d-a7jhvjh7b3iuyvfydfgdgheadjbj",
    category: "laptops",
    name: "Apple MacBook Pro M3 Max",
    seller: "Apple",
    price: 3630,
    stock: 20,
    ratings: 4,
    ratingsCount: 3725,
    img: image18,
    shipping: 1,
    quantity: 0
  },
  {
    id: "124e13b9-2d-a7jjvkhvvuhgchgtcxgh7b3eadjbj",
    category: "Airpods",
    name: "AirPods Pro",
    seller: "Apple",
    price: 275,
    stock: 20,
    ratings: 4,
    ratingsCount: 3725,
    img: image19,
    shipping: 1,
    quantity: 0
  },
  {
    id: "124e13b9-2jvjvd-a77b3ehgcjhlihfvfjgvjkvadjbj",
    category: "Airpods",
    name: "Apple AirPods Max",
    seller: "Apple",
    price: 615,
    stock: 20,
    ratings: 4,
    ratingsCount: 3725,
    img: image20,
    shipping: 1,
    quantity: 0
  },
  {
    id: "124e13b9-2hhhhhhjgcjgd-a7jhvjvjhvjh7b3eadjbj",
    category: "Airpods",
    name: "Apple IPad 10 WI-FI",
    seller: "Apple",
    price: 495,
    stock: 20,
    ratings: 4,
    ratingsCount: 3725,
    img: image21,
    shipping: 1,
    quantity: 0
  },
  {
    id: "124e13b9-2hhhhhhd-a77b3eadjbj",
    category: "MagSafe",
    name: "Apple MagSafe",
    seller: "Apple",
    price: 60,
    stock: 20,
    ratings: 4,
    ratingsCount: 3725,
    img: image22,
    shipping: 1,
    quantity: 0
  },

  ]
  

const showResults = "Showing 01 - 12 of 139 results"

const Shop = () => {
  const [gridList, setGridList] = useState(true);
  const [products, setProducts] = useState(Data);


  // for the pagination 
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // to change the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  //filter the products based on the category 
  const [selectedCategory, setSelectedCategory] = useState('All');
  const menuItems = [...new Set(Data.map((val) => val.category))];
  
  const filterItem = (curcat) => {
    const newitem = Data.filter(newVal => {
      return newVal.category === curcat;
    })

    setSelectedCategory(curcat);
    setProducts(newitem);
  }



  return (
    <div className='shop-page'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>MTC - Shop</title>
                <link rel="canonical" href="#" />
            </Helmet>
        <PageHeader title="Our Shop Page" curPage='Shop'/>
        {/* the shop page */}
        <div className='shop-page'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-8 col-12'>
                  <article>
                    {/* laytout and title  */}
                    <div className='shop-title d-flex flex-wrap justify-content-between'>
                      <p>{showResults}</p>
                      <div className={`product-view-mode ${gridList ? 'gridActive' : 'listActive'}`}>
                        <a className='grid' onClick={(() => setGridList(!gridList))}>
                          <i className='icofont-ghost'></i>
                        </a>
                        <a className='list' onClick={(() => setGridList(!gridList))}>
                          <i className='icofont-listine-dots'></i>
                        </a>
                      </div>
                    </div>
                    {/* the products cards  */}
                    <div className=''>
                      <ProductCard gridList={gridList} products={currentProducts}/>
                    </div>
                    <Pagination 
                      productsPerPage={productsPerPage} 
                      totalProducts={products.length} 
                      paginate={paginate}
                      activePage={currentPage}
                      />
                  </article>
              </div>
              <div className='col-lg-4 col-12'>
                  <aside>
                    <Search products={products} gridList={gridList}/>
                    <ShopCategory 
                      filterItem={filterItem} 
                      setItem={setProducts} 
                      menuItems={menuItems} 
                      setProducts={setProducts} 
                      selectedCategory={selectedCategory}
                    />
                  </aside>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Shop
