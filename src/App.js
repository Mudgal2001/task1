import React, { useEffect, useState } from "react";
import Axios from "axios";
import Header from "./components/header/Header";
import Register from "./pages/Register/Register";
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
          <Register/>
    </div>
  );
}

export default App;
