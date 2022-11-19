import React from 'react'
import { useNavigate } from 'react-router-dom';



export default function Login({resetAppRouter}) 
{

  let navigate = useNavigate();

  function login() 
  {
    console.log("LOGIN")
    localStorage.setItem('token', '0');
  
    // we navigate to '/' before resetting AppRouter
    // so that after resetting we will have a vaild route '/' in the url to route to
    navigate('/');

    resetAppRouter();
  }

  return (
    <div>Login
      <button onClick={login}>LOGIN</button>
      <button onClick={()=>{ navigate('/register'); }}>create</button>
    </div>
  )
}
