import React from 'react'
import PageHeader from '../PageHeader/PageHeader';

import image1 from '../../assets/images/icon/01.png'
import image2 from '../../assets/images/icon/02.png'
import image3 from '../../assets/images/icon/03.png'
import image4 from '../../assets/images/icon/04.png'
import GoogleMap from './GoogleMap';

const subTitle = "Get in touch with us";
const title = "We're Always At Your Service";
const conSubTitle = "Get in touch with Contact us";
const conTitle = "Fill The Form Below So We Can Get To Know You And Your Needs Better.";
const btnText = "Send our Message";

const contactList = [
    {
    id: 1,
    imgUrl: image1,
    imgAlt: "contact icon",
    title: "Office Address",
    desc: "1201 park street, Fifth Avenue",
    },
    {
    id: 2,  
    imgUrl: image2,
    imgAlt: "contact icon",
    title: "Phone number",
    desc: "+22698 745 632,02 982 745",
    },
    {
    id: 3,
    imgUrl: image3,
    imgAlt: "contact icon",
    title: "Send email",
    desc: "admin@shopcart.com",
    },
    {
    id: 4,
    imgUrl: image4,
    imgAlt: "contact icon",
    title: "Our website",
    desc: "www.shopcart.com",
    },
];

const Contact = () => {
  return (
    <div>
      <PageHeader title='Get In Touch' curPage={"Contact Us"}/>
      <div className='map-address-section padding-tb section-bg'>
        <div className='container'>
            <div className='section-header text-center'>
                <span className='subtitle'>{subTitle}</span>
                <h2 className='title'>{title}</h2>
            </div>
            <div className='section-wrapper'>
                <div className='row flex-row-reverse'>
                    <div className='col-xl-4 col-lg-5 col-12'>
                        <div className='contact-wrapper'>
                            {
                                contactList.map(val => (
                                    <div key={val.id} className='contact-item'>
                                        <div className='contact-thumb'>
                                            <img src={val.imgUrl} alt='the icon' />
                                        </div>
                                        <div className='contact-content'>
                                            <h6 className='title'>{val.title}</h6>
                                            <p>{val.desc}</p>
                                        </div>

                                    </div>
                                )) 
                            }
                        </div>
                    </div>

                    {/* the google map  */}
                    <div className='col-xl-8 col-lg-7 col-12'>
                        <GoogleMap />
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* the contact form section  */}
      <div className='contact-section padding-tb'>
        <div className='container'>
            <div className='section-header text-center'>
                <span className='subtitle'>{conSubTitle}</span>
                <h2 className='title'>{conTitle}</h2>
            </div>

            <div className='section-wrapper'>
                <form className='contact-form'>
                    <div className='form-group'>
                        <input type='text' name='name' id='name' placeholder='Your Name' required />
                    </div>
                    <div className='form-group'>
                        <input type='email' name='email' id='email' placeholder='Your Email' required />
                    </div>
                    <div className='form-group'>
                        <input type='number' name='phone' id='phone' placeholder='Phone Number' required />
                    </div>
                    <div className='form-group'>
                        <input type='text' name='subject' id='subject' placeholder='Subject' required />
                    </div>
                    <div className='form-group w-100'>
                        <textarea name='message' id='message' rows='8' placeholder='Enter your messahe here...'></textarea>
                    </div>
                    <div className='form-group w-100 text-center'>
                        <button className='lab-btn'>
                            <span>{btnText}</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
