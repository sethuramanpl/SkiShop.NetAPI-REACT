 
import Catalog from "../../features/catalog/Catalog"
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import Header from "./Header"
import { useState } from "react";

function App() {

const [darkMode, setDarkMode] = useState(false);

const palatteType = darkMode ? 'dark' : 'light';

const theme = createTheme({
  palette:{
    mode: palatteType,
    background: {
      default: palatteType === 'light' ? '#eaeaea' : '#121212'
    }
  }
})

const themeChange = () => {
  setDarkMode(prev => !prev)
}

  return (
    <ThemeProvider theme={theme}>    
    <CssBaseline />
      <Header darkMode={darkMode} themeChange={themeChange}/>
    <Container>
       <Catalog  />
    </Container>

    </ThemeProvider>
  )
}

export default App
