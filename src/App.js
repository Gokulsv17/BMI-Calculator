import { useState } from 'react';
import './App.css';
// import BMICalculator from './bmi-calc/bmi_calculator';
import Pie from "./pie/pie"
import BMI2 from './bmical2/bmi2';
function App() {
  // const [bmiValue,setBmiValue]=useState()
  // const [bmiContent,setBmiContent]= useState("")
  // const [bmiDegValue,setBmiDegValue] =useState("45")
  return (
   
    <div className="App">
   {/* <BMICalculator bmiValue={setBmiValue} bmiCont={setBmiContent} bmiDeg={setBmiDegValue}/> */}
   <BMI2 />
   {/* <Pie bmiValue={bmiValue} bmiCont={bmiContent}/> */}
   </div>
  );
}

export default App;
