 
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import Header from "./Header"
import { useState } from "react";
import { Outlet } from "react-router-dom";

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
      <Outlet />
    </Container>

    </ThemeProvider>
  )
}

export default App
