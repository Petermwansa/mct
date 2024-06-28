import React from 'react';

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
    id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
    category: "laptops",
    name: "MacBook Pro 2023",
    seller: "Apple",
    price: 920,
    stock: 20,
    ratings: 4,
    ratingsCount: 3725,
    img: image1,
    shipping: 1,
    quantity: 0
  },
  {
    id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
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
    id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
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
    id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
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
    id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
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
    id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
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
    id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
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
    id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
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
    id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
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
    id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
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
    id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
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
    id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
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
    id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
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
    id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
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
    id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
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
    id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
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


const ShopCategory = ({filterItem, setItem, menuItems, setProducts, selectedCategory}) => {
  
    return (
    <>
      <div className='widget-header'>
        <h5 className='ms-2'>All Categories</h5>
      </div>
      <div className=''>
        <button 
          onClick={() => setProducts(Data)}  
          className={`m-2 ${selectedCategory === 'All' ? 'bg-warning' : ''}`}
          >
          All
        </button>
        {
          menuItems.map((val, id) => {
            return (
              <button 
                className={`m-2 ${selectedCategory === val ? 'bg-warning' : ''}`} 
                key={id}
                onClick={() => filterItem(val)}
              >
                {val}
              </button>
            )
          })
        }
      </div>
    </>
  )
}

export default ShopCategory
