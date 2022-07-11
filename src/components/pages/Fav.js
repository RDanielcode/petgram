import React from 'react'
import { FavsWithQuery } from '../container/GetFavs'
import { Layout } from '../Layout'
import { ListOfFavs } from '../ListOfFavs'

const Fav = () => {
  const { loading, data, error } = FavsWithQuery()
  console.log(data)
  if (loading) return <h1> loading...</h1>
  if (error) return <h1> error </h1>
  const { favs } = data
  if (!loading) {
    return (
      <Layout title='Favorites' subtitle='list of favorites pets'>
        <ListOfFavs
          favs={favs}
        />
      </Layout>
    )
  }
}

export default Fav
