import React from 'react'
import { FlatList } from 'react-native'
import { categories } from '../../../core/utils/categories'
import { Button } from '../../components/Button'

import {
  Container,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Separator,
  Footer,
} from './styles'

interface Category {
  id: string
  name: string
}

interface CategoryListProps {
  category: string,
  setCategory: (category: Category) => void
  closeSelectCategory: () => void
}

export function CategoryList({
  category,
  setCategory,
  closeSelectCategory
}: CategoryListProps) {
  return (
    <Container>
      <Header>
        <Title>Categorias</Title>
      </Header>

      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={(item) => item.key}

        renderItem={({ item }) => (
          <Category>
            <Icon name={item.icon} />
            <Name> {item.name} </Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button title="Selecionar" />
      </Footer>

    </Container >
  )
}