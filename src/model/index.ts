import {Model,Param} from '../types'

export const model:Model = {
    paramValues: [
      {
        paramId:1,
        value:'Повседневное'
      },
      {
        paramId:2,
        value:24,
      },
      {
        paramId:3,
        value:24,
      },
      {
        paramId:4,
        value:false,
      }
    ],
    colors: [],
}

export const params:Param[] = [
    {
      id:1,
      name:"Назначение",
      type:'text'
    },
    {
      id:2,
      name:"Длинна",
      type:"number",
    },
    {
      id:3,
      name:"Высота",
      type:'number',
    },
    {
      id:4,
      name:"Стерильно",
      type:'checkbox',
    }
]