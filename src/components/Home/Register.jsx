import React, { useState } from 'react';
import { doc, getFirestore, setDoc, serverTimestamp, getDoc} from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import { FieldValue } from 'firebase/firestore';



const subTitle = "Never Miss Out"
const title = (
    <h2 className='title'>Join Our Newsletter to be update or all our <span>sales</span> and latest products</h2>
)
const desc = 'Inspired by you. For You!';


const Register = () => {

  const [input, setInput] = useState("");


  const db = getFirestore();



  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      console.log(input);

      // db.collection("emails").add({
      //   email: input,
      //   time: firebase.firestore.FieldValue.serverTimestamp()
      // })

      const userData = {
        email: input,
        time: serverTimestamp()

      }

      //  I will need to find ways of getting the uid 
      const docRef = doc(db, "emails", "Set-uid-later");
      setDoc(docRef, userData);

    }
  }

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
                    <form className='register-form' >
                        {/* <input type='text' name='name' id='fname' placeholder='Full Name' className='reg-input' /> */}
                        <input type='email' name='email' id='email' placeholder='Email' className='reg-input' onChange={handleInput} value={input}/>
                        <button type='submit' className='lab-btn' onClick={handleSubmit}>
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
