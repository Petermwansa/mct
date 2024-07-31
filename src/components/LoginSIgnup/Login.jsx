import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


const title = "Login";
const socialTitle = "Login With Google";
const buttonText = "Login Now";

const socialList = [
  {
      iconName: 'icofont-facebook',
      siteLink: '#',
      className: 'facebook',
  },
  {
      iconName: 'icofont-instagram',
      siteLink: '#',
      className: 'instagram',
  }
]

const Login = () => {

  const [errMessage, setErrMessage] = useState('');
  const { signUpWithGmail, login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password).then((result) => {
      const user = result.user;
      alert('Login Successful')
      navigate(from, {replace: true})
    }).catch(error => {
      const errMsg = error.message;
      setErrMessage("Please provide a valid email and password")
    })
  }

  const handleRegister = () => {
    signUpWithGmail().then(result => {
      const user = result.user;
      navigate(from, {replace: true})
    }).catch(error => {
      const errorMessage = error.message;
      setErrMessage("The signup was not successful. Please provide valid details")
    })
  }


  return (
    <div>
      <div className='login-section padding-tb section-bg'>
        <div className='container'>
          <div className='account-wrapper'>
            <h3 className='title'>{title}</h3>
            <form className='account-form' onSubmit={handleLogin}>
                <div className='form-group'>
                  <input type='email' name='email' id='email' placeholder='Email Address' required />
                </div>
                <div className='form-group'>
                  <input type='password' name='password' id='password' placeholder='Password' required />
                </div>
                <div>
                  {
                    errMessage && (
                      <div className='error-message text-danger mb-2'>{errMessage}</div>
                    )
                  }
                </div>
                <div className='form-group'>
                  <div className='d-flex justify-content-between flex-wrap pt-sm-2'>
                    <div className='checkgroup'>
                      <input type='checkbox' name='remember' id='remember' />
                      <label htmlFor='remember'>Remember Me</label>
                    </div>
                    {/* <Link to='/forgetpass'>Forget Password?</Link> */}
                  </div>
                </div>
                <div className='form-group'>
                  <button type='submit' className='d-block lab-btn'>
                    <span>{buttonText}</span>
                  </button>
                </div>
            </form>

            {/* the account bottom  */}
            <div className='account-bottom'>
              <span className='d-block cate pt-10'>
                Don't have an account? <Link to='/signup'>Sign Up</Link>
              </span>
              <span className='or'>
                <span>or</span>
              </span>

              {/* the socail logins  */}
              <h5 className='subtitle'>{socialTitle}</h5>
              <ul className='lab-ul social-icons justify-content-center'>
                <li>
                  <button className='github' onClick={handleRegister}><i className='icofont-github'></i></button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
