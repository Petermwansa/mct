import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import PageHeader from '../PageHeader/PageHeader';
import ProductDisplay from './ProductDisplay';
import Review from './Review';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay} from 'swiper/modules'

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
      price: 748,
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
      name: "Apple watch SE 2023",
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
      category: "Watch",
      name: "Apple Watch SE",
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
      category: "tablets",
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
    



const SingleProduct = () => {

    const [product, setProduct] = useState([]);
    const { id } = useParams();


    // useEffect(() => {
    //     fetch('/src/products.json').then(res => res.json()).then(data => setProduct(data))
    // }, [])

    const result = Data.filter((p) => p.id === id);
    


  return (
    <div>
      <PageHeader title={"My Shopping"} curPage={"Home / Shop / Single Product"} />

      <div className='shop-single padding-tb aside-bg'>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-8 col-12'>
                    <article>
                        <div className='product-details'>
                            <div className='row align-items-center'>
                                <div className='col-md-6 col-12'>
                                    <div className='product-thumb'>
                                        <div className='swiper-container pro-single-top'>
                                        <Swiper 
                                            spaceBetween={30}
                                            slidesPerView={1}
                                            loop={'true'}
                                            autoplay={{
                                                delay: 2000,
                                                disableOnInteraction: false
                                            }}
                                            modules={[Autoplay]}
                                            navigation={{
                                                prevEl: '.pro-single-prev',
                                                nextEl: '.pro-single-next',

                                            }}
                                            className="mySwiper"
                                        >
                                            {
                                                result.map((item, i) => (
                                                    <SwiperSlide key={i}>
                                                        <div className='single-thumb'>
                                                            <img src={item.img} alt='' />
                                                        </div>
                                                    </SwiperSlide>
                                                ))
                                            }
                                        </Swiper>
                                        <div className='pro-single-prev'>
                                            <i className='icofont-rounded-right'></i>
                                        </div>
                                        <div className='pro-single-next'>
                                            <i className='icofont-rounded-left'></i>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 col-12'>
                                    <div className='post-content'>
                                        <div>
                                            {
                                                result.map((item, i) => (
                                                    <ProductDisplay key={item.id} item={item}/>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className='review'>
                            <Review />
                        </div> */}
                    </article>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
