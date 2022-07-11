import { gql, useMutation } from '@apollo/client'

const toogleLikeMutation = ({ id }) => {
  const LIKE_MUTATION = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`

  const [toogleLike] = useMutation(LIKE_MUTATION, {
    variables: {
      input: {
        id: id
      }
    }
  })

  return [toogleLike]
}

export { toogleLikeMutation }
