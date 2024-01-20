import React from "react";
import { useState } from "react";


const InputType =(props)=>{

     const [inputText, setInputText]= useState("")



    return(
        <>
        <input type="text" 
        value={inputText}
        placeholder="Type the ToDo list"
        onChange={e=>{
            setInputText(e.target.value)
        }}
        
        />

        <button onClick={()=>{
            props.addList(inputText)
            setInputText("")
        }}>Add</button>
        <hr className="hr-line"/>
        <h2>{inputText}</h2>
        </>
    )
}

export default InputType;