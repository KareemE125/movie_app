import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


import '../css/LoginStyle.css'
import AuthApiHelper from '../Helpers/AuthApiHelper';


export default function Login({ resetAppRouter }) {

  let [isLoading, setIsLoading] = useState(false);
  let [error, setError] = useState('');
  let navigate = useNavigate();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(validateInputs, []);

  ///////////////........... Sumbmission & APIS ............////////////////
  async function submitForm(e) {
    e.preventDefault();
    setError('');

    const inputs = document.querySelectorAll('#register input');

    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].classList.contains('valid')) { nonValidHandler(inputs[i]); return; }
    }

    await handleLoginRequest();
  }

  async function handleLoginRequest() {
    setIsLoading(true);
    const response = await AuthApiHelper.login(userForm);

    if (response.message === 'success') {
      localStorage.setItem('token', response.token);

      // we navigate to '/' before resetting AppRouter
      // so that after resetting we will have a vaild route '/' in the url to route to
      navigate('/');

      resetAppRouter();
    }
    else { setError(response.message); }

    setIsLoading(false);
  }

  ///////////////............... Validation ...............////////////////
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

  ///////////////........... Update Input Values ...........////////////////
  let userForm = { "email": null, "password": null };

  function updateUserValues(e) {
    userForm[e.target.attributes.name.value] = e.target.value;
  }


  return <section id='login'>
    <div className='col-lg-8 m-auto py-5'>
      <h2 className='fw-light'>Login</h2>
      {error ? <div className="validation-card d-block">{error}</div> : null}

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
