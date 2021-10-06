import React, { useState } from 'react'
import { Button } from '../../components/Button'

import { Input } from '../../components/Input'
import { TypeButton } from '../../components/TypeButton'

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes
} from './styles'

export function Register() {
  const [TransactionType, SetTransactionType] = useState('')

  function handleTransactionTypeSelect(type: 'up' | 'down') {
    SetTransactionType(type)
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
        </Fields>

        <Button title="Enviar" />
      </Form>

    </Container>
  )
}