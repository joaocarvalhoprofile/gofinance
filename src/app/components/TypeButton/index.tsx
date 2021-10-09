import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import {
  Container,
  Icon,
  Title
} from './styles'

const Icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}

interface Props extends RectButtonProps {
  type: 'up' | 'down'
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