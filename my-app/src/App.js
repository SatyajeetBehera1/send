// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type)=>{
    setalert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
      setalert(null);
    },2000);
  }

  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.background='white';
      showAlert("Light mode has been enabled","success")
    }
    else{
      setMode('dark');
      document.body.style.background='grey';
      showAlert("Dark mode has been enabled","success")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils2" aboutText="AboutUs" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        {/* <Alert alert="This is alert"/> */}
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
            </Route>
          </Switch>
        </div>
        {/* <About/> */}
      </Router>
    </>
  );
}

export default App;