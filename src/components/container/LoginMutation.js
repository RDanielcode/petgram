import { useMutation, gql } from '@apollo/client'
const LOGIN = gql`
  mutation login($input: UserCredentials!){
    login(input: $input)
  }
`

const LoginMutation = () => {
  const [loginMutation, { error, loading }] = useMutation(LOGIN)

  return { loginMutation, error, loading }
}

export { LoginMutation }
