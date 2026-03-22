import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './App.module.css'
import Display from './Components/display';
import ButtonsContainer from './Components/ButtonsContainer';
import { useState } from 'react';


function App() {
  let [calval, setcalval] = useState("");
  const onButtonClick = (buttonText)=>{
    if(buttonText === "C"){
       setcalval("")
    }
    else if(buttonText === "="){
      const result = eval(calval)
      setcalval("Hello World!")
  }
  else{
      const newDisplayValue= calval + buttonText;
      setcalval(newDisplayValue)
  }
  }
  return (

<center>
      <div className={styles.calculator}>
     <Display  displayValue={calval} />
     <ButtonsContainer
      onButtonClick ={onButtonClick}/>
    </div>
  </center>  
);
}

export default App
