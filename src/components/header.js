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
      content: url(moon-regular.svg);
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><linearGradient id='gradient'><stop offset='10%' stop-color='%23F00'/><stop offset='90%' stop-color='%23fcc'/> </linearGradient><rect fill='url(%23gradient)' x='0' y='0' width='100%' height='100%'/></svg>");
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
