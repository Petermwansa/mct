import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import PageHeader from '../PageHeader/PageHeader';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay} from 'swiper/modules'


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
import ProductDisplay from './ProductDisplay';
import Review from './Review';





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
      quantity: 0,
      description: "Meet the biggest and heaviest phone Apple has made so far - the iPhone 12 Pro Max. But while its size might be extra-large, the 12 Pro Max is in no way bulky. The new design and 7mm slim profile make this huge iPhone one exquisite-looking piece of technology that's a real pleasure to use and carry around."
    },
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
      quantity: 0,
      description: "Meet the biggest and heaviest phone Apple has made so far - the iPhone 12 Pro Max. But while its size might be extra-large, the 12 Pro Max is in no way bulky. The new design and 7mm slim profile make this huge iPhone one exquisite-looking piece of technology that's a real pleasure to use and carry around."
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
      quantity: 0,
      description: "Meet the biggest and heaviest phone Apple has made so far - the iPhone 12 Pro Max. But while its size might be extra-large, the 12 Pro Max is in no way bulky. The new design and 7mm slim profile make this huge iPhone one exquisite-looking piece of technology that's a real pleasure to use and carry around."
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
      quantity: 0,
      description: "Meet the biggest and heaviest phone Apple has made so far - the iPhone 12 Pro Max. But while its size might be extra-large, the 12 Pro Max is in no way bulky. The new design and 7mm slim profile make this huge iPhone one exquisite-looking piece of technology that's a real pleasure to use and carry around."
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
      quantity: 0,
      description: "Meet the biggest and heaviest phone Apple has made so far - the iPhone 12 Pro Max. But while its size might be extra-large, the 12 Pro Max is in no way bulky. The new design and 7mm slim profile make this huge iPhone one exquisite-looking piece of technology that's a real pleasure to use and carry around."
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
      quantity: 0,
      description: "Meet the biggest and heaviest phone Apple has made so far - the iPhone 12 Pro Max. But while its size might be extra-large, the 12 Pro Max is in no way bulky. The new design and 7mm slim profile make this huge iPhone one exquisite-looking piece of technology that's a real pleasure to use and carry around.",
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
      quantity: 0,
      description: "Meet the biggest and heaviest phone Apple has made so far - the iPhone 12 Pro Max. But while its size might be extra-large, the 12 Pro Max is in no way bulky. The new design and 7mm slim profile make this huge iPhone one exquisite-looking piece of technology that's a real pleasure to use and carry around."
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
      quantity: 0,
      description: "Meet the biggest and heaviest phone Apple has made so far - the iPhone 12 Pro Max. But while its size might be extra-large, the 12 Pro Max is in no way bulky. The new design and 7mm slim profile make this huge iPhone one exquisite-looking piece of technology that's a real pleasure to use and carry around."
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
      quantity: 0,
      description: "Meet the biggest and heaviest phone Apple has made so far - the iPhone 12 Pro Max. But while its size might be extra-large, the 12 Pro Max is in no way bulky. The new design and 7mm slim profile make this huge iPhone one exquisite-looking piece of technology that's a real pleasure to use and carry around."
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
      quantity: 0,
      description: "Meet the biggest and heaviest phone Apple has made so far - the iPhone 12 Pro Max. But while its size might be extra-large, the 12 Pro Max is in no way bulky. The new design and 7mm slim profile make this huge iPhone one exquisite-looking piece of technology that's a real pleasure to use and carry around."
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
      quantity: 0,
      description: "Meet the biggest and heaviest phone Apple has made so far - the iPhone 12 Pro Max. But while its size might be extra-large, the 12 Pro Max is in no way bulky. The new design and 7mm slim profile make this huge iPhone one exquisite-looking piece of technology that's a real pleasure to use and carry around."
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
      quantity: 0,
      description: "Meet the biggest and heaviest phone Apple has made so far - the iPhone 12 Pro Max. But while its size might be extra-large, the 12 Pro Max is in no way bulky. The new design and 7mm slim profile make this huge iPhone one exquisite-looking piece of technology that's a real pleasure to use and carry around."
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
      quantity: 0,
      description: "Meet the biggest and heaviest phone Apple has made so far - the iPhone 12 Pro Max. But while its size might be extra-large, the 12 Pro Max is in no way bulky. The new design and 7mm slim profile make this huge iPhone one exquisite-looking piece of technology that's a real pleasure to use and carry around."
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
      quantity: 0,
      description: "Meet the biggest and heaviest phone Apple has made so far - the iPhone 12 Pro Max. But while its size might be extra-large, the 12 Pro Max is in no way bulky. The new design and 7mm slim profile make this huge iPhone one exquisite-looking piece of technology that's a real pleasure to use and carry around."

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
      quantity: 0,
      description: "Meet the biggest and heaviest phone Apple has made so far - the iPhone 12 Pro Max. But while its size might be extra-large, the 12 Pro Max is in no way bulky. The new design and 7mm slim profile make this huge iPhone one exquisite-looking piece of technology that's a real pleasure to use and carry around."
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
      quantity: 0,
      description: "Meet the biggest and heaviest phone Apple has made so far - the iPhone 12 Pro Max. But while its size might be extra-large, the 12 Pro Max is in no way bulky. The new design and 7mm slim profile make this huge iPhone one exquisite-looking piece of technology that's a real pleasure to use and carry around."
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
      <PageHeader title={"Our Shop Single"} curPage={"Home / Shop / Single Product"} />

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
                        <div className='review'>
                            <Review />
                        </div>
                    </article>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
