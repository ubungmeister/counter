import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";


function App() {
  const maxValue = 10
  const [countSum, setCountSum] = useState(0)

  useEffect(()=>{
    let valueAsString = localStorage.getItem('counterValue')
    if (valueAsString){
      let newValue = JSON.parse(valueAsString)
      setCountSum(newValue)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('counterValue', JSON.stringify(countSum))
  }, [countSum])

  const counter = (value:number)=>{
    setCountSum(countSum + value)
  }
  const reset = (value:number)=>{
    setCountSum(0)
  }
  if (countSum > maxValue){
    setCountSum(0)
  }


  return (
      <div className='body' >
        <Counter
            counter={counter}
            reset={reset}
            getValue= {countSum}
        />
      </div>
  );
};


export default App;