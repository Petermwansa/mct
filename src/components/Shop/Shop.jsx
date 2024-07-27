import React, { useState } from 'react';
import PageHeader from '../PageHeader/PageHeader';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import Search from './Search';
import ShopCategory from './ShopCategory';
import './Shop.css';
import image1 from '../../assets/images/category/laptops.jpeg';
import image2 from '../../assets/images/laptops/dell.jpeg';
import image3 from '../../assets/images/laptops/hp.jpeg';
import image4 from '../../assets/images/phones/iphone-15.jpeg';
import image5 from '../../assets/images/phones/s23.jpeg';
import image6 from '../../assets/images/phones/huawei-pura.jpeg';
import image7 from '../../assets/images/watches/2024-05-27 13.27.40.jpg';
import image8 from '../../assets/images/watches/2024-05-27 13.30.01.jpg';
import image9 from '../../assets/images/watches/2024-05-27 13.30.21.jpg';
import image10 from '../../assets/images/watches/2024-05-27 13.30.29.jpg';
import image11 from '../../assets/images/watches/2024-05-27 13.30.36.jpg';
import image12 from '../../assets/images/pencils/2024-05-27 13.31.29.jpg';
import image13 from '../../assets/images/pencils/2024-05-27 13.31.39.jpg';
import image14 from '../../assets/images/pencils/2024-05-27 13.31.47.jpg';
import image15 from '../../assets/images/pencils/2024-05-27 13.31.55.jpg';



const Data = [

  {
    id: "4e13b9-2d54-4b2f-a74d-a77b362d6ead",
    category: "laptops",
    name: "MacBook Pro 2023",
    seller: "Apple",
    price: 920,
    stock: 20,
    ratings: 4,
    ratingsCount: 3725,
    img: image2,
    shipping: 1,
    quantity: 0
  },
  {
    id: "124e13b9-4b2f-a74d-a77b362d6ead",
    category: "laptops",
    name: "MacBook Pro 2023",
    seller: "Apple",
    price: 920,
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
    name: "iPhone 15 Pro Max",
    seller: "Apple",
    price: 920,
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
    price: 820,
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
    name: "Huawei Pura 70 Ultra",
    seller: "Huawei",
    price: 800,
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
    name: "Apple watch",
    seller: "Apple",
    price: 400,
    stock: 20,
    ratings: 4,
    ratingsCount: 3725,
    img: image7,
    shipping: 1,
    quantity: 0
  },
  {
    id: "124e13b9-2d5477b362d6ead",
    category: "Watches",
    name: "Apple watch",
    seller: "Apple",
    price: 400,
    stock: 20,
    ratings: 4,
    ratingsCount: 3725,
    img: image8,
    shipping: 1,
    quantity: 0
  },
  {
    id: "12-4b2f-a74d-a77b362d6ead",
    category: "Watches",
    name: "Apple watch",
    seller: "Apple",
    price: 400,
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
    name: "Apple watch",
    seller: "Apple",
    price: 400,
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
    name: "Apple watch",
    seller: "Apple",
    price: 400,
    stock: 20,
    ratings: 4,
    ratingsCount: 3725,
    img: image10,
    shipping: 1,
    quantity: 0
  },
  {
    id: "124e1b362d6ead",
    category: "Pencils",
    name: "Apple Pencil",
    seller: "Apple",
    price: 400,
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
    name: "Apple Pencil",
    seller: "Apple",
    price: 400,
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
    name: "Apple Pencil",
    seller: "Apple",
    price: 400,
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
    name: "Apple Pencil",
    seller: "Apple",
    price: 400,
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
    name: "Apple Pencil",
    seller: "Apple",
    price: 400,
    stock: 20,
    ratings: 4,
    ratingsCount: 3725,
    img: image15,
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
