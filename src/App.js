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

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
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
            <Route path="/about" element={<About />} />

            <Route
              path="/"
              element={<Forms showalert={showalert} hea="enter the text below" mode={mode} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
