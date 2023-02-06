import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section(props) {
  return (
    <Wrap bgImg={props.imgsrc} id={props.id}>
      <Fade top>
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
  z-index: -1;
  h1 {
    color:black;
    font-family: "Alata", sans-serif;
    font-weight: bolder;
    font-size: 2.4rem;
    letter-spacing: 3px;
    line-height:1.8;
  }
  p {
    text-decoration: underline;
    font-family: "Ubuntu", sans-serif;
    cursor: pointer;
    :hover{
      color:dimgray;
    }
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
  :hover,
  :focus,
  :active {
    background: black;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.75;
  color: black;
  :hover {
    background: white;
  }
  @media (max-width: 768px) {
    margin-bottom: 0px;
  }
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  margin: 0 283px;
  cursor:pointer;
  animation: animationDown infinite 1.5s;
`;

const Buttons = styled.div``;
