import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";


function App() {
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
    //potrebujeme na localStorage string proto JSON..=toString
  }, [countSum])

  const counter = ()=>{
    setCountSum(countSum +1)
  }
  const mines = ()=>{
    setCountSum(countSum -1)
  }

  return (
      <div>
        <Counter
            counter={counter}
            mines={mines}
            getValue= {countSum}
        />
      </div>
  );
};


export default App;