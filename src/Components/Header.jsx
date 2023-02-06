import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [MenuNavStat, setMenuNavStat] = useState(false);
  return (
    <Container>
      <a href="/">
        <img src="images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#modelS">Model S</a>
        <a href="#model3">Model 3</a>
        <a href="#modelX">Model X</a>
        <a href="#modelY">Model Y</a>
        <a href="#solarRoof">Solar Roof</a>
        <a href="#solarPanel">Solar Panels</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <a href="#" onClick={() => setMenuNavStat(true)}>
          Menu
        </a>
      </RightMenu>
      <RightMenuSmall>
        <a href="#" onClick={() => setMenuNavStat(true)}>
          Menu
        </a>
      </RightMenuSmall>
      <MenuNav show={MenuNavStat}>
        <CloseWrapper>
          <CustomClose onClick={() => setMenuNavStat(false)} />
        </CloseWrapper>
        <li>
          <a href="#modelX">Model X</a>
        </li>
        <li>
          <a href="#modelY">Model Y</a>
        </li>
        <li>
          <a href="#model3">Model 3</a>
        </li>
        <li>
          <a href="#modelS">Model S</a>
        </li>
        <li>
          <a href="#solarRoof">Solar Roof</a>
        </li>
        <li>
          <a href="#solarPanels">Solar Panels</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Demo Drive</a>
        </li>
        <li>
          <a href="#">Insurance</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
      </MenuNav>
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
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0px;
  position: relative;
  z-index: 1;
  flex: 1;
  a {
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
    font-family: "Montserrat", sans-serif;
    vertical-align: middle;
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    overflow: hidden;
    border-radius: 10px;
    height: 30px;
    display: flex;
    align-items: center;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    :hover,
    :active,
    :focus {
      background: black;
      opacity: 0.4;
      color: white;
    }
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0px;
  a {
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
    font-family: "Montserrat", sans-serif;
    vertical-align: middle;
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    overflow: hidden;
    height: 30px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    :hover,
    :active,
    :focus {
      background: black;
      opacity: 0.4;
      color: white;
    }
  }
  @media(max-width: 768px) {
    display: none;
  }
`;
const RightMenuSmall = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0px;

  a {
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
    font-family: "Montserrat", sans-serif;
    vertical-align: middle;
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    overflow: hidden;
    height: 30px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    :hover,
    :active,
    :focus {
      background: black;
      opacity: 0.4;
      color: white;
    }
  }
  @media(min-width: 768px) {
    display: none;
  }
 `

const MenuNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.85);
  width: 18.5rem;
  z-index: 16;
  list-style: none;
  padding: 1.25rem;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
  }
  li {
    cursor: pointer;
    padding: 0.75rem 0;
    border-bottom: 1px solid rbga(0, 0, 0, 0.2);
    vertical-align: middle;
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    overflow: hidden;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border-radius: 10px;
    :hover,
    :active,
    :focus {
      a {
        color: white;
      }
      background-color: rgba(0, 0, 0, 0.6);
    }
    a {
      font-weight: 600;
      font-family: "Montserrat", sans-serif;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
