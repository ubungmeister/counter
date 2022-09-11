import React from 'react';
import styled from "styled-components";
import AnimatedNumber from "react-animated-numbers";
import {NavLink} from "react-router-dom";


type PropsType = {
    counter: () => void
    mines: () => void
    getValue: number
}

export const Counter = (props: PropsType) => {

    return (
        <DivWrapper>
            <DivTodoContainer>
                <DivValue>
                    <AnimatedNumber
                        animateToNumber={props.getValue}
                        fontStyle={{fontSize: 40, color: "#2D3142"}}
                    />
                </DivValue>
                <DivConfig>
                    <DivMyContainer>
                        <DivButton onClick={() => props.counter()}>+</DivButton>
                    </DivMyContainer>
                    <DivMyContainer>
                        <DivButton onClick={() => props.mines()}>-</DivButton>
                    </DivMyContainer>
                    <DivMyContainer>
                        <DivSettings>
                            <NavLink style={{textDecoration: 'none'}} to='settings'>
                                <h2>⚙️</h2>
                            </NavLink></DivSettings>
                    </DivMyContainer>
                </DivConfig>
            </DivTodoContainer>
        </DivWrapper>
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
export const DivValue = styled.div`
  display: flex;
  justify-content: center;
  font-size: medium;
`
export const DivConfig = styled.div`
  display: flex;
  margin-top: 10px;
  -webkit-box-pack: center;
  justify-content: center;
`
export const DivMyContainer = styled.div`
  margin: 1rem;
`
export const DivButton = styled.div`
  display: flex;
  font-weight: bold;
  height: 1rem;
  width: 1rem;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 50%;
  color: #EF8354;
  font-size: 25px;
  background-color: #ffffff;
  padding: 25px;
  box-shadow: rgba(80, 220, 251, 0.08) 6px 6px 7px 0px;
  text-decoration: none;
  cursor: pointer;
`
export const DivSettings = styled.div`
  display: flex;
  font-weight: bold;
  height: 1rem;
  width: 1rem;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  padding: 25px;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: rgba(80, 220, 251, 0.08) 6px 4px 8px 0px;
  text-decoration: none;
`



