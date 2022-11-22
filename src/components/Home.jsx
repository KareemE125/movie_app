import React, { useEffect, useState } from 'react'
import MoviesApiHelper from '../Helpers/MoviesApiHelper';

import Loading from './Loading'

import '../css/HomeStyle.css'
import { Link } from 'react-router-dom';


export default function Home() 
{

  let [trendingMovieList, setTrendingMovieList] = useState([]);
  let [trendingTvList, setTrendingTvList] = useState([]);
  let [trendingPersonList, setTrendingPersonList] = useState([]);

  async function init() {
    MoviesApiHelper.getTrendings(MoviesApiHelper.MEDIA_TYPE.Movie)
      .then((response) => { setTrendingMovieList(response); });

    MoviesApiHelper.getTrendings(MoviesApiHelper.MEDIA_TYPE.Tv)
      .then((response) => { setTrendingTvList(response);  });

    MoviesApiHelper.getTrendings(MoviesApiHelper.MEDIA_TYPE.Person)
      .then((response) => { setTrendingPersonList(response);});

  }


  useEffect(() => { init(); }, []);


  return <section id='Home'>
    <div className="py-4">

      <div className="d-flex justify-content-start align-items-start flex-wrap">
        {
          trendingMovieList ?
            <>
              <div className='col-6 col-sm-3 col-lg-4 p-3 pt-lg-5 ps-lg-4 pe-lg-5'> 
                <div className='w-25 border mb-3'></div>
                <h2 className='text-warning fw-normal h1 mb-0'>Trending</h2> 
                <h2 className='text-warning fw-normal h1 mb-0'>movies</h2> 
                <h2 className='text-warning fw-normal h1 mb-md-3 mb-lg-3 mb-xl-5'>for this week</h2> 
                <h3 className='fw-light'>Browse the most trending</h3> 
                <div className='w-100 border mt-3'></div>
              </div>
              {
                trendingMovieList.map((movie, index) =>
                  <div key={index} className='col-6 col-sm-3 col-lg-2'>
                    <Link className='text-decoration-none' to={'details/movie/' + movie.id}>
                      <div className=' home-card m-2 position-relative'>
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
              }
            </>
            : <Loading />
        }
      </div>

      <div className='my-5'/>

      <div className="d-flex justify-content-start align-items-start flex-wrap">
        {
          trendingTvList ?
            <>
              <div className='col-6 col-sm-3 col-lg-4 p-3 pt-lg-5 ps-lg-4 pe-lg-5'> 
                <div className='w-25 border mb-3'></div>
                <h2 className='text-warning fw-normal h1 mb-0'>Trending</h2> 
                <h2 className='text-warning fw-normal h1 mb-0'>tv shows</h2> 
                <h2 className='text-warning fw-normal h1 mb-md-3 mb-lg-3 mb-xl-5'>for this week</h2> 
                <h3 className='fw-light'>Browse the most trending</h3> 
                <div className='w-100 border mt-3'></div>
              </div>
              {
                trendingTvList.map((tv, index) =>
                  <div key={index} className='col-6 col-sm-3 col-lg-2'>
                    <Link className='text-decoration-none' to={'details/tv/' + tv.id}>
                      <div className=' home-card m-2 position-relative'>
                        <img className='img-fluid' src={tv.poster} alt="" />
                        <h5 className='text-center overflow-hidden text-wrap'>
                          {tv?.name.length > 30 ? tv.name.substr(0, 30) + "..." : tv.name}
                        </h5>
                        <h6 className='text-warning rounded'>
                          <i className='fa fa-star text-warning me-2'></i>
                          {tv?.rate.toFixed(1)}
                        </h6>
                      </div>
                    </Link>
                  </div>)
              }
            </>
            : <Loading />
        }
      </div>

      <div className='my-5'/>

      <div className="d-flex justify-content-start align-items-start flex-wrap">
        {
          trendingPersonList ?
            <>
              <div className='col-6 col-sm-3 col-lg-4 p-3 pt-lg-5 ps-lg-4 pe-lg-5'> 
                <div className='w-25 border mb-3'></div>
                <h2 className='text-warning fw-normal h1 mb-0'>Trending</h2> 
                <h2 className='text-warning fw-normal h1 mb-0'>persons</h2> 
                <h2 className='text-warning fw-normal h1 mb-md-3 mb-lg-3 mb-xl-5'>for this week</h2> 
                <h3 className='fw-light'>Browse the most trending</h3> 
                <div className='w-100 border mt-3'></div>
              </div>
              {
                trendingPersonList.map((person, index) => 
                  <div key={index} className='col-6 col-sm-3 col-lg-2'>
                    <Link className='text-decoration-none' to={'details/person/' + person.id}>
                      <div className=' home-card m-2 position-relative'>
                        <img className='img-fluid' src={(person.profilePic.includes("null"))?'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1': person.profilePic } alt="" />
                        <h5 className='text-center overflow-hidden text-wrap'>
                          {person?.name.length > 30 ? person.name.substr(0, 30) + "..." : person.name}
                        </h5>
                        <h6 className='text-warning rounded'>
                          <i className='fa fa-star text-warning me-2'></i>
                          {person?.popularity.toFixed(1)}
                        </h6>
                      </div>
                    </Link>
                  </div>)
              }
            </>
            : <Loading />
        }
      </div>

    </div>
  </section>
}
