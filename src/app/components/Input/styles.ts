import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

import { TextInput } from 'react-native'

export const Container = styled(TextInput)`
  width: 100%;
  padding: ${RFValue(18)}px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text_dark};

  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: ${RFValue(5)}px;
  margin-bottom: ${RFValue(8)}px;
`