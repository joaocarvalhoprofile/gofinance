import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Dashboard } from '../app/screens/Dashboard'
import { Register } from '../app/screens/Register'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
  return (
    <Navigator>
      <Screen
        name="Listagem"
        component={Dashboard}
      />
      <Screen
        name="Cadastrar"
        component={Register}
      />

      <Screen
        name="Dashboard"
        component={Register}
      />
    </Navigator>
  )
}