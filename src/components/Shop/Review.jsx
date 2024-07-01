import React, { useState } from 'react'

import image1 from '../../assets/images/instructor/01.jpg';
import image2 from '../../assets/images/instructor/02.jpg';
import image3 from '../../assets/images/instructor/03.jpg';
import image4 from '../../assets/images/instructor/04.jpg';
import image5 from '../../assets/images/phones/iphone-15.jpeg';
import Ratings from '../Ratings/Ratings';

const reviewtitle = "Add a Review";

let ReviewList = [
    {
      imgUrl: image1,
      imgAlt: "Client thumb",
      name: "Ganelon Boileau",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: image2,
      imgAlt: "Client thumb",
      name: "Morgana Cailot",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: image3,
      imgAlt: "Client thumb",
      name: "Telford Bois",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: image4,
      imgAlt: "Client thumb",
      name: "Cher Daviau",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
  ];




const Review = () => {

    const [reviewShow, setReviewShow] = useState(true);

  return (
    <>
      <ul className={`review-nav lab-ul ${reviewShow ? 'RevActive' : 'DescActive'}`}>
        <li className='desc'm onClick={() => setReviewShow(!reviewShow)}>Descriptions</li>
        <li className='rev' onClick={() => setReviewShow(!reviewShow)}>Reviews</li>
      </ul>

      <div className={`review-content ${reviewShow ? 'review-content-show' : 'description-show'}`}>
        <div className='review-showing'>
            <ul className='content lab-ul'>
                {
                    ReviewList.map((review, i) => (
                        <li key={i}>
                            <div className='post-thumb'>
                                <img src={review.imgUrl} alt='' />
                            </div>
                            <div className='post-content'>
                                <div className='entry-meta'>
                                    <a href='#'>{review.name}</a>
                                    <p>{review.date}</p>
                                </div>
                            </div>
                            <div className='entry-content'>
                                <p>{review.desc}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>

            {/* for the reviews of the product  */}
            <div className='client-review'>
                <div className='review-form'>
                    <div className='review-title'>
                        <h5>{reviewtitle}</h5>
                    </div>

                    <form action='action' className='row'>
                        <div className='col-md-4 col-12'>
                            <input type='text' name='name' id='name' placeholder='Full name'/>
                        </div>
                        <div className='col-md-4 col-12'>
                            <input type='email' name='email' id='email' placeholder='Your Email'/>
                        </div>
                        <div className='col-md-4 col-12'>
                            <div className='rating'>
                                <span className='me-3'>Your Rating</span>
                                <Ratings />
                            </div>
                        </div>
                        <div className='col-md-12 col-12'>
                            <textarea name='message' id='message' rows='8' placeholder='Type your review here'></textarea>
                        </div>
                        <div className='col-12'>
                            <button type='submit' className='default-button'>
                                <span>Submit Review</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


        {/* here we add the product description  */}
        <div className='description'>
            <p>
                Meet the biggest and heaviest phone Apple has made so far - the iPhone 12 Pro Max. 
                But while its size might be extra-large, the 12 Pro Max is in no way bulky. 
                The new design and 7mm slim profile make this huge iPhone one exquisite-looking 
                piece of technology that's a real pleasure to use and carry around.
                Meet the biggest and heaviest phone Apple has made so far - the iPhone 12 Pro Max. 
                But while its size might be extra-large, the 12 Pro Max is in no way bulky. 
                The new design and 7mm slim profile make this huge iPhone one exquisite-looking 
                piece of technology that's a real pleasure to use and carry around.
                piece of technology that's a real pleasure to use and carry around.
                Meet the biggest and heaviest phone Apple has made so far - the iPhone 12 Pro Max. 
                But while its size might be extra-large, the 12 Pro Max is in no way bulky. 
            </p>
            <div className='post-item'>
                <div className='post-thumb'>
                    <img src={image5} alt='the phone' />
                </div>
                <div className='post-content'>
                    <ul className='lab-ul'>
                        <li>The new design and 7mm slim profile make this huge iPhone one exquisite</li>
                        <li>The new design and 7mm slim profile make this huge iPhone one exquisite</li>
                        <li>The new design and 7mm slim profile make this huge iPhone one exquisite</li>
                        <li>The new design and 7mm slim profile make this huge iPhone one exquisite</li>
                        <li>The new design and 7mm slim profile make this huge iPhone one exquisite</li>
                        <li>The new design and 7mm slim profile make this huge iPhone one exquisite</li>
                    </ul>
                </div>
            </div>
            <p>
                Meet the biggest and heaviest phone Apple has made so far - the iPhone 12 Pro Max. 
                But while its size might be extra-large, the 12 Pro Max is in no way bulky. 
                The new design and 7mm slim profile make this huge iPhone one exquisite-looking 
                piece of technology that's a real pleasure to use and carry around.
            </p>
        </div>
      </div>
    </>

  )
}

export default Review
