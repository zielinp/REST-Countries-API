import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  height: 4rem;
  position: sticky;
  box-shadow: 0 0 10px 0 rgba(199,199,199,1);
  top:0;
  display: flex;
  align-items:center;
  justify-content: space-between;
  background-color: white;
  h3 {
    margin-left: 2rem;
  }
  p{
      margin-right:2rem;
  }
  p::before{
      content: url(doradztwo.svg) ;
      /* background: url(doradztwo.svg) ; */
      background-size: 1rem 1rem;
      position: relative;
      height: 1rem;
      width: 1rem;
      margin-right: 0.5rem;
  }
`

const Header = () => (
  <>
    <StyledHeader>
    <h3>Where in the world?</h3>
    <p>Dark Mode</p>
    </StyledHeader>
  </>
)

export default Header
