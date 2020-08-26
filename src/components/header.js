import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  height: 4rem;
  position: sticky;
  z-index: 2;
  box-shadow: 0 0 10px 0 var(--boxShadowColor);
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--bg);
  color: var(--textNormal);
  h3 {
    margin-left: 2rem;
  }
  p {
    margin-right: 2rem;
  }
`

const Header = ({ theme, toggleTheme }) => {
  return (
    <>
      <StyledHeader>
        <h3>Where in the world?</h3>
        <label>
          <input
            type="checkbox"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
          />{" "}
          Dark mode
        </label>
      </StyledHeader>
    </>
  )
}

export default Header
