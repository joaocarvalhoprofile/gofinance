import styled, { css } from 'styled-components/native'

import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'

interface TypeButtonProps {
  type: 'up' | 'down'
  isActive: boolean
}

export const Container = styled(RectButton) <TypeButtonProps>`
  width: 48%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-width: ${({ isActive }) => isActive ? 0 : 1.5}px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};

  border-radius: ${RFValue(5)}px;

  padding: 16px;

  ${({ type, isActive }) => isActive && type === 'up' && css`
    background-color: ${({ theme }) => theme.colors.success_light}
  `}
  ${({ type, isActive }) => isActive && type === 'down' && css`
    background-color: ${({ theme }) => theme.colors.attention_light}
  `}
`
export const Icon = styled(Feather) <TypeButtonProps>`
  font-size: ${RFValue(24)}px;

  margin-right: ${RFValue(12)}px;

  color: ${({ theme, type }) =>
    type === 'up' ? theme.colors.success : theme.colors.attention};
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};

  font-size: ${RFValue(14)}px;
`