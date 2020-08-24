import React from "react"
import styled from "styled-components"

const StyledSelect = styled.select`
  height: 3rem;
  width: 25rem;
  box-shadow: 0 0 10px 0 rgba(199, 199, 199, 1);
  background-color: white;
  padding-left: 2rem;
  margin: 2rem 2rem 0 2rem;
  border: none;
  border-radius: 5px;

  /* appearance: none; */

  option:checked {
    background-color: grey !important;
  }
`

// const Select = () => (
//   <>
//     <StyledSelect onChange={handleChange}>
//       <option value="" disabled selected>
//         Filter by Region
//       </option>
//       <option value="Africa">Africa</option>
//       <option value="America">America</option>
//       <option value="Asia">Asia</option>
//       <option value="Europe">Europe</option>
//       <option value="Oceania">Oceania</option>
//     </StyledSelect>
//   </>
// )

function Select({ onChange }) {
  return (
    <StyledSelect onChange={onChange}>
      <option value="" selected>
        Filter by Region
      </option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </StyledSelect>
  )
}

export default Select
