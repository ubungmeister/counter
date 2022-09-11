import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Settings} from "./components/Settings";


function App() {
    const [countSum, setCountSum] = useState(0)
    const [value, maxValue] = useState(0)

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setCountSum(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(countSum))
        //potrebujeme na localStorage string proto JSON..=toString
    }, [countSum])

    const counter = () => {
        if (countSum < value) {
            setCountSum(countSum + 1)
        }
    }
    const mines = () => {
        if (countSum > 0) {
            setCountSum(countSum - 1)
        }
    }


    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Counter counter={counter} mines={mines} getValue={countSum}/>}/>
                <Route path="settings" element={<Settings startValue={setCountSum} maxValue={maxValue}/>}/>
            </Routes>
        </BrowserRouter>
    );
};


export default App;