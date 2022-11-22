import React, { useEffect, useState } from 'react'
import MoviesApiHelper from '../Helpers/MoviesApiHelper';

import Loading from './Loading'

import '../css/HomeStyle.css'
import { Link } from 'react-router-dom';


export default function People() {
  let [trendingPersonList, setTrendingPersonList] = useState([]);

  async function init() {
    MoviesApiHelper.getTrendings(MoviesApiHelper.MEDIA_TYPE.Person)
      .then((response) => { setTrendingPersonList(response); });
  }


  useEffect(() => { init(); }, []);


  return <section id='Home'>
    <div className="py-4">
      <div className="d-flex justify-content-start align-items-start flex-wrap">
        {
          trendingPersonList ?
            trendingPersonList.map((person, index) =>
              <div key={index} className='col-6 col-sm-3 col-lg-2'>
                <Link className='text-decoration-none' to={'details/person/' + person.id}>
                  <div className=' home-card m-2 position-relative'>
                    <img className='img-fluid' src={(person.profilePic.includes("null")) ? 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' : person.profilePic} alt="" />
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
            : <Loading />
        }
      </div>

    </div>
  </section>
}
