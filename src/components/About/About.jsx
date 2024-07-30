import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import logo from '../../assets/images/logo/logo.jpg';
import './About.css'
import { Helmet } from 'react-helmet';
import { Col, Row } from 'react-bootstrap';


const subTitle = "About MCT";
const title = "Experience the world of technology with us";
const desc = "At MCT we value our clients and our goal is to provide our clients with the products that they need with value for their money. We always strive to provide our clients with what they need and no matter where they live by making sure that their purchase reach them safely and in good hands";

const experience = "Grab a gadget with us";

const aboutList = [
    {
    id: 1,
    title: 'Quality Products',
    desc: 'We offer and original products',
    },
    {
    id: 2,
    title: 'Affordable Prices',
    desc: 'We offer all our goods at competitive prices on the market',
    },
    {
    id: 3,
    title: 'Fast Delivery',
    desc: 'We strive to make sure that the products reach our esteemed clients in the fastest period of time as possible',
    },
]



const About = () => {
  return (
    <div className='about-page'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>MTC - About Page</title>
                <link rel="canonical" href="#" />
            </Helmet>
      <PageHeader title="MTC" curPage={'About'}/>
      <div className='about-section style-3 padding-tb section-bg'>
        <div className='row justify-content-center row-cols-xl-2 align-items-center'>
            <Row>
                <Row>
                    <div className='col'>
                    <div className='about-left'>
                        <div className='about-thumb'>
                            <img src={logo} alt='the logo' />
                        </div>
                    </div>
                </div>
                </Row>

                <Row>
                    <div className='col'>
                        <div className='about-right'>
                            <div className='section-header'>
                                <span className='subtitle'>
                                    {subTitle}
                                </span>
                                <h2 className='title'>{title}</h2>
                                <p>{desc}</p>
                            </div>
                            <div className='sectgion-wrapper'>
                                <ul className='lab-ul'>
                                    {
                                        aboutList.map((val) => (
                                            <li key={val.id}>
                                                <h5>{val.title}</h5>
                                                <p>{val.desc}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div> 
                </Row>
            </Row>

        </div>

      </div>
    </div>
  )
}

export default About
