import { useMutation, gql } from '@apollo/client'
const REGISTER = gql`
  mutation signup($input: UserCredentials!){
    signup(input: $input)
  }
`

const RegisterMutation = () => {
  const [registerMutation, { error, loading }] = useMutation(REGISTER)

  return { registerMutation, error, loading }
}

export { RegisterMutation }
