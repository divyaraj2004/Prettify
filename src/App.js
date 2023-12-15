import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import React, { useState } from "react";

function App() {
  //it cheacks dark mode is enable or not
  const [Mode, setMode] = useState("light");

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.background = "#3a4045";
    } else {
      setMode("light");
      document.body.style.background = "white";
    }
  };
  return (
    <>

      <Navbar title="prettify.com" mode={Mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Textarea heading="Enter your Text"  mode={Mode}></Textarea>
      </div>
      </>   
  );
}

export default App;
