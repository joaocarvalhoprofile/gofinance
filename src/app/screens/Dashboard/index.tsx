import React, { useState, useEffect } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'

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
  const [data, setData] = useState<DataListProps[]>([])

  async function getAll() {
    const dataKey = '@gofinance:transactions'
    // await AsyncStorage.removeItem(dataKey)
    const response = await AsyncStorage.getItem(dataKey)
    const data = response ? JSON.parse(response) : []
    console.log(data)

    const transactions: DataListProps[] = data
      .map((item: DataListProps) => {
        const amount = Number(item.amount)
          .toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })

        const date = Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit'
        }).format(new Date(item.date))

        return {
          id: item.id,
          title: item.title,
          amount,
          type: item.type,
          category: item.category,
          date
        }
      })

    setData(transactions)
  }

  useEffect(() => {
    getAll()
  }, [])

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