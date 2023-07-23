import { HTMLInputTypeAttribute } from "react";

export interface Param {
id: number;
name: string;
type: HTMLInputTypeAttribute
}


export interface ParamValue{
paramId: number;
value: any;
}


export interface Model {
paramValues: ParamValue[];
colors: Color[];
}


export interface Color{

}



export {}