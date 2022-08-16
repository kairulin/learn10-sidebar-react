import React, { useState } from 'react'
import { Helmet } from "react-helmet"
import { ThemeProvider } from "styled-components"
import Layout from './components/Layout/Layout';
import RoutesJS from './RoutesJS';
import { GlobalStyle } from './styles/globalStyle';
import { lightTheme, darkTheme } from './styles/theme';
export const ThemeContext = React.createContext(null)

const App = () => {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <Helmet>
          <title>Sidebar - Code Focus</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"></link>
        </Helmet>
        <>
          <Layout>
            <RoutesJS/>
          </Layout>
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App