import React, { useEffect, useState } from 'react'
import MoviesApiHelper from '../Helpers/MoviesApiHelper';

import '../css/home.css'


export default function Home() {

  let [trendingList, setTrendingList] = useState([]);

  async function init() {
    let response = await MoviesApiHelper.getTrendings()
    setTrendingList(response)
  }


  useEffect(() => {
    init();
  }, []);


  return <section id='Home'>
    <div className="p-4">
      <div className="d-flex justify-content-center align-items-start flex-wrap">
        {

          trendingList.map((movie, index) => <div key={index} className='col-6 col-md-3 col-lg-2'>
            <div className=' movie-card m-2 position-relative' onClick={() => { console.log('Movie Clicked') }} >
              <img className='img-fluid' src={"https://image.tmdb.org/t/p/w500/" + movie.poster} alt="" />
              <h5 className='text-center overflow-hidden text-wrap'>
                {movie.title ? movie.title.length > 30 ? movie.title.substr(0, 30) + "..." : movie.title : null}
              </h5>
              <h6 className='text-warning rounded'>
                <i className='fa fa-star text-warning me-2'></i>
                {movie.rate ? movie.rate.toFixed(1) : null}
              </h6>
            </div>
          </div>)

        }
      </div>
    </div>
  </section>
}
