import React, { useState } from 'react';
import './App.css';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import TextContent from './component/TextContent';
import About from './component/About';

function App() {
  const [mode, setMode] = useState("light")
  const [text, setText] = useState("Enable Dark Mode")
  const [alert, setAlert] = useState(null)

  const alertMsg = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setText("Enable Light Mode")
      alertMsg("Dark Mode has been enabled", "success")
      document.body.style.backgroundColor = 'gray'
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light')
      setText("Enable Dark Mode")
      alertMsg("Light Mode has been enabled", "success")
      document.body.style.backgroundColor = 'white'
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <div className="App">
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} text={text} />
      <Alert alert={alert} />

      <div className="container my-3">
        <TextContent text="Enter The Text analyse to below" mode={mode} />
        {/* <About /> */}
      </div>

    </div>
  );
}

export default App;
