import React, { useEffect, useState } from 'react'
import MoviesApiHelper from '../Helpers/MoviesApiHelper';

import Loading from './Loading'

import '../css/HomeStyle.css'
import { Link } from 'react-router-dom';


export default function Movies() {

  let [trendingMovieList, setTrendingMovieList] = useState([]);

  async function init() {
    MoviesApiHelper.getTrendings(MoviesApiHelper.MEDIA_TYPE.Movie)
      .then((response) => { setTrendingMovieList(response); });
  }


  useEffect(() => { init(); }, []);


  return <section id='Home'>
    <div className="py-4">

      <div className="d-flex justify-content-start align-items-start flex-wrap">
        {
          trendingMovieList ?
            trendingMovieList.map((movie, index) =>
              <div key={index} className='col-6 col-sm-3 col-lg-2'>
                <Link className='text-decoration-none' to={'details/movie/' + movie.id}>
                  <div className=' home-card m-2 position-relative'  >
                    <img className='img-fluid' src={movie.poster} alt="" />
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
