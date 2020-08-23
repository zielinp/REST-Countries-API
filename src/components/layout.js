import React from "react"
import Header from "./header"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap');
body{
  padding: 0;
  margin: 0;
  font-family: 'Nunito Sans', sans-serif;
}
*{
  box-sizing: border-box;
}
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
    </>
  )
}

export default Layout
