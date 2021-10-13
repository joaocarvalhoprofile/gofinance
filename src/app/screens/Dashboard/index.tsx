import React, { useState, useEffect, useCallback } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'

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

interface HighlightProps {
  total: string
}
interface HighlightData {
  entries: HighlightProps
  expensive: HighlightProps
  balance: HighlightProps
}

export function Dashboard() {
  const [data, setData] = useState<DataListProps[]>([])
  const [highlightData, setHighlightData] = useState<HighlightData>({} as HighlightData)

  async function getAll() {
    const dataKey = '@gofinance:transactions'
    const response = await AsyncStorage.getItem(dataKey)
    const data = response ? JSON.parse(response) : []

    let entriesTotal = 0
    let expensiveTotal = 0
    let balance = 0

    const transactions: DataListProps[] = data
      .map((item: DataListProps) => {

        if (item.type === 'positive') {
          entriesTotal += Number(item.amount)
        } else {
          expensiveTotal += Number(item.amount)
        }

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

    balance = entriesTotal - expensiveTotal

    setData(transactions)
    setHighlightData({
      entries: {
        total: entriesTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })
      },
      expensive: {
        total: expensiveTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }),
      },
      balance: {
        total: balance.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }),
      }
    })
  }

  useEffect(() => {
    getAll()
  }, [])

  useFocusEffect(useCallback(() => {
    getAll()
  }, []))

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
          amount={highlightData?.entries?.total}
          lastTransaction="Última entrada dia 30 de Setembro"
        />
        <HighLightCard
          type="down"
          title="Saídas"
          amount={highlightData?.expensive?.total}
          lastTransaction="Última saída dia 30 de Setembro"
        />
        <HighLightCard
          type="total"
          title="Total"
          amount={highlightData?.balance?.total}
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