import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MoviesApiHelper from '../Helpers/MoviesApiHelper';

export default function ItemDetails() 
{
  let params = useParams();
  let [itemDetails,setItemDetails] = useState(null);

  async function init()
  {
    await MoviesApiHelper.getMovieDetails(params.id).then((value)=>{
      setItemDetails(value);
    });
  }

  useEffect(()=>{
    init();
  },[]);

  return (
    <div>{itemDetails?.description}</div>
  )
}
