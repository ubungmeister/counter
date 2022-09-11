import React, {ChangeEventHandler, useState} from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

type PropsType = {
    maxValue: (value: number) => void
    startValue: (value: number) => void
    // getStartValue: number
    // getMaxvalue: number
}


export const Settings = (props: PropsType) => {

    const [startValue, setStartValue] = useState(1)
    const [maxValue, SetMaxValue] = useState(1)
    const [isActive, setIsActive] = useState(false);

    const onChangehandler=(value:number)=>{
        value > 0? setStartValue(value) : setStartValue(0)
    }

    const onClickHandler=()=>{
        if(maxValue>startValue){
            props.maxValue(maxValue)
            props.startValue(startValue)
        }
        else{ return 'Check your start value'}
    }

    return (
        <div>
            <DivWrapper>
                <DivTodoContainer>
                    <DivConfig>
                    <span>Max value: </span>
                    <input
                        onChange={(e) => SetMaxValue(+e.currentTarget.value)}
                        value={maxValue}  type="number"
                    />
                    </DivConfig>
                    <DivConfig>
                    <span>Start value: </span>
                    <input onChange={(e)=>onChangehandler(+e.currentTarget.value)}
                           value={startValue} type="number"
                    />
                    </DivConfig>
                    <ErrorTxt>{onClickHandler()}</ErrorTxt>
                <DivConfig>
                    <DivButton onClick={onClickHandler}>set</DivButton>
                    <DivButton><NavLink style={{textDecoration: 'none',color:"black"}} to='/'>back</NavLink></DivButton>
                </DivConfig>
                </DivTodoContainer>
            </DivWrapper>
        </div>
    );
};

export const DivWrapper = styled.div`
  width: 100vw;
  height: 80vh;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const DivTodoContainer = styled.div`
  width: 300px;
  height: 150px;
  padding: 4rem;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  gap: 1.5rem;
  box-shadow: #BFC0C0 6px 4px 15px 3px;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 20px;
`
export const DivConfig = styled.div`
  display: flex;
  margin-top: 10px;
  padding-top:10px;
  font-size: 20px;
  gap: 20px;
  font-family: "Lucida Sans";
`
export const ErrorTxt = styled.div`
  font-size: 20px;
  color: coral;
`
export const DivButton = styled.div`
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor:pointer;
  box-shadow: rgba(80, 220, 251, 0.08) 6px 6px 7px 0px;
  
`


