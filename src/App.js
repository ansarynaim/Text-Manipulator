
import "./App.css";
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not
  const [alert,setAlert]= useState(null);

const showAlert = (message,type)=>{
  setAlert({
    msg:message,
    type:type
  })

  setTimeout(() => {
    setAlert(null);
  }, 2000);
}



  const toggleMode = ()=>{
   if (mode==='light') {
     setMode('dark')
     document.body.style.backgroundColor='#042743'
     showAlert("Dark mode has Been enabled","Success");
   } else{
     setMode('light')
     document.body.style.backgroundColor='white'
     showAlert("light mode has Been enabled","Success");
   }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Switch> */}
          {/* <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter Your Words Here to manipulate it!!"  mode={mode} />
          {/* </Route> */}
     {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
