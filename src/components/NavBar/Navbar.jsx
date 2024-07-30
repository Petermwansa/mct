import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.jpg';
import { AuthContext } from '../../context/AuthProvider';
import './Navbar.css'


const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);
    const [logged, setLogged] = useState(false);


    const { theUser, user, logout } = useContext(AuthContext)


    useEffect(() => {
        if (theUser !== null) {
            setLogged(true);
        } else if(theUser === null) {
            setLogged(false);
        }
    }, [theUser])


    console.log(logged);


    const handleLogout = () => {
        logout().then(() => {
            console.log('logged out the user');
            alert("Logout Successful")
        }).catch((error) => {
            // An error happened.
        });
    }

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
      <header className={`header-section style-4 ${headerFixed ? 'header-fixed fadeInUp' : " "}`}>

        {/* the header top  */}
        <div className='header-bottom'>
            <div className='container'>
                <div className='header-wrapper'>
                    <div className='logo-search-acte'>
                        <div className='logo'>
                            <Link to={'/'}>
                                <img src={logo} alt='logo' className='logo'/>
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
                                {
                                    logged && (
                                        <li>
                                            <button onClick={handleLogout} className='lab-btn '>Logout</button>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>

                        {/* sign in and login  */}


                        {
                            !logged && (
                                <Link to='/login' className='lab-btn '>Login</Link>
                            )
                        }
                        {
                            logged && (
                                <>
                                    <Link to='/cart-page' className='lab-btn '><i className='icofont-cart-alt'></i></Link>
                                </>


                            )
                        }

                        {/* the menu toggler */}
                        <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? 'active' : ''}` }>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>



                    </div>

                </div>
            </div>
        </div>

      </header>
    </div>
  )
}

export default Navbar;
