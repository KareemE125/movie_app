import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MoviesApiHelper from '../Helpers/MoviesApiHelper';
import Loading from './Loading'
import '../css/ItemStyle.css'
import User from '../models/User';


export default function ItemDetails() {
  let params = useParams();
  let [itemDetails, setItemDetails] = useState(null);
  let [toggleFav, setToggleFav] = useState(true);

  async function init() {
    
    if (params.type === MoviesApiHelper.MEDIA_TYPE.Movie) {
      await MoviesApiHelper.getMovieDetails(params.id).then((value) => {
        setItemDetails(value);
      });
    }
    else if (params.type === MoviesApiHelper.MEDIA_TYPE.Tv) {
      await MoviesApiHelper.getTvDetails(params.id).then((value) => {
        setItemDetails(value);
      });
    }
    else if (params.type === MoviesApiHelper.MEDIA_TYPE.Person) {
      await MoviesApiHelper.getPersonDetails(params.id).then((value) => {
        setItemDetails(value);
      });
    }
  }

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return itemDetails ?
    <section id='Item' className='py-5'>
      {
        params.type !== MoviesApiHelper.MEDIA_TYPE.Person ?
          <div className="d-flex flex-wrap gap-3">

            <div className='col-md-4 mb-2 ps-0 ps-xl-5 mx-auto position-relative text-center d-flex flex-column'>
              <img className='img-fluid rounded' src={itemDetails.poster} alt="poster" />
              {
                User.FavoritesList?.find((item)=> item.id === itemDetails.id) ?
                  <>
                    <i className='fa fa-bookmark text-danger'></i>
                    <button className='btn btn-outline-danger mt-3' onClick={()=>{ User.removeFromFavorites({name: itemDetails.title, imgUrl: itemDetails.poster, id: itemDetails.id, type: params.type},()=>{setToggleFav(!toggleFav);});  }}>Remove from Favorites</button>
                  </>
                  : <button className='btn btn-outline-warning mt-3' onClick={()=>{ User.addToFavorites({name: itemDetails.title, imgUrl: itemDetails.poster, id: itemDetails.id, type: params.type},()=>{setToggleFav(!toggleFav);}); }}>Add to Favorites</button>
              }
            </div>

            <div className='col-md-7 pt-3 px-sm-5 px-md-0 pe-0 pe-xl-5'>
              <h2 className='h1 mb-5'>{itemDetails.title}</h2>

              <h5 className='fw-light'>Overview:</h5>
              <h5 className='fw-light mb-4 text-white-50'>{itemDetails.description}</h5>

              <h5 className='mb-4 fw-light'>Language: <span className='text-white-50'>{itemDetails.language}</span></h5>

              <h5 className='mb-4 fw-light'>For adults: <span className='text-white-50'>{itemDetails.isAdult ? 'Yes' : 'No'}</span></h5>
              <h5 className='mb-4 fw-light'>Rate:  <span className='text-white-50'>{itemDetails.rate.toFixed(1)} / 10</span></h5>

              <h5 className='mb-4 fw-light'>Release Date: <span className='text-white-50'>{itemDetails.releaseDate}</span></h5>

              <h5 className='fw-light'>Genres:</h5>
              <div className='d-flex flex-wrap gap-1'>
                {
                  itemDetails.genres.map((genre, index) => <div key={index} className='fw-normal bg-warning rounded p-1 me-2 text-white'>{genre}</div>)
                }
              </div>
            </div>

          </div>
          : <div className="d-flex flex-wrap gap-3">

            <div className='col-md-4 mb-2 ps-0 ps-xl-5 mx-auto'>
              <img className='img-fluid rounded' src={itemDetails.profilePic} alt="poster" />
            </div>

            <div className='col-md-7 pt-3 px-sm-5 px-md-0 pe-0 pe-xl-5'>
              <h2 className='h1 mb-5'>{itemDetails.name}</h2>

              <h5 className='fw-light'>Biography:</h5>
              <h5 className='fw-light mb-4 text-white-50'>{itemDetails.biography ? itemDetails.biography : 'Not available'}</h5>

              <h5 className='mb-4 fw-light'>Birthay: <span className='text-white-50'>{itemDetails.birthay}</span></h5>

              <h5 className='mb-4 fw-light'>Place Of Birth: <span className='text-white-50'>{itemDetails.placeOfBirth}</span></h5>
              <h5 className='mb-4 fw-light'>Popularity:  <span className='text-white-50'>{itemDetails.popularity} / 10</span></h5>
            </div>
          </div>
      }

    </section>
    : <Loading />
}
