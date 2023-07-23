import { FC, useState } from "react";
import { Model, Param } from "../types";
import styled from "@emotion/styled";
import { Input } from "./Input";
import { Label } from "./Label";
import { model, params } from "../model";
import { Button } from "./Button";
import { Container } from "./Container";

export interface ParamEditorProps{

}

export const ParamEditor:FC<ParamEditorProps> = () => {
     

    const getModel = ():Model=>{
        console.log(model);
        
        return model
    }
  
    const editParamValue = (searchableParamId:number,newValue:any) =>{       
        const findedModelValue = model.paramValues.find((paramValue)=>paramValue.paramId === searchableParamId);
        if(findedModelValue !== undefined){
            console.log(newValue);
            
            findedModelValue.value = newValue
        }
    };

    const findModelParamValue = (searchableParamId:number):string =>{
      let valueOfCurrentParamValue:string = '';
      
      const modelParamValue = model.paramValues.find((paramValue)=>paramValue.paramId === searchableParamId);
      if(modelParamValue !== undefined){
        valueOfCurrentParamValue = modelParamValue.value;
      }
      
      return valueOfCurrentParamValue
    }

    return (
      <Main>
        <Form>
          {
            params.map((param:Param)=>{
              return (
                <FormItem key={Math.random()}>  
                  <Label name={param.name} id={param.id} type={param.type}/>
                  <Input 
                    changeHandler={editParamValue} 
                    value={findModelParamValue(param.id)} 
                    paramId={param.id}
                    paramType={param.type}
                  />
                </FormItem>
              )
            })
          }
          <Container flex jc="center" w="100%" margin="20px 0px 0px 0px">
            <Button outlined >Set model</Button>
            <Button callback={getModel} black>Get model</Button>
          </Container>
        </Form>
      </Main>
    );
  }

  const Main = styled.main`
  font-family: "Open Sans";
  display:flex;
  flex-direction:column;
  height:100vh;
  width:100vw;
  justify-content:center;
  align-items:center;
`

const Form = styled.form`
  width:500px;
  height: 300px;
  box-shadow: 0px 0px 10px 0px #7e7c7c;
  border-radius:10px;
  box-sizing:border-box;
  padding: 20px;
`
const FormItem = styled.div`
  width:100%;
  height:30px;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  margin-bottom:10px;
`
