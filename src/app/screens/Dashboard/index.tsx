import React from 'react'

import { getBottomSpace } from 'react-native-iphone-x-helper'

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighLightCards,

  Transactions,
  Title,
  TransactionList
} from './styles'

import { HighLightCard } from '../../components/HighLightCard'
import { TransactionCard } from '../../components/TransactionCard'

export function Dashboard() {
  const data = [
    {
      title: "Consultoria de serviços",
      amount: "R$ 15.000,00",
      category: {
        name: 'Vendas de Serviços',
        icon: 'dollar-sign'
      },
      date: "30/09/2021"
    },
    {
      title: "Carnes e Verduras",
      amount: "R$ 1.000,00",
      category: {
        name: 'Supermercdo',
        icon: 'dollar-sign'
      },
      date: "02/10/2021"
    },
    {
      title: "Aluguel",
      amount: "R$ 950,00",
      category: {
        name: 'moradia',
        icon: 'dollar-sign'
      },
      date: "15/09/2021"
    }
  ]

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{ uri: 'https://avatars.githubusercontent.com/u/45977540?v=4' }}
            />

            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>João</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />

        </UserWrapper>
      </Header>

      <HighLightCards>
        <HighLightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 30 de Setembro"
        />
        <HighLightCard
          type="down"
          title="Saídas"
          amount="R$ 7.000,00"
          lastTransaction="Última saída dia 30 de Setembro"
        />
        <HighLightCard
          type="total"
          title="Total"
          amount="R$ 10.400,00"
          lastTransaction="Total em 30 de Setembro"
        />
      </HighLightCards>

      <Transactions>
        <Title>Listagens</Title>

        <TransactionList
          data={data}
          renderItem={({ item }) => <TransactionCard data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace()
          }}
        />

      </Transactions>

    </Container>
  )
}