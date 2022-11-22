import React, { useEffect, useState } from 'react'
import MoviesApiHelper from '../Helpers/MoviesApiHelper';

import Loading from './Loading'

import '../css/HomeStyle.css'
import { Link } from 'react-router-dom';
import User from '../models/User';


export default function Favorites() 
{
  let [refresh, setRefresh] = useState(true);

  async function init() {
    //await MoviesApiHelper.getAndSetUserFavorites();
    setRefresh(!refresh);
    console.log('====================================');
    console.log(User.FavoritesList);
    console.log('====================================');
  }


  useEffect(() => { init(); }, []);


  return User.FavoritesList !== null?
  <section id='Home'>
    <div className="py-4">

      <div className="d-flex justify-content-start align-items-start flex-wrap">
        {
          User.FavoritesList?
            User.FavoritesList.map((item, index) =>
              <div key={index} className='col-6 col-sm-3 col-lg-2'>
                <Link className='text-decoration-none' to={'details/movie/' + item.movieID}>
                  <div className=' home-card m-2 position-relative' onClick={() => { console.log('Movie Clicked') }} >
                    <img className='img-fluid' src={item.imgUrl} alt="poster" />
                    <h5 className='text-center overflow-hidden text-wrap'>
                      {item.movieName?.length > 30 ? item.movieName.substr(0, 30) + "..." : item.movieName}
                    </h5>
                  </div>
                </Link>
              </div>)
            : <Loading />
        }
      </div>

    </div>
  </section> 
  : <section id='favorites' className='m-5 p-5 d-flex justify-content-center align-items-center flex-wrap'>
  <i className='fa fa-heart fa-6x text-danger'></i>
  <i className='fa fa-heart fa-10x text-danger mx-5 my-4'></i>
  <i className='fa fa-heart fa-6x text-danger'></i>
</section>
}
