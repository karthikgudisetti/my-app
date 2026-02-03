import './App.css';
import Navbar from './components/Navbar';
import Forms from './components/Forms';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setalert(null);
    }, 3000);
  };
const removeBodyClass=()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
     document.body.classList.remove('bg-warning');

  }
  const togglemode = (cls) => {
    console.log(cls);
    removeBodyClass();
  
    document.body.classList.add('bg-'+cls);

    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("Dark mode has been enabled", "success");
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="karthik"
          lin="about u r self"
          mode={mode}
          togglemode={togglemode}
        />

        <Alert alert={alert} />

        <div className="container">
          <Routes>
            <Route path="/about" element={<About  mode={mode}/>} />

            <Route
              path="/"
              element={<Forms showalert={showalert} hea="select text utils-uppercase,lowercase,cleartext, copy text." mode={mode} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
