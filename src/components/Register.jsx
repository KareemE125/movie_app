import React, { useEffect, useRef, useState } from 'react'
import UserFormModel from '../models/UserFormModel.js'

import '../css/RegisterStyle.css'
import { useNavigate } from 'react-router-dom';

import AuthApiHelper from '../Helpers/AuthApiHelper.js';

export default function Register() {

  let inputFirstName = useRef();
  let inputLastName = useRef();
  let inputEmail = useRef();
  let inputAge = useRef();
  let inputPassword = useRef();
  let inputConfirmPassword = useRef();

  let inputs = [];

  let [isLoading, setIsLoading] = useState(false);
  let [error, setError] = useState('');

  let navigate = useNavigate();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    inputs = [inputFirstName.current, inputLastName.current, inputEmail.current, inputAge.current, inputPassword.current, inputConfirmPassword.current];
    validateInputs();
  }, []);

  ///////////////........... Sumbmission & APIS ............////////////////
  async function submitForm(e) {
    e.preventDefault();
    setError('');

    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].classList.contains('valid')) { nonValidHandler(inputs[i]); return; }
    }

    await handleSignupRequest();
  }

  async function handleSignupRequest() {
    setIsLoading(true);

    const response = await AuthApiHelper.signup(userForm);

    if (response.message === 'success') { navigate('/'); }
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
    const inputs = document.querySelectorAll('#register input');

    const passwordInput = document.querySelector('#register input[name="password"]');
    const repasswordInput = document.querySelector('#register input[name="confirmPassword"]');


    const nameRegex = /^.{3,}$/;
    const emailRegex = /^.+@[a-zA-Z]+(\.[a-zA-Z]+)+$/;
    const ageRegex = /^[1-9]{1}[0-9]{0,1}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).{8,}$/;

    const regexMap = {
      'first_name': nameRegex,
      'last_name': nameRegex,
      'email': emailRegex,
      'age': ageRegex,
      'password': passwordRegex,
    }




    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('input', (elem) => {
        if (elem.target.attributes.name.value === 'confirmPassword' || elem.target.attributes.name.value === 'password') {
          if (passwordInput.value === repasswordInput.value) { validHandler(repasswordInput); }
          else { nonValidHandler(repasswordInput); }
          if (elem.target.attributes.name.value === 'confirmPassword') { return; }
        }

        if (regexMap[elem.target.attributes.name.value].test(elem.target.value)) { validHandler(elem.target); }
        else { nonValidHandler(elem.target); }

      });
    }

  }

  ///////////////........... Update Input Values ...........////////////////
  let userForm = new UserFormModel();

  function updateUserValues(e) {
    userForm[e.target.attributes.name.value] = e.target.value;
  }

  return <section id='register'>
    <div className='col-lg-8 m-auto py-5'>
      <h2 className='fw-light'>Register a new account</h2>
      {error ? <div className="validation-card d-block">{error}</div> : null}
      <form className='my-4 d-flex flex-column' onSubmit={submitForm} onChange={updateUserValues}>

        <div className="position-relative mb-3">
          <i className="fa fa-check bg-green"></i>
          <i className="fa fa-close bg-red"></i>
          <label className='fw-light' htmlFor="first_name">First Name :</label>
          <input ref={inputFirstName} className='form-control mt-2 mb-1' type="text" name='first_name' />
          <div className="validation-card">"Your first name should have at least 3 characters."</div>
        </div>

        <div className="position-relative mb-3">
          <i className="fa fa-check bg-green"></i>
          <i className="fa fa-close bg-red"></i>
          <label className='fw-light' htmlFor="last_name">Last Name :</label>
          <input ref={inputLastName} className='form-control mt-2 mb-1' type="text" name='last_name' />
          <div className="validation-card">"Your last name should have at least 3 characters."</div>
        </div>

        <div className="position-relative mb-3">
          <i className="fa fa-check bg-green"></i>
          <i className="fa fa-close bg-red"></i>
          <label className='fw-light' htmlFor="email">Email :</label>
          <input ref={inputEmail} className='form-control mt-2 mb-1' type="email" name='email' />
          <div className="validation-card">"You should enter a valid email."</div>
        </div>

        <div className="position-relative mb-3">
          <i className="fa fa-check bg-green"></i>
          <i className="fa fa-close bg-red"></i>
          <label className='fw-light' htmlFor="age">Age :</label>
          <input ref={inputAge} className='form-control mt-2 mb-1' type="text" name='age' />
          <div className="validation-card">"You should enter a valid age."</div>
        </div>

        <div className="position-relative mb-3">
          <i className="fa fa-check bg-green"></i>
          <i className="fa fa-close bg-red"></i>
          <label className='fw-light' htmlFor="password">Password :</label>
          <input ref={inputPassword} className='form-control mt-2 mb-1' type="password" name='password' />
          <div className="validation-card">"Your name should have at least 8 characters, 1 UPPERCASE, 1 lowercase, 1 number, 1 $peci@l ch@r@cter."</div>
        </div>

        <div className="position-relative mb-3">
          <i className="fa fa-check bg-green"></i>
          <i className="fa fa-close bg-red"></i>
          <label className='fw-light' htmlFor="confirmPassword">Confirm Password :</label>
          <input ref={inputConfirmPassword} className='form-control mt-2 mb-1' type="password" name='confirmPassword' />
          <div className="validation-card">"You should have matched passwords."</div>
        </div>

        {
          isLoading ? <button className='btn btn-outline-warning mt-4 align-self-end disabled' type='submit'><i className='fa fa-spin fa-spinner'></i></button>
            : <button className='btn btn-outline-warning mt-4 align-self-end' type='submit'> Register </button>
        }
      </form>
    </div>

  </section >
}
