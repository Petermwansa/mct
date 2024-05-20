import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.jpg';


const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);


    //here we add the event listener
    window.addEventListener("scroll", () => {
        if(window.scrollY > 200) {
            setHeaderFixed(true);
        } else {
            setHeaderFixed(false);
        }
    })

  return (
    <div>
      <header className={`header-section style-4 ${headerFixed ? 'header-fixed fadeInUp' : ''}`}>
        {/* the header top  */}
        <div className={`header-top d-md-none ${socialToggle ? 'open' : ''}`}>
            <div className='container'>
                <div className='header-top-area'>
                    <Link to='/signup' className='lab-btn me-3'><span>Create Account</span></Link>
                    <Link to='/login' className=''>Login</Link>
                </div>
            </div>
        </div>
        {/* the header top  */}
        <div className='header-bottom'>
            <div className='container'>
                <div className='header-wrapper'>
                {/* logo */}
                <div className='logo-search-acte'>
                    <div className='logo'>
                        <Link to={'/'}>
                            <img src={logo} alt='logo' className='img-responsive'/>
                        </Link>
                    </div>
                </div>
                <div className='menu-area'>
                    <div className='menu'>
                        <ul className={`lab-ul ${menuToggle ? 'active' : ''}`}>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/shop'>Shop</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>

                    {/* sign in and login  */}

                    <Link to='/sign-up' className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
                    <Link to='/login' className='d-none d-md-block'>Login</Link>

                    {/* the menu toggler */}
                    <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? 'active' : ''}` }>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    {/* the social toggler  */}
                    <div onClick={() => setSocialToggle(!socialToggle)} className='ellepsis-bar d-md-none'>
                        <i className="icofont-info"></i>
                    </div>

                </div>

                </div>
            </div>
        </div>

      </header>
    </div>
  )
}

export default Navbar
