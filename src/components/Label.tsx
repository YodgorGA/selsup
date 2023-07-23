import { FC } from "react"
import { Param } from "../types"
import styled from "@emotion/styled"

export const Label:FC<Param> = ({id,name,type}) =>{
    return (
      <ParamName>{name}</ParamName>
    )
}
  
  const ParamName = styled.label`
    font-size:22px;
    font-weight:400;
  `
  