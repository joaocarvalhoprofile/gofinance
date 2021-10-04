import React from 'react'

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date
} from './styles'

export function TransactionCard() {
  return (
    <Container>
      <Title>Consultoria empresarial</Title>

      <Amount>R$ 15.000,00</Amount>

      <Footer>
        <Category>
          <Icon name="dollar-sign" />
          <CategoryName>Vendas de Serviços</CategoryName>
        </Category>
        <Date>13/09/2021</Date>
      </Footer>
    </Container>
  )
}