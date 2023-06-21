import React, { useState } from 'react'
import "./header.css"
const Header = (props) => {
  const [data,setData] = useState(()=>{
    return 0;
  })
  function increment() {
     setData(prevData => prevData+1);
  }
  return (
    <div >
      <button onClick={increment}>+</button>
      <span>{data}</span>
    </div>
  )
}

export default Header