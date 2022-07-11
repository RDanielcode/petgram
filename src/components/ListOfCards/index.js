import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { usePhoto } from '../hooks/usePhoto'
import { Load } from '../UserForm/styles'

const ListOfCards = ({ id }) => {
  const { loading, error, data } = usePhoto(id)

  return (
    <ul>
      {loading && <Load>loading...</Load>}
      {error && <h1>error</h1>}
      {!loading &&
        data.photos.map(photos => <PhotoCard key={photos.id} {...photos} />)}
    </ul>
  )
}

export { ListOfCards }
