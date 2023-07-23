
import { FC, useState } from 'react'
import {ParamValue} from '../types'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Container } from './Container'

interface InputProps extends ParamValue{
  changeHandler:(paramId:number,value:any)=>void,
  paramType:string,
}

interface StyledInputProps{
  paramType?:string,
}
  
export const Input:FC<InputProps> = ({changeHandler,paramId,value,paramType}) => {
    const [inputValue,setInputValue] = useState<any>(value)
    
    const changeValueHandler = (event:React.ChangeEvent<HTMLInputElement>) =>{
      if(paramType === 'checkbox'){
        setInputValue(event.currentTarget.checked);
        changeHandler(paramId,event.currentTarget.checked)
        
      }else{
        setInputValue(event.currentTarget.value);
        changeHandler(paramId,event.currentTarget.value);
      }
    }
  
    return (
      <Container w='300px' flex fd='row' jc='flex-start' ai='center'>
        <StyledInput paramType={paramType} type={paramType} onChange={changeValueHandler} value={inputValue}/>
      </Container>
      
    )
}

const StyledInput = styled.input<StyledInputProps>`
  height:30px;
  width:300px;
  box-shadow: 0px 0px 5px 0px #7e7c7c;
  border-radius:5px;
  border: 0px;
  padding:0px 5px;
  ${({paramType})=>paramType && paramType === 'checkbox' && css`
    width:30px;
    height:30px;
    box-shadow:none;
  `}
`
