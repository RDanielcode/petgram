import { useQuery, gql } from '@apollo/client'

const GET_FAVORITES = gql`
query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

const FavsWithQuery = () => {
  const { error, data, loading } = useQuery(GET_FAVORITES, {
    fetchPolicy: 'cache-and-network'
  })

  return { error, data, loading }
}

export { FavsWithQuery }
