import React from 'react'
import { Category } from '../Category'
import { useData } from '../hooks/useData'
import { List, Item } from './styles'

const ListOfCategoryComponent = () => {
  const { categories, showFixed } = useData()

  const renderList = fixed => {
    return (
      <List fixed={fixed}>
        {
        categories.map(category =>
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        )
        }
      </List>
    )
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(showFixed)}
    </>
  )
}

const ListOfCategory = React.memo(ListOfCategoryComponent)

export { ListOfCategory }
