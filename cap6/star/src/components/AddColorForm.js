import React,{useRef} from 'react'
import {useInput} from '../Hooks/hooks.js'

export default function AddColorFrom({onNewColor=f=>f})
{
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");
    const submit=e=>{
        e.preventDefault();//previene que haga post, que es el default
        onNewColor(titleProps.value,colorProps.value);
        resetTitle("");
        resetColor("");
    }
    

    return (
        <form onSubmit={submit}>
        <input 
        {...titleProps}
        type="text" 
        placeholder="color title" 
        required/> 
        <input 
        {...colorProps}
        type="color" 
        required/>
        <button>ADD</button> 
        </form>   
    );
}
