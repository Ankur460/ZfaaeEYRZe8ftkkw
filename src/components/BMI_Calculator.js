import React, { useState } from 'react'

const BMI_Calculator = () => {
    const [weight,setWeight]=useState(0);
    const [height,setHeight]=useState(0);
    const [bmiResult,setBmiResult]=useState(0);

    const handlerBMICalculator=()=>{
        const validWight=parseFloat(weight);
        const validHeight=parseFloat(height);
        //checking the valid height and weight
        if(validWight>=1.0&&validWight<=300.0&&validHeight>=0.1&&validHeight<=3.0){
            const bmi=validWight/Math.pow(validHeight,2);
            setBmiResult(bmi.toFixed(1)) //Round BMI to 1 decimal place
        }else{
            setBmiResult(null);
            alert("Invalid Weight Or Height");
            return;
        }
    }
  return (
    <div>
         <h2>BMI Calculator</h2>
         <div>
            <label htmlFor="wightInput">Wight (Kg):</label>
            <input type="number" name="Wight" id="weightInput" step="0.1" min='1.0' max='300.0' onChange={(e)=>{setWeight(e.target.value)}} />
         </div>
         <div>
            <label htmlFor="heightInput">Height (m):</label>
            <input type="number" name="height" id="heightInput" step="0.01" min='0.1' max='3.0' onChange={(e)=>setHeight(e.target.value)}/>
         </div>
         <div>
            <button onClick={handlerBMICalculator}>Calculate BMI</button>
            {bmiResult!==null&&(<p>Your BMI is:{bmiResult}</p>)}
         </div>
    </div>
  )
}

export default BMI_Calculator