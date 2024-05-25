import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../assets/images/clients/avater.jpg';


const title = 'Hundreds of Customers';

const desc = "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

const clientsList = [
{
    imgUrl: image1,
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
},
{
    imgUrl: image1,
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
},
{
    imgUrl: image1,
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
},
{
    imgUrl: image1,
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
},
{
    imgUrl: image1,
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
},
{
    imgUrl: image1,
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
},
{
    imgUrl: image1,
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
},
]

const Locations = () => {
  return (
    <div className='clients-section style-2 padding-tb'>
      <div className='container'>
        <div className='section-header text-center'>
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>

        {/* the main content  */}
        <div className='section-wrapper'>
            <div className='clients'>
                {
                    clientsList.map((val, i) => (
                        <div key={i} className='client-list'>
                            <Link to='/signup' className='client-content'>
                                <span>{val.text}</span>
                            </Link>
                            {/* the images are for the clints thumbnails according to location but have been commented out  */}
                            {/* <div className='client-thumb'>
                                <img src={val.imgUrl} alt='the location' />
                            </div> */}
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Locations
