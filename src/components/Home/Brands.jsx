import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
 
// import required modules
import { Autoplay } from 'swiper/modules';



import image1 from '../../assets/images/sponsor/01.png';
import image2 from '../../assets/images/sponsor/apple.png';
import image3 from '../../assets/images/sponsor/03.png';
import image4 from '../../assets/images/sponsor/04.png';


const title = 'Brands';
const desc = 'We offer products from the world\'s top brands';



const sponsorList = [
    {
        imgUrl: image1,
    },
    {
        imgUrl: image2,
    },
    {
        imgUrl: image3,
    },
    {
        imgUrl: image4,
    }

    ];

const Brands = () => {
  return (
    <div className='sponsor-section section-bg'>
      <div className='container'>
        <div className='section-header text-center'>
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
        <div className='section-wrapper'>
            <div className='sponsor-slider'>
            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                autoplay={
                    {
                        delay: 1000,
                        disableOnInteraction: false
                    }
                }
                breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {
                    sponsorList.map((val, i) => (
                        <SwiperSlide key={i}>
                            <div className='sponsor-item'>
                                <div className='sponsor-thumb'>
                                    <img src={val.imgUrl} alt='a logo of a brand' />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Brands
