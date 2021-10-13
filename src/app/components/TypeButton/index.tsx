import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import {
  Container,
  Icon,
  Title
} from './styles'

const Icons = {
  positive: 'arrow-up-circle',
  negative: 'arrow-down-circle'
}

interface Props extends RectButtonProps {
  type: 'positive' | 'negative'
  title: string
  isActive: boolean
}

export function TypeButton({ type, title, isActive, ...rest }: Props) {
  return (
    <Container
      type={type}
      isActive={isActive}
      {...rest}
    >
      <Icon name={Icons[type]} type={type} />
      <Title>{title}</Title>
    </Container >
  )
}