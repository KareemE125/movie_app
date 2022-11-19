import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


import '../css/LoginStyle.css'


export default function Login({ resetAppRouter }) {

  let [userForm, setUserForm] = useState({"email":null,"password":null});
  let [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(validateInputs, []);

  async function submitForm(e) {
    e.preventDefault();

    const inputs = document.querySelectorAll('#register input');

    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].classList.contains('valid')) { nonValidHandler(inputs[i]); return; }
    }

    setIsLoading(true);
    // calling signin API instead of the promise
    await new Promise((resolve)=>{ 
      console.log("Loging in..."); 
      setTimeout(()=>{
        console.log("Login Success");
        resolve() 
      },1000);
    })
    setIsLoading(false);
    
    localStorage.setItem('token', '0');

    // we navigate to '/' before resetting AppRouter
    // so that after resetting we will have a vaild route '/' in the url to route to
    navigate('/');

    resetAppRouter();
  }

  function validHandler(elem) {
    elem.classList.remove('non-valid');
    elem.classList.add('valid');
    elem.nextElementSibling.style.display = 'none';
    elem.parentElement.children[0].style.display = 'block';
    elem.parentElement.children[1].style.display = 'none';
  }

  function nonValidHandler(elem) {
    elem.classList.remove('valid');
    elem.classList.add('non-valid');
    elem.nextElementSibling.style.display = 'block';
    elem.parentElement.children[0].style.display = 'none';
    elem.parentElement.children[1].style.display = 'block';
  }

  function validateInputs() {
    const inputs = document.querySelectorAll('#login input');

    const emailRegex = /^.+@[a-zA-Z]+(\.[a-zA-Z]+)+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).{8,}$/;

    const regexMap = {
      'email': emailRegex,
      'password': passwordRegex,
    }

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('input', (elem) => {
        if (regexMap[elem.target.attributes.name.value].test(elem.target.value)) { validHandler(elem.target); }
        else { nonValidHandler(elem.target); }
      });
    }

  }

  function updateUserValues(e) {
    let updatedUserForm = { ...userForm };
    updatedUserForm[e.target.attributes.name.value] = e.target.value;
    setUserForm(updatedUserForm)
    console.log(userForm)
  }


  return <section id='login'>
    <div className='col-lg-8 m-auto py-5'>
      <h2 className='fw-light'>Login</h2>
      <form className='my-4 d-flex flex-column' onSubmit={submitForm} onChange={updateUserValues}>

        <div className="position-relative mb-3">
          <i className="fa fa-check bg-green"></i>
          <i className="fa fa-close bg-red"></i>
          <label className='fw-light' htmlFor="email">Email :</label>
          <input className='form-control mt-2 mb-1' type="email" name='email' />
          <div className="validation-card">"You should enter a valid email."</div>
        </div>

        <div className="position-relative mb-3">
          <i className="fa fa-check bg-green"></i>
          <i className="fa fa-close bg-red"></i>
          <label className='fw-light' htmlFor="password">Password :</label>
          <input className='form-control mt-2 mb-1' type="password" name='password' />
          <div className="validation-card">"Your name should have at least 8 characters, 1 UPPERCASE, 1 lowercase, 1 number, 1 $peci@l ch@r@cter."</div>
        </div>


        {
          isLoading ? <button className='btn btn-outline-warning mt-4 align-self-end disabled' type='submit'><i className='fa fa-spin fa-spinner'></i></button>
            : <button className='btn btn-outline-warning mt-4 align-self-end' type='submit'> Login </button>
        }
      </form>
    </div>

  </section >
}
