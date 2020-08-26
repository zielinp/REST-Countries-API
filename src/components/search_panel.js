import React from "react"
import styled from "styled-components"

const StyledInput = styled.input`
  height: 3rem;
  width: 25rem;
  box-shadow: 0 0 10px 0 var(--boxShadowColor);
  background-color: white;
  padding-left: 2rem;
  margin: 2rem 2rem 0 2rem;
  border: none;
  border-radius: 5px;
  /* font-family: "Font Awesome 5 Brands"; */
`

function SearchPanel({ onChange }) {
  return (
    <>
      <StyledInput
        type="text"
        placeholder="Search for a country..."
        onChange={onChange}
      ></StyledInput>
    </>
  )
}

export default SearchPanel
