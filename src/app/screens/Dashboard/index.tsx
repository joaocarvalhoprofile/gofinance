import React from 'react'

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
  HighLightCards
} from './styles'

import { HighLightCard } from '../../components/HighLightCard'

export function Dashboard() {
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
    </Container>
  )
}