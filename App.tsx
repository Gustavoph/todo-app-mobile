import { ThemeProvider } from 'styled-components'

import { Home } from '@screens/Home'
import defaultTheme from '@themes/default'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
    </ThemeProvider>
  )
}
