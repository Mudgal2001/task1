import React, { useEffect, useState } from "react";
import Axios from "axios";
import Header from "./components/header/Header";
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
          <Header title = "task"/>
    </div>
  );
}

export default App;
