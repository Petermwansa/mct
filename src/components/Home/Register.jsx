import React from 'react';

const subTitle = "Never Miss Out"
const title = (
    <h2 className='title'>Join Our Newsletter to be update or all our <span>sales</span> and latest products</h2>
)
const desc = 'Inspired by you. For You!';


const Register = () => {
  return (
    <section className='register-section padding-tb pb-0'>
      <div className='container'>
        <div className='row g-4 row-cols-lg-2 row-cols-1 align-items-center'>
            <div className='col'>
                <div className='section-header'>
                    <span className='subtitle'>{subTitle}</span>
                    {title}
                    <p>{desc}</p>
                </div>
            </div>
            <div className='col'>
                <div className='section-wrapper'>
                    <h4>Newsletter</h4>
                    <form className='register-form'>
                        <input type='text' name='name' id='name' placeholder='Username' className='reg-input' />
                        <input type='email' name='email' id='email' placeholder='Email' className='reg-input' />
                        <button type='submit' className='lab-btn'>
                            Subscribe Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Register
