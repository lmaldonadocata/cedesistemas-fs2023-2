
import styled from "styled-components"
import { COLORS, GlobalStyles } from "../../../../globalStyles"

const CategroryWrapper = styled.div `
  width: 80px;
  height: 80px;
  background-color: ${COLORS.secondary} ;
  border-radius: 5px;
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: #fff;
    font-size: 0.6em;
    line-height: 0;

  }
  &:hover{
   cursor: pointer;
   background-color: ${COLORS.primary}
  }
`



const IconWrapper = styled.div `
svg {
  color: #fff;
  font-size: 1.9em;
}
`

export const Category = (props) => {

  return (
    <CategroryWrapper>
      <IconWrapper>{props.icon}</IconWrapper>
      <p>{props.name}</p>
    </CategroryWrapper>
  )
}
