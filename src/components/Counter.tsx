import React from 'react';
import styled from "styled-components";
import AnimatedNumber from "react-animated-numbers";


type PropsType = {
    counter: ()=>void
    mines:()=>void
    getValue:number
}

export const Counter = (props:PropsType) => {

    return (
        <Div_Wrapper>
            <Div_TodoContainer>
            <Div_Value>
                <AnimatedNumber
                    animateToNumber={props.getValue}
                    fontStyle={{ fontSize: 40, color: "#2D3142"}}
                />
            </Div_Value>
                <Div_Config>
                    <Div_MyContainer>
                        <Div_Button onClick={() => props.counter()}>+</Div_Button>
                        </Div_MyContainer>
                    <Div_MyContainer>
                        <Div_Button onClick={() => props.mines()}>-</Div_Button>
                    </Div_MyContainer>
                </Div_Config>
            </Div_TodoContainer>
        </Div_Wrapper>
    );
};


export const Div_Wrapper = styled.div`
  width: 100vw;
  height: 80vh;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Div_TodoContainer = styled.div`
  max-width: 550px;
  padding: 4rem;
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
export const Div_Value = styled.div`
  display: flex;
  justify-content: center;
  font-size: medium;
`
export const Div_Config = styled.div`
  display: flex;
  margin-top: 10px;
  -webkit-box-pack: center;
  justify-content: center;
`
export const Div_MyContainer = styled.div`
  margin: 1rem;
`
export const Div_Button = styled.div`
  display: flex;
  font-weight: bold;
  height: 1rem;
  width: 1rem;
  justify-content: center;
  align-items: center;
  border: 2px solid #4F5D75;
  border-radius: 50%;
  color: #EF8354;
  font-size: 20px;
  background-color: #ffffff;
  padding: 25px;
  box-shadow: rgba(80, 220, 251, 0.08) 6px 4px 8px 0px;
`



