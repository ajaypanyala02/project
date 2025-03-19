import React from 'react';
export default function App6() {
    const[hobby, setHobby]= React.useState([]);
    const[text,setText]=React.useState();
    const handlesubmit =()=>{
        setHobby([...hobby,text]);
    }


  return (
    <div>
        <input type='text' placeholder='Enter your hobbies' onChange={(event)=>setText(event.target.value)}></input>
        <button onClick={handlesubmit}>Add</button>
        <hr></hr>
        {hobby && hobby.map((hobby,index)=><li key={index}>{hobby}</li>)
        }
    </div>
  )
}
