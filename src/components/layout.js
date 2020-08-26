import React from "react"
import Header from "./header"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap');
  body {
    padding: 0;
    margin: 0;
    font-family: 'Nunito Sans', sans-serif;
    --bg: hsl(0, 0%, 98%);
    --boxShadowColor: hsl(0, 0%, 78%);
    --elements: hsl(0, 0%, 100%);
    --textTitle: hsl(200, 15%, 5%);
    --textNormal: hsl(200, 15%, 15%);
    --textInput: hsl(0, 0%, 52%);
    background-color: var(--bg);
  }

  body.dark {
    -webkit-font-smoothing: antialiased;
    --bg: hsl(207, 26%, 17%);
    --boxShadowColor: hsl(207, 26%, 10%);
    --elements: hsl(209, 23%, 22%);
    --textTitle: hsl(0, 0%, 100%);
    --textNormal: hsl(0, 0%, 82%);
    --textInput: hsl(0, 0%, 100%);
  }

  h1,h2,h3,h4,h5,h6,p,span {
    color: var(--textNormal);
  }

  * {
    box-sizing: border-box;
    :focus {
      outline: none;
    }
  }
`

function Layout({ children }) {
  return (
    // <ThemeToggler>
    //   {({ theme, toggleTheme }) => (
    //     <>
    //       <GlobalStyle />
    //       <Header theme={theme} toggleTheme={toggleTheme} />
    //       {children}
    //     </>
    //   )}
    // </ThemeToggler>

    <>
      <GlobalStyle />
      <Header />
      {children}
    </>
  )
}

export default Layout
