import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import TrafficSig from './components/TrafficSig';
import About from './components/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setmode] = useState("dark")
  const [alert, setalert] = useState(null)

  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Theme set: light", "success")
    } else {
      setmode("dark");
      document.body.style.backgroundColor = '#222';
      showAlert("Theme set: dark", "success")
    }
  }

  const showAlert = (message, type) => {
    // console.log(message, type)
    setalert({
      msg: message,
      type: String(type),
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  return (
    <>
      <BrowserRouter basename='/Reactjs_tut'>
        {/* common loading components */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />}></Route>

          <Route exact path="/trafficSig/" element={<TrafficSig />}></Route>

          <Route exact path="/about/" element={<About mode={mode} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
