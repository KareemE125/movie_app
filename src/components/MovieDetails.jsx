import React from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetails() {
  console.log(useParams())
  return (
    <div>MovieDetails</div>
  )
}
