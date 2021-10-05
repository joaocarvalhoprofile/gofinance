import React from 'react'
import { Button } from '../../components/Button'

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

        <Button
          title="Enviar"
        />
      </Form>

    </Container>
  )
}