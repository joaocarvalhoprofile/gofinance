import React from 'react'
import { Button } from '../../components/Button'

import { Input } from '../../components/Input'
import { TypeButton } from '../../components/TypeButton'

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  OperationType
} from './styles'

export function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input
            placeholder="Descrição"
          />

          <Input
            placeholder="Preço"
          />

          <OperationType>
            <TypeButton
              type="up"
              title="Entrada"
            />
            <TypeButton
              type="down"
              title="Saída"
            />
          </OperationType>
        </Fields>

        <Button
          title="Enviar"
        />
      </Form>

    </Container>
  )
}