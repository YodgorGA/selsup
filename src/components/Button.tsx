import React,{FC} from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

interface ButtonProps {
    outlined?:boolean,
    black?:boolean,
    children?:string,
    callback?:()=>void,
}

    
export const Button:FC<ButtonProps> = ({callback,black,outlined,children,...ButtonProps}) => {
    const clickHandler = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        event.preventDefault();
        callback && callback();
    }
    return (
        <StyledButton onClick={clickHandler} black={black} outlined={outlined}{...ButtonProps}>{children}</StyledButton>
    )
}
    
const StyledButton = styled.button<ButtonProps>`
    box-sizing:border-box;
    width:150px;
    height:30px;
    font-size:18px;
    border-radius:5px;
    border:0;
    margin: 5px;
    background-color: white;
    ${({outlined})=>outlined && css`
        background-color:transparent;
        border:1px solid #000000;
        &:hover{
            box-shadow: 0px 0px 10px #6e6c6c;
        }
        &:active{
            box-shadow: 0px 0px 5px #6e6c6c;
        }
    `}
    ${({black})=>black && css`
        background-color: #000000;
        color:white;
        border: 1px solid #000000;
        &:hover{
            box-shadow: 0px 0px 10px #6e6c6c;
        }
        &:active{
            box-shadow: 0px 0px 5px #6e6c6c;
        }
    `}
`
export {}