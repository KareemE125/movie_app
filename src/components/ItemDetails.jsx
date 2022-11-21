import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MoviesApiHelper from '../Helpers/MoviesApiHelper';

export default function ItemDetails() 
{
  let params = useParams();
  let [itemDetails,setItemDetails] = useState(null);

  async function init()
  {
    //TODO: filter getDeials by media type
    await MoviesApiHelper.getMovieDetails(params.id).then((value)=>{
      setItemDetails(value);
    });
  }

  useEffect(()=>{
    init();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div>{itemDetails?.description}</div>
  )
}
