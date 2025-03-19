import React from 'react'
import './App5.css'

export default function App5() {
    const[count, setCount]=React.useState(0);
    const increment=()=>{
        setCount(count+1);
    }
  return (
    <div className='container'>
        <div>
      <div>{count}</div>
      <button onClick={increment}>Click</button>
      </div>
    </div>
  )
}
