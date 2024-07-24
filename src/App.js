import './App.css';
import Alerts from './components/4.Alerts';
// import About from './components/About';
import Navbar from './components/1.Navbar';
import TextForm from './components/2.TextForm';
import React, { useState } from 'react';
// import { BrowserRouter, Route, Routes } from "react-router-dom";




// let Name = "Bharath";       //if we write <b>Bharath</b> assuming that it'll become bold . It'll not because it'll not import external html..It'll nprint like <b>Bharath</b>    
function App() {
  const [mode, setMode] = useState('light');    //Default mode is white. Whether the dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  //This is for Alert messages
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  // This is for Dark Mode and Light Mode
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#232442'
      showAlert("Dark mode enabled", "success")
      document.title = 'Texto - Dark Mode'

      // setInterval(() => {                                         it is used to interrupt the title of website..when you enable this the title will change according to given text in given time interval
      //   document.title = "TextUtils is Amazing website"
      // },1000);
      // setInterval(() => {
      //   document.title = "Install Now"
      // },1500);

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enabled", "success")
      document.title = 'Texto - Light Mode'

    }
  }


  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title="Texto" aboutTextUtils="About" mode={mode} toggleMode={toggleMode}/>
        {/* <Navbar/>        it's for default props*/}
        <Alerts alert={alert} />
        <div className="container my-3" mode={mode}>
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />}></Route> */}
            {/* <Route exact path="/" element= {*/} <TextForm heading="Enter text to analyze " mode={mode} showAlert={showAlert}/>  {/*}></Route> */}   {/*We're passing props here , it'll gets from Navbar as we have imported navbar too...We can also change the title here(It is used to reuse the application)...line 2 was automtically written(imported) by itself when we write this*/}
          {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );

}

export default App;                           
