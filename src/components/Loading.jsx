import React from 'react'

import '../css/LoadingStyle.css'

export default function Loading() {
  return<section id='loading' className='m-0 d-flex justify-content-center align-items-center'>
    <div className='fa-spin spin-fast'></div>
  </section>
}
