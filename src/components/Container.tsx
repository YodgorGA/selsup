import React,{FC} from 'react'
import styled from '@emotion/styled'

interface ContainerProps{
    children:React.ReactNode;
    flex?:boolean,
    jc?:string,
    ai?:string,
    fd?:string,
    w?:string,
    h?:string,
    margin?:string;
}

    
export const Container:FC<ContainerProps> = ({margin,ai,fd,flex,jc,children,...ContainerProps}) => {
    
    return (
        <StyledContainer margin={margin} ai={ai} fd={fd} flex={flex} jc={jc}{...ContainerProps}>{children}</StyledContainer>
    )
}
    
const StyledContainer = styled.div<ContainerProps>`
    display:${(flex)=>flex && 'flex'||'block'};
    justify-content:${({jc})=> jc || 'flex-start'};
    align-items:${({ai})=>ai || 'start'};
    flex-direction:${({fd})=>fd || 'row'};
    width:${({w})=>w || '100%'};
    height:${({h})=>h || 'fit-content'};
    margin:${({margin})=>margin || "0px 0px 0px 0px"}
`
export {}