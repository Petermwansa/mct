import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';





const title = "Signup";
const socialTitle = "Signup With Social Media";
const buttonText = "Signup Now";



const Signup = () => {
  const [errMessage, setErrMessage] = useState('');

  const { signUpWithGmail, createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleRegister = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };


  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    // console.log(email, password, confirmPassword);

    if (password !== confirmPassword) {
      setErrMessage("Passwords do not match!");
    } else {
      setErrMessage("");
      createUser(email, password).then((userCredential) => {
        const user = userCredential.user;
        alert("Account created successfully");
        navigate(from, {replace: true});
      }).catch((error => {
        console.log(error.message);
        alert(`${error.message}`);
      }))
    }
  }


  return (
    <div className='login-section padding-tb section-bg'>
      <div className='container'>
        <div className='account-wrapper'>
          <h3 className='title'>{title}</h3>
          <form className='account-form' onSubmit={handleSignup}>
              <div className='form-group'>
                <input type='name' name='name' id='name' placeholder='Full Name' required />
              </div>
              <div className='form-group'>
                <input type='email' name='email' id='email' placeholder='Email Address' required />
              </div>
              <div className='form-group'>
                <input type='password' name='password' id='password' placeholder='Password' required />
              </div>
              <div className='form-group'>
                <input type='password' name='confirmPassword' id='confirmPassword' placeholder='Confirm password' required />
              </div>
              <div>
                {
                  errMessage && (
                    <div className='error-message text-danger mb-2'>{errMessage}</div>
                  )
                }
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
              Already have an account? <Link to='/login'>Login</Link>
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
              <li>
                <a href='/' className='facebook'><i className='icofont-facebook'></i></a>
              </li>
              <li>
                <a href='/' className='instagram'><i className='icofont-instagram'></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup



