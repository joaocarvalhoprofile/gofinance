import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import {
  Container,
  Title
} from './styles'

interface ButtonProps extends TouchableOpacityProps {
  title: string
}

export function Button({ title }: ButtonProps) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}