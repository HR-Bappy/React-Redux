import React from "react";
import { useDispatch } from "react-redux";
import {login, logout} from '../feature/user'

export default function Login(){
    
    const dispatch = useDispatch()

    function setValueFun(){
        dispatch(login({
            name:"Hr Bappy",age:22, email:"hrbappy@gmail.com"
        }))
    }
    return(
        <>
        <button onClick={setValueFun}>Login</button>
        <button onClick={() => {
            dispatch(logout())
        }}>Logout</button>
        </>
    )
}