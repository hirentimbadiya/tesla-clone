import React from "react";
import styled from "styled-components";
import Section from "./Section";

const text = "Schedule a Demo Drive";

const downArrow = "/images/down-arrow.svg";
function Home() {
  return (
    <Container>
      <Section
        model="Model S"
        text={text}
        leftBtn="Buy Now"
        rightBtn="Custom Order"
        arrow={downArrow}
        imgsrc="model-s.jpg"
      />
      <Section
        model="Model X"
        text={text}
        leftBtn="Buy Now"
        rightBtn="Custom Order"
        arrow={downArrow}
        imgsrc="model-x.jpg"
      />
      <Section
        model="Model Y"
        text={text}
        leftBtn="Buy Now"
        rightBtn="Custom Order"
        arrow={downArrow}
        imgsrc="model-y.jpg"
      />
      <Section
        model="Model 3"
        text={text}
        leftBtn="Buy Now"
        rightBtn="Custom Order"
        arrow={downArrow}
        imgsrc="model-3.jpg"
      />
      <Section
        model="Solar Panels"
        text="Lowest Cost Solar Panels in America"
        leftBtn="Order Now"
        rightBtn="Learn More"
        arrow={downArrow}
        imgsrc="solar-panel.jpg"
      />
      <Section
        model="Solar Roof"
        text="Produce Clean Energy From Your Roof"
        leftBtn="Order Now"
        rightBtn="Learn More"
        arrow={downArrow}
        imgsrc="solar-roof.jpg"
      />
      <Section
        model="Accessories"
        leftBtn="Shop Now"
        rightBtn=""
        imgsrc="accessories.jpg"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
