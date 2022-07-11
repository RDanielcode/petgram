import React from 'react'
import { useParams } from 'react-router-dom'
import { PhotoCard } from '../PhotoCard'
import { useSinglePhoto } from '../hooks/useSinglePhoto'

const PhotoCardWithQuery = () => {
  const params = useParams()
  const { id } = params
  const { loading, error, data } = useSinglePhoto({ id })
  console.log(data)

  if (loading) return <h1>loading...</h1>

  const { photo = {} } = data

  return (
    <>
      {error && <h1>internal error...</h1>}
      <PhotoCard {...photo} />
    </>
  )
}

export { PhotoCardWithQuery }
