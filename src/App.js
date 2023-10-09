import { ThemeProvider } from 'styled-components'
import { HomeScreen, ListScreen } from 'screens'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { theme, GlobalStyles } from 'styles'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/List" element={<ListScreen />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
