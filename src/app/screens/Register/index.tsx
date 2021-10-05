import React from 'react'

import { Input } from '../../components/Input'

import {
  Container,
  Header,
  Title,
  Form
} from './styles'

export function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Input
          placeholder="Descrição"
        />

        <Input
          placeholder="Preço"
        />
      </Form>

    </Container>
  )
}