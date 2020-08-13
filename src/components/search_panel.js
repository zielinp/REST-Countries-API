import React from "react"
import styled from "styled-components"

const StyledInput = styled.input`
  height: 3rem;
  width: 25rem;
  box-shadow: 0 0 10px 0 rgba(199,199,199,1);
  background-color: white;
 padding-left: 2rem;
 margin: 2rem 2rem 0 2rem;
 border:none;
 border-radius: 5px;
`

const SearchPanel = () => (
  <>
    <StyledInput type="text" placeholder="Search for a country...">

    </StyledInput>
  </>
)

export default SearchPanel
