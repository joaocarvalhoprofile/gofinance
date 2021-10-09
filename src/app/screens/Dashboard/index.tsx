import React from 'react'

import {
  Container,
  Header,
  LogoutButton,
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
import {
  TransactionCard,
  TransactionCardProps
} from '../../components/TransactionCard'

export interface DataListProps extends TransactionCardProps {
  id: string
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "positive",
      title: "Consultoria de serviços",
      amount: "R$ 15.000,00",
      category: {
        name: 'Vendas de Serviços',
        icon: 'dollar-sign'
      },
      date: "30/09/2021"
    },
    {
      id: "2",
      type: "negative",
      title: "Carnes e Verduras",
      amount: "R$ 1.000,00",
      category: {
        name: "Supermercado",
        icon: "coffee"
      },
      date: "02/10/2021"
    },
    {
      id: "3",
      type: "negative",
      title: "Aluguel",
      amount: "R$ 950,00",
      category: {
        name: 'Moradia',
        icon: 'shopping-bag'
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

          <LogoutButton onPress={() => { }}>
            <Icon name="power" />
          </LogoutButton>

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
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />

      </Transactions>

    </Container>
  )
}