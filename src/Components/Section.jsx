import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section(props) {
  return (
    <Wrap bgImg={props.imgsrc}>
      <Fade bottom>
        <ItemText>
          <h1>{props.model}</h1>
          <p>{props.text}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{props.leftBtn}</LeftButton>
            {props.rightBtn !== "" && (
              <RightButton>{props.rightBtn}</RightButton>
            )}
          </ButtonGroup>
        </Fade>
        <DownArrow src={props.arrow} />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/images/${props.bgImg}")`};
  display: flex;
  flex-direction: column; // puts content vertical
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  h1 {
    font-family: "Alata", sans-serif;
    font-weight: bolder;
    font-size: 2.4rem;
  }
  p {
    text-decoration: underline;
    font-family: "Ubuntu", sans-serif;
    cursor: pointer;
  }
`;

const ButtonGroup = styled.div`
  justify-content: center;
  display: flex;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.75);
  height: 40px;
  width: 256px;
  color: white;
  font-family: Gotham SSm, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-weight: 550;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  opacity: 0.9;
  font-size: 14px;
  cursor: pointer;
  margin: 0.5rem;
`;
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.75;
  color: black;
  @media (max-width: 768px) {
    margin-bottom: 0px;
  }
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  margin: 0 283px;
  animation: animationDown infinite 1.5s;
`;

const Buttons = styled.div``;
