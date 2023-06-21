import React, { useEffect, useState } from "react";
import Axios from "axios";
function App() {
  const [data,setData] = useState("");

  const getData = async ()=>{
    const response = await Axios.get("http://localhost:3001/testAPI");
    setData(response.data);
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="App">
          {data}
    </div>
  );
}

export default App;
