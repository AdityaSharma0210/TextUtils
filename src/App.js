import { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";


function App() {

  const [mode,setMode]=useState('light');
  
  const toggleMode = ()=>{

    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor="#1a375c";
      document.body.style.color="white";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      document.body.style.color="black";

    }
  }

  const [alert, setAlert] = useState(null);
  
  const showAlert = (message) => {
    setAlert({
        msg: message
    })
    setTimeout(() => {
        setAlert(null);
    }, 1800);
}

  return (
    <>
    <div>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Textform showAlert={showAlert} heading="Enter Text to Analyze" mode={mode}/>
    </div>
    </>
    
  );
}

export default App;
