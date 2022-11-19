import React, { useEffect, useState } from 'react'
import MoviesApiHelper from '../Helpers/MoviesApiHelper';

import Loading from './Loading'

import '../css/HomeStyle.css'
import { Link } from 'react-router-dom';


export default function Home() {

  let [trendingList, setTrendingList] = useState([]);

  async function init() {
    let response = await MoviesApiHelper.getTrendings()
    setTrendingList(response)
  }


  useEffect(() => {
    init();
    console.log("HOME3")
  }, []);


  return <section id='Home'>
    <div className="p-4">
      <div className="d-flex justify-content-center align-items-start flex-wrap">
        {
          trendingList?
            trendingList.map((movie, index) =>
              <div key={index} className='col-6 col-md-3 col-lg-2'>
                <Link className='text-decoration-none' to={'/movie/' + movie.id}>
                  <div className=' movie-card m-2 position-relative' onClick={() => { console.log('Movie Clicked') }} >
                    <img className='img-fluid' src={"https://image.tmdb.org/t/p/w500/" + movie.poster} alt="" />
                    <h5 className='text-center overflow-hidden text-wrap'>
                      {movie?.title.length > 30 ? movie.title.substr(0, 30) + "..." : movie.title}
                    </h5>
                    <h6 className='text-warning rounded'>
                      <i className='fa fa-star text-warning me-2'></i>
                      {movie?.rate.toFixed(1)}
                    </h6>
                  </div>
                </Link>
              </div>)
            : <Loading />

        }
      </div>
    </div>
  </section>
}
