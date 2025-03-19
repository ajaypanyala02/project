import React from 'react';
import {useState} from 'react';
export default function App3(){
     const [email, setEmail] = useState();
     const [password, setPassword] = useState();
     const [msg, setMsg] =useState();
     const handlesubmit=()=>{
        if(email === "john@gmail.com" && password === "123"){
            setMsg("Login Success"); 
        }
        else{
            setMsg("Login Failed");
        }
    }
    return (
        <div>
            <h1>Login Form</h1>
            {msg}
            <p><input type='text' onChange={(event)=>setEmail(event.target.value)} placeholder='enter your email'/></p>
            <p> <input type='password' onChange={(event)=>setPassword(event.target.value)} placeholder='enter your password'/></p>
            <button onClick={handlesubmit}>Submit</button>
        </div>
    )
} 