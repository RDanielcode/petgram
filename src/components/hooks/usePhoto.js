import { useQuery, gql } from '@apollo/client'

const usePhoto = (categoryId) => {
  const usePhotosData = gql`
  query getPhotos ($categoryId: ID) {
    photos (categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
    `
  const { error, loading, data } = useQuery(usePhotosData, {
    variables: { categoryId }
  })

  return { error, loading, data }
}

export { usePhoto }
