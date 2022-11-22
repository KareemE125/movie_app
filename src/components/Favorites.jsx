import React, { useEffect, useState } from 'react'

import Loading from './Loading'

import '../css/HomeStyle.css'
import { Link } from 'react-router-dom';
import User from '../models/User';


export default function Favorites() 
{
  let [refresh, setRefresh] = useState(true);

  async function init() 
  {
    console.log('====================================');
    console.log(User.FavoritesList);
    console.log('====================================');
  }


  useEffect(() => { init(); }, []);

  useEffect(() => {  setRefresh(!refresh); }, [User.FavoritesList]);


  return User.FavoritesList !== null?
  <section id='Home'>
    <div className="py-4">

      <div className="d-flex justify-content-start align-items-start flex-wrap">
        {
          User.FavoritesList.length > 0?
            User.FavoritesList.map((item, index) =>
              <div key={index} className='col-6 col-sm-3 col-lg-2'>
                <Link className='text-decoration-none' to={`details/${item.type}/${item.id}`}>
                  <div className=' home-card m-2 position-relative' onClick={() => { console.log('Movie Clicked') }} >
                    <img className='img-fluid' src={item.imgUrl} alt="poster" />
                    <h5 className='text-center overflow-hidden text-wrap'>
                      {item.name?.length > 30 ? item.name.substr(0, 30) + "..." : item.name}
                    </h5>
                  </div>
                </Link>
              </div>)
            : <section id='favorites' className='m-5 p-5 d-flex w-100 justify-content-center align-items-center flex-wrap'>
            <i className='fa fa-heart fa-6x text-danger'></i>
            <i className='fa fa-heart fa-10x text-danger mx-5 my-4'></i>
            <i className='fa fa-heart fa-6x text-danger'></i>
          </section>
        }
      </div>

    </div>
  </section> 
  : <Loading />
}
