import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor, resetColor } from "../feature/theme";


export function ColorChange(){

    const dispatch = useDispatch()

    const [color, setColor] = useState('') 
    const [BG, setBG] = useState('') 

    function changeColorFun(){
        dispatch(changeColor({color:color,background:BG}))
        console.log(color,BG)
    }

    function resetColorFun(){
        dispatch(resetColor())
    }

    return(
        <div style={{margin:"2rem"}}>
        <label>Color: </label>
        <input type="text" placeholder="red / #aaaaa" onChange = {(e) => {
            setColor(e.target.value)
        }} />
        <br />
        <label>BG Color: </label>
        <input type="text" placeholder="red / #aaaaa" onChange = {(e) => {
            setBG(e.target.value)
        }} />
        <br />
        <br />
        
        <button onClick={changeColorFun}>Change Color</button>
        <button onClick={resetColorFun}>Reset Color</button>
        </div>
    )
}