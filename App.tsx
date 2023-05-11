import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'react-native'
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter'

import { Home } from '@screens/Home'
import defaultTheme from '@themes/default'
import { TaskProvider } from '@contexts/TaskContext'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <TaskProvider>
        <Home />
      </TaskProvider>
    </ThemeProvider>
  )
}
