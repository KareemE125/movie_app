import React, { useEffect, useState } from 'react'
import MoviesApiHelper from '../Helpers/MoviesApiHelper';

import Loading from './Loading'

import '../css/HomeStyle.css'
import { Link } from 'react-router-dom';


export default function Tvs() {

  let [trendingTvList, setTrendingTvList] = useState([]);

  async function init() {

    MoviesApiHelper.getTrendings(MoviesApiHelper.MEDIA_TYPE.Tv)
      .then((response) => { setTrendingTvList(response); });
  }


  useEffect(() => { init(); }, []);


  return <section id='Home'>
    <div className="py-4">

      <div className="d-flex justify-content-start align-items-start flex-wrap">
        {
          trendingTvList ?
            trendingTvList.map((tv, index) =>
              <div key={index} className='col-6 col-sm-3 col-lg-2'>
                <Link className='text-decoration-none' to={'details/tv/' + tv.id}>
                  <div className=' home-card m-2 position-relative' onClick={() => { console.log('tv Clicked') }} >
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
            : <Loading />
        }
      </div>

    </div>
  </section>
}
