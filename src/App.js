import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import {useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  // Use state hook for Dark/Light mode and alert option
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type)=>{
    setAlert({
      msg:msg,
      type:type
    })
  }

  // Certain timeout function to auto hide alert bar
  setTimeout(() => {
    setAlert(null) 
  }, 1000);

  // Toggling style for dark/light mode
  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';  
      showAlert("Light Mode has been enabled", "Success");    

    }else{
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been enabled", "Success")   
    }
 
  }
  return(
    <>
    <Router>
    <Navbar title="GitApp" mode={mode}  toggleMode = {toggleMode}  />
    <Alert  alert={alert} />

    <Switch>
          <Route path="/about">
            <About mode={mode} />
          </Route>
          
          <Route path="/">
              <SearchBar mode={mode} showAlert={showAlert} />
          </Route>
    </Switch>

    </Router>
    </>
  );
}

export default App;
