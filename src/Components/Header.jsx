import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <a href="#">
        <img src="images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <a href="#">Menu</a>
      </RightMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100vw;
  min-height: 3.75rem;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0px;
  position: relative;
  z-index:1;
  flex: 1;
  a {
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
    font-family: "Montserrat", sans-serif;
  }
  @media (max-width: 768px) {
    display: none;
  }
  a:hover{
    background-color: black;
    opacity: 0.4;
    border-radius: 3px;
    color: white;
    height:40px;
    justify-content:center;
    display:flex;
    align-items: center;
  } 
`;

const RightMenu = styled.div`
  a {
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
    font-family: "Montserrat", sans-serif;
  }
  a:hover{
    background-color: black;
    opacity: 0.4;
    border-radius: 3px;
    color: white;
  }
`;
