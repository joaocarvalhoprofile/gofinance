import React from 'react'

import { ThemeProvider } from 'styled-components'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import theme from './src/core/styles/theme'
// import { Dashboard } from './src/app/screens/Dashboard'
// import { Register } from './src/app/screens/Register'
import { CategoryList } from './src/app/features/CategoryList'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <CategoryList />
    </ThemeProvider>
  );
}
