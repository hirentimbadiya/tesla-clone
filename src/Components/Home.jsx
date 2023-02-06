import React from "react";
import styled from "styled-components";
import Section from "./Section";

const text = [
  "Schedule a Demo Drive",
  "Lowest Cost Solar Panels in America",
  "Produce Clean Energy From Your Roof",
];

const leftBtnTxt = ["Buy Now" , "Order Now" , "Shop Now"];
const rightBtnTxt = ["Custom Order" , "Learn More"];

const downArrow = "/images/down-arrow.svg";
function Home() {
  return (
    <Container>
      <Section
        id="modelX"
        model="Model X"
        text={text[0]}
        leftBtn={leftBtnTxt[0]}
        rightBtn={rightBtnTxt[0]}
        arrow={downArrow}
        imgsrc="model-x.jpg"
      />
      <Section
        id="modelS"
        model="Model S"
        text={text[0]}
        leftBtn={leftBtnTxt[0]}
        rightBtn={rightBtnTxt[0]}
        arrow={downArrow}
        imgsrc="model-s.jpg"
      />
      <Section
        id="modelY"
        model="Model Y"
        text={text[0]}
        leftBtn={leftBtnTxt[0]}
        rightBtn={rightBtnTxt[0]}
        arrow={downArrow}
        imgsrc="model-y.jpg"
      />
      <Section
        id="model3"
        model="Model 3"
        text={text[0]}
        leftBtn={leftBtnTxt[0]}
        rightBtn={rightBtnTxt[0]}
        arrow={downArrow}
        imgsrc="model-3.jpg"
      />
      <Section
        id="solarRoof"
        model="Solar Panels"
        text={text[1]}
        leftBtn={leftBtnTxt[1]}
        rightBtn={rightBtnTxt[1]}
        arrow={downArrow}
        imgsrc="solar-panel.jpg"
      />
      <Section
        id="solarPanel"
        model="Solar Roof"
        text={text[2]}
        leftBtn={leftBtnTxt[1]}
        rightBtn={rightBtnTxt[1]}
        arrow={downArrow}
        imgsrc="solar-roof.jpg"
      />
      <Section
        model="Accessories"
        leftBtn={leftBtnTxt[2]}
        rightBtn=""
        imgsrc="accessories.jpg"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  z-index: 10;
`;
