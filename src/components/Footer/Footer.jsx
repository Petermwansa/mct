import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"



const title = "About MCT";
const desc = "MCTELECOMS: Inspired by you, for you!";
const ItemTitle = "Categories";
const quickTitle = "Quick Links";

const addressList = [
    {
        iconName: 'icofont-google-map',
        text: ' Lusaka Zambia.',
    },
    {
        iconName: 'icofont-phone',
        text: ' +7(904) 640 42 52',
    },
    {
        iconName: 'icofont-envelope',
        text: ' mctelecoms22@gmail.com',
    },
]

const socialList = [
    // {
    //     iconName: 'icofont-facebook',
    //     siteLink: '#',
    //     className: 'facebook',
    // },
    {
        iconName: 'icofont-instagram',
        siteLink: 'https://www.instagram.com/mc_telecoms?igsh=ODJyYW1vaHZoOHh5',
        className: 'instagram',
    },
]

const ItemList = [
    {
        text: 'All Products',
        link: '/shop',
    },
    {
        text: 'Shop',
        link: '/shop',
    },
    {
        text: 'About',
        link: '/about',
    }
]

const quickList = [
    {
        text: 'Home',
        link: '/',
    },
    {
        text: 'Contact Us',
        link: '/contact',
    },
    {
        text: 'Terms of Use',
        link: '/terms',
    },
]

const year = new Date().getFullYear();

const footerbottomList = [
    {
        text: 'About Us',
        link: '/about',
    },
    {
        text: 'Terms and Conditions',
        link: '/terms',
    },
]

const Footer = () => {
  return (
    <footer className='style-2 footer'>
      <div className='footer-top dark-view padding-tb'>
        <div className='container'>
            <div className='row g-4 row-cols-xl-3 row-cols-sm-2 row-cols-1 justify-content-center'>
                <div className='col'>
                    <div className='footer-item our-address'>
                        <div className='footer-inner'>
                            <div className='footer-content'>
                                <div className='title'>
                                    <h4 className=''>{title}</h4>
                                </div>
                                <div className='content'>
                                    <p>{desc}</p>
                                    <ul className='lab-ul office-address'>
                                        {
                                            addressList.map((val, i) => (
                                                <li key={i}>
                                                    <i className={val.iconName}>{val.text}</i>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <ul className='lab-ul social-icons'>
                                        {
                                            socialList.map((val, i) => (
                                                <li key={i}>
                                                    <a href={val.siteLink} className={val.className}><i className={val.iconName}>{val.text}</i></a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='footer-item our-address'>
                        <div className='footer-inner'>
                            <div className='footer-content'>
                                <div className='title'>
                                    <h4 className=''>{quickTitle}</h4>
                                </div>
                                <div className='content'>
                                    <ul className='lab-ul office-address'>
                                        {
                                            quickList.map((val, i) => (
                                                <li key={i}>
                                                    <a href={val.link}>{val.text}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='footer-item our-address'>
                        <div className='footer-inner'>
                            <div className='footer-content'>
                                <div className='title'>
                                    <h4 className=''>{ItemTitle}</h4>
                                </div>
                                <div className='content'>
                                    <ul className='lab-ul office-address'>
                                        {
                                            ItemList.map((val, i) => (
                                                <li key={i}>
                                                    <a href={val.link}>{val.text}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='container'>
           <div className='section-wrapper'>
             <p>{year}<Link to='/'>MCT</Link>Powered by <a href='https://petermwansa.tech/' target='_blank' rel="noreferrer">Rockie Tech</a></p>
             <div className='footer-bottom-list'>
                {
                    footerbottomList.map((val, i) => (
                        <a href={val.link} key={i}>{val.text}</a>
                    ))
                }
             </div>
           </div>
         </div>
      </div>
    </footer>
  )
}

export default Footer
