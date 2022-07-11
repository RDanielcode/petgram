import React from 'react'
import { ListOfCategory } from '../ListOfCategory'
import { ListOfCards } from '../ListOfCards'
import { useParams } from 'react-router-dom'
import { Layout } from '../Layout'

const HomePage = () => {
  const params = useParams()

  return (
    <Layout title='Home' subtitle='Find every kind of pets'>
      <ListOfCategory />
      <ListOfCards id={params.id} />
    </Layout>
  )
}

const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.params.id === props.params.id
})

export { Home }
