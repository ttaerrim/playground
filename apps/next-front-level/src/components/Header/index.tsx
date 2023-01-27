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
          <SubText>The New Land of Opportunity</SubText>
        </LogoDiv>
        <MenuList>
          {["play", "creator", "챌린지", "market", "about"].map((item) => (
            <Menu name={item} key={item} />
          ))}
        </MenuList>
        <MobileUserMenu>
          <Image
            src="/images/user.svg"
            width={20}
            height={20}
            alt="user logo"
          />
          <Image
            src="/images/hamburger.svg"
            width={15}
            height={20}
            alt="hamburger logo"
            onClick={handlePanel}
          />
        </MobileUserMenu>
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

const SubText = styled.p`
  display: none;
  @media (min-width: 1200px) {
    display: block;
    margin-left: 33px;
    color: #fff;
  }
`;

const MobileUserMenu = styled.div`
  display: flex;
  gap: 30px;
  @media (min-width: 1200px) {
    display: none;
  }
`;

/*  css order eslint */
