import React, { useState, useEffect } from "react";
import styled from "styled-components";
import one from "../Assets/dice-1.png";
import two from "../Assets/dice-2.png";
import three from "../Assets/dice-3.png";
import four from "../Assets/dice-4.png";
import five from "../Assets/dice-5.png";
import six from "../Assets/dice-6.png";
import zero from "../Assets/dice-1.png";
import victory from "../Assets/victory.jpg";

const GameScreen = () => {
  const [picker, setPicker] = useState(0);
  const [computer, setComputer] = useState(0);

  const computerValue = (max, min) => {
    return setComputer(Math.floor(Math.random() * (max - min + 1) + min));
  };

  // useEffect(() => {
  //   setInterval(() => {
  //     computerValue(5, 1);
  //   }, 5000);
  // }, []);

  return (
    <Container>
      <Wrapper>
        <Title>Taobals Game</Title>
        <Row>
          <RowItems>
            <RowBox>
              {picker === 0 ? (
                <Image src={zero} />
              ) : picker === 1 ? (
                <Image src={one} />
              ) : picker === 2 ? (
                <Image src={two} />
              ) : picker === 3 ? (
                <Image src={three} />
              ) : picker === 4 ? (
                <Image src={four} />
              ) : picker === 5 ? (
                <Image src={five} />
              ) : null}
            </RowBox>
            <Number>
              <DisplayBox
                onClick={() => {
                  setPicker(1);
                  console.log(picker);
                }}
              >
                1
              </DisplayBox>
              <DisplayBox
                onClick={() => {
                  setPicker(2);
                  console.log(picker);
                }}
              >
                2
              </DisplayBox>
              <DisplayBox
                onClick={() => {
                  setPicker(3);
                  console.log(picker);
                }}
              >
                3
              </DisplayBox>
              <DisplayBox
                onClick={() => {
                  setPicker(4);
                  console.log(picker);
                }}
              >
                4
              </DisplayBox>
              <DisplayBox
                onClick={() => {
                  setPicker(5);
                  console.log(picker);
                }}
              >
                5
              </DisplayBox>
            </Number>
            <RowBox1>Me</RowBox1>
          </RowItems>
          <RowItems>
            <RowBox>{computer}</RowBox>
            <Button
              onClick={() => {
                computerValue(5, 1);
              }}
            >
              Press
            </Button>
            <RowBox1>Computer</RowBox1>
          </RowItems>
        </Row>
        <Result>
          <DisplayResult>Result</DisplayResult>
          <DisplayResult>
            {picker === computer ? (
              <Image src={victory} />
            ) : (
              <span>You lost</span>
            )}
          </DisplayResult>
        </Result>
      </Wrapper>
    </Container>
  );
};

export default GameScreen;

const Image = styled.img`
  width: 50px;
  height: 50px;
`;

const DisplayResult = styled.div`
  width: 120px;
  height: 70px;
  display: flex;
  justify-content: center;
  font-weight: bold;
`;
const Button = styled.div`
width:50px; 
height:50px;
border-radius:50%;
background-color:teal;
margin-top 10px;
display:flex;
justify-content:center;
align-items:center;
transition:all 500ms;
transform:scale(1);


:hover{
    cursor:pointer;
    transform:scale(1.2);
}
`;

const Number = styled.div`
  display: flex;
`;
const DisplayBox = styled.div`
  margin: 20px 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  transition: all 500ms;
  transform: scale(1);

  :hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;
const RowBox1 = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: 10px;
`;
const RowBox = styled.div`
  width: 350px;
  height: 250px;
  border-radius: 10px;
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: bold;
`;
const RowItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
const Result = styled.div`
  font-size: 30px;
  margin-top: 30px;
`;
const Row = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
`;
const Title = styled.div`
  font-size: 80px;
  font-weight: bold;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: blue;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 70px;
`;
