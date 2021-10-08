import React, { useState } from 'react'
import { Modal } from 'react-native'

import { Input } from '../../components/Input'
import { TypeButton } from '../../components/TypeButton'
import { Button } from '../../components/Button'
import { CategorySelectButton } from '../../components/CategorySelectButton'

import { CategoryList } from '../../features/CategoryList'

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes
} from './styles'

export function Register() {
  const [categoryModalShow, setCategoryModalShow] = useState(false)
  const [TransactionType, SetTransactionType] = useState('')

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  })

  function handleTransactionTypeSelect(type: 'up' | 'down') {
    SetTransactionType(type)
  }

  function handleCategoryModalShow() {
    setCategoryModalShow(true)
  }
  function handleCategoryModalClose() {
    setCategoryModalShow(false)
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Descrição" />
          <Input placeholder="Preço" />

          <TransactionTypes>
            <TypeButton
              type="up"
              title="Income"
              onPress={() => handleTransactionTypeSelect('up')}
              isActive={TransactionType === 'up'}
            />
            <TypeButton
              type="down"
              title="Outcome"
              onPress={() => handleTransactionTypeSelect('down')}
              isActive={TransactionType === 'down'}
            />
          </TransactionTypes>

          <CategorySelectButton
            title="Categoria"
            onPress={handleCategoryModalShow}
          />
        </Fields>

        <Button title="Enviar" />
      </Form>

      <Modal visible={categoryModalShow}>
        <CategoryList
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCategoryModalClose}
        />
      </Modal>

    </Container>
  )
}