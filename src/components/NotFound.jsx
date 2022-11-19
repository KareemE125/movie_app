import React from 'react'
import { useNavigate } from 'react-router-dom'

import '../css/NotFound.css'

export default function NotFound() 
{
  const navigate = useNavigate();

  return <section id='notFound'>
    <p className='text-center text-white'>404 Page Not Found</p>
    <button className='btn btn-outline-warning' onClick={()=>navigate('/')}>GO TO HOME</button>
  </section>
}
