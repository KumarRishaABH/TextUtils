import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React,{useState} from 'react';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [alert, setAlert]=useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    }
  setTimeout(()=>{

    setAlert(null);
  },3000);
  
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>
  {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#3c5074";
      showAlert("Dark mode has been enabled","success");
      
    }  
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      
    }
  }
  
  return (
    <>
      <Router>
        <Navbar
          title="TextUtil"
          home="Home"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />} />

          <Route
            exact path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter your text here "
                mode={mode}
              />
            }/>
        </Routes>
        </div>
      </Router>
      
    </>
  );
}


export default App;
