import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../assets/images/category/daniel-romero-0D4mQTdGNHs-unsplash.jpg';
import image2 from '../../assets/images/category/laptops.jpeg';
import image3 from '../../assets/images/category/tablets.jpeg';
import image4 from '../../assets/images/category/watches.jpeg';
import image5 from '../../assets/images/category/airpods.jpeg';
import image6 from '../../assets/images/category/headsets.jpeg';
import image7 from '../../assets/images/pencils/2024-05-27 13.31.55.jpg';


const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
{
    id: 'adfefbdbgbdfbjbjbvdsfbv',
    imgUrl: image1,
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-brand-windows',
    title: 'Phones',
},
{
    id: 'adfefbdfbvdsfjbjbbv',
    imgUrl: image2,
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-brand-windows',
    title: 'Laptops',
},
{
    id: 'adfefbdbgjbjbjbdfdsghcvdjhbvdsfbv',
    imgUrl: image3,
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-brand-windows',
    title: 'Tablets',
},
{
    id: 'adfefbdbgjbjbj23454kbdfbvdsfbv',
    imgUrl: image4,
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-brand-windows',
    title: 'Watches',
},
{
    id: 'adfefbdbgbdfjbbjbbvdscdkjcnb34sfbv',
    imgUrl: image5,
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-brand-windows',
    title: 'AirPods',
},
{
    id: 'adfefbdbgbdfjjjjjbvd35vfvsfbv',
    imgUrl: image6,
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-brand-windows',
    title: 'HeadSets',
},
{
    id: 'adfefbdhhbgbdfbbbbuuuvdscdkjcnb34sfbv',
    imgUrl: image7,
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-brand-windows',
    title: 'Pencils',
}
]



const HomeCategory = () => {
  return (
    <div className='category-section style-4 padding-tb'>
      <div className='container'>
      {/* for the section header  */}
        <div className='section-header text-center'>
            <span className='subtitle'>{subTitle}</span>
            <h2 className='title'>{title}</h2>
        </div>
      {/* section card  */}
        <div className='section-wrapper'>
            <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1'>
                {categoryList.map((val) => (
                    <div key={val.id} className='col'>
                        <Link to='/shop' className='category-item'>
                            <div className='category-inner'>
                                <div className='category-thumb' >
                                {/* the image thumbnail  */}
                                    <img src={val.imgUrl} alt='the product' />
                                </div>
                                {/* content  */}
                                <div className='category-content'>
                                    <div className='cate-icon'>
                                        <i className={val.iconName}></i>
                                    </div>
                                    <Link to='/shop'>
                                            <h6>{val.title}</h6>
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className='text-center mt-5'>
                <Link to='/shop' className='lab-btn'><span>{btnText}</span></Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCategory
