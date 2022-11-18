import React from 'react'

import '../css/FooterStyle.css';


export default function Footer() {
    return <section id='footer'>
        <div className='container px-4 px-sm-5 mb-5'>
            <div className='row'>

                <div className="col-lg-4 mb-5">
                    <div className='text-white text-center'>
                        <h2>LOCATION</h2>
                        <p>We are located at Egypt, a country linking northeast Africa with the Middle East, dates to the time of the pharaohs.</p>
                    </div>
                </div>
                
                <div className="col-lg-4 mb-5">
                    <div className='text-white text-center'>
                        <h2>AROUND THE WEB</h2>
                        <div className='d-flex justify-content-center'>
                            <div className='icons mx-2'> <i className='fa-brands fa-facebook-f'></i> </div>
                            <div className='icons mx-2'> <i className='fa-brands fa-github'></i> </div>
                            <div className='icons mx-2'> <i className='fa-brands fa-linkedin'></i> </div>
                            <div className='icons mx-2'> <i className='fa-brands fa-instagram'></i> </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mb-5">
                    <div className='text-white text-center'>
                        <h2>ABOUT THE WEBSITE</h2>
                        <p>Movies125 is a website that is connected to themoviedb which is a movies database to give you all the movies' information that you need</p>
                    </div>
                </div>

            </div>
        </div>
        <div className='p-4 text-center footer2'>
            <p className='text-white m-2'>Copyright © Movies125 2022</p>
        </div>
    </section>


}
