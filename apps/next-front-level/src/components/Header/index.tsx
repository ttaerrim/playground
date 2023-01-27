import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";
import Menu from "./Menu";
import MobilePanel from "./MobilePanel";

export default function Header() {
  const [showPanel, setShowPanel] = useState<boolean>(false);
  const handlePanel = () => {
    setShowPanel((showPanel) => !showPanel);
  };
  return (
    <WholeContainer>
      <HeaderContainer>
        <LogoDiv>
          <LogoImage src="/images/logo.svg" alt="header logo" />
        </LogoDiv>
        <MenuList>
          {["play", "creator", "챌린지", "market", "about"].map((item) => (
            <Menu name={item} key={item} />
          ))}
        </MenuList>
        <UserMenu>
          <LinkImg src="/images/link.svg" alt="link logo" />
          <Hamburger
            src="/images/hamburger.svg"
            alt="hamburger logo"
            onClick={handlePanel}
          />
          <UserImg src="/images/user.svg" alt="user logo" />
          <LangDropDown>
            KR
            <img src="/images/down-arrow.svg" alt="down arrow" />
          </LangDropDown>
          <CreateButton>CREATE</CreateButton>
        </UserMenu>
      </HeaderContainer>
      <MobilePanel showPanel={showPanel} handlePanel={handlePanel} />
    </WholeContainer>
  );
}

const WholeContainer = styled.div`
  position: relative;
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: hotpink;
  height: 60px;
  padding: 20px 23px 18px 24px;

  @media (min-width: 1200px) {
    height: 120px;
    padding: 17px 45px 23px 99px;
  }
`;

const LogoDiv = styled.div`
  display: flex;
`;

const MenuList = styled.div`
  display: none;
  @media (min-width: 1200px) {
    display: flex;
  }
`;

const LogoImage = styled("img")`
  width: 131px;
  height: 16px;
  cursor: pointer;

  @media (min-width: 1200px) {
    width: 159px;
    height: 20px;
  }
`;

const UserMenu = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 30px;
  @media (min-width: 1200px) {
    gap: 40px;
  }
`;

const LinkImg = styled("img")`
  width: 22px;
  height: 22px;
  @media (min-width: 1200px) {
    width: 30px;
    height: 30px;
  }
`;

const Hamburger = styled("img")`
  display: block;
  width: 20px;
  height: 20px;
  @media (min-width: 1200px) {
    display: none;
  }
`;

const UserImg = styled("img")`
  display: none;
  @media (min-width: 1200px) {
    display: block;
    width: 30px;
    height: 30px;
  }
`;

const LangDropDown = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  img {
    margin-left: 10px;
  }
  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;

const CreateButton = styled.button`
  display: none;
  background: linear-gradient(113.2deg, #f056a3 7.78%, #e81b62 95.8%);
  color: #fff;
  font-weight: 700;
  font-size: 12px;
  line-height: 150%;
  padding: 26px 16px 26px 56px;
  @media screen and (min-width: 1200px) {
    display: block;
  }
`;

/*  css order eslint */
