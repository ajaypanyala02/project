import React from 'react';
import {useState} from 'react';
export default function App3(){
     const [user,setUser] = useState({});
     const [msg, setMsg] =useState();
     const handlesubmit=()=>{
        if(user.email === "john@gmail.com" && user.password === "123"){
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
            <p><input type='text' onChange={(event)=>setUser({...user, email: event.target.value})}/></p>
            <p> <input type='password' onChange={(event)=>setUser({...user, password: event.target.value})} placeholder='enter your password'/></p>
            <button onClick={handlesubmit}>Submit</button>
        </div>
    )
} 