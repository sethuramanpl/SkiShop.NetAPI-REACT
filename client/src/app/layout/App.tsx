 
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import Header from "./Header"
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
//import 'react-toastify/dist/ReactToastift.css';

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
    <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
    <CssBaseline />
      <Header darkMode={darkMode} themeChange={themeChange}/>
    <Container>
      <Outlet />
    </Container>

    </ThemeProvider>
  )
}

export default App
