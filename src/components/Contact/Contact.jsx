import React, { useRef, useState } from 'react'
import PageHeader from '../PageHeader/PageHeader';
import './Contact.css';
import emailjs from '@emailjs/browser';


import image1 from '../../assets/images/icon/01.png'
import image2 from '../../assets/images/icon/02.png'
import image3 from '../../assets/images/icon/03.png'
import image4 from '../../assets/images/icon/04.png'
import GoogleMap from './GoogleMap';
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet';

const subTitle = "Get in touch with us";
const title = "We're Always At Your Service";
const conSubTitle = "Get in touch with Contact us";
const conTitle = "Fill The Form Below So We Can Get To Know You And Your Needs Better.";
const btnText = "Send Your Message";

const contactList = [
    {
    id: 1,
    imgUrl: image1,
    imgAlt: "contact icon",
    title: "Office Address",
    desc: "Lusaka",
    },
    {
    id: 2,  
    imgUrl: image2,
    imgAlt: "contact icon",
    title: "Phone number",
    desc: "+7(904) 640 42 52",
    },
    {
    id: 3,
    imgUrl: image3,
    imgAlt: "contact icon",
    title: "Send email",
    desc: "mctelecoms22@gmail.com",
    },
    {
    id: 4,
    imgUrl: image4,
    imgAlt: "contact icon",
    title: "Our website",
    desc: "www.mctelecoms.org",
    },
];



const Contact = () => {

    const form = useRef();
    const navigate = useNavigate();

    // the hook to get hold of the entered data 
    const [input, setInput] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    })


    // the function for submiting 
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(input);
    }




    // for the form submition 

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jumtarb', 'template_fh4ujll', form.current, {
            publicKey: 'wsJLpkzBqdCpoWlny',
        })
        .then(
            () => {
                alert("Your message has been sent successfully! We will get back to you as soon as possible");
                navigate('/#banner')
            },
            (error) => {
                console.log('Failed to send the message...', error.text);
            },
        );
    }


  return (
    <div className='contact-page'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>MTC - Contact Us</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
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
                <form  ref={form} onSubmit={sendEmail} className='contact-form'>
                    <div className='form-group'>
                        <input type='text' onChange={(e) => setInput({ ...input, name: e.target.value})} value={input.name} name='from_name' id='name' placeholder='Your Name' required />
                    </div>
                    <div className='form-group'>
                        <input type='email' onChange={(e) => setInput({ ...input, email: e.target.value})} value={input.email} name='from_email' id='email' placeholder='Your Email' required />
                    </div>
                    <div className='form-group'>
                        <input type='number' onChange={(e) => setInput({ ...input, phone: e.target.value})} value={input.phone} name='from_phone' id='phone' placeholder='Phone Number' required />
                    </div>
                    <div className='form-group'>
                        <input type='text' onChange={(e) => setInput({ ...input, subject: e.target.value})} value={input.subject} name='from_subject' id='subject' placeholder='Subject' required />
                    </div>
                    <div className='form-group w-100'>
                        <textarea name='message' onChange={(e) => setInput({ ...input, message: e.target.value})} value={input.message} id='message' rows='8' placeholder='Enter your message here...'></textarea>
                    </div>
                    <div className='form-group w-100 text-center'>
                        <button  type='submit' value="Send" className='lab-btn'>
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
