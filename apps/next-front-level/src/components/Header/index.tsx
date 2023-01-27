import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "styles";
import Menu from "./Menu";
import MobilePanel from "./MobilePanel";
import * as S from "./index.style";

export default function Header() {
  const [showPanel, setShowPanel] = useState<boolean>(false);
  const handlePanel = () => {
    setShowPanel((showPanel) => !showPanel);
  };
  return (
    <ThemeProvider theme={theme}>
      <S.WholeContainer>
        <S.HeaderContainer>
          <S.LogoDiv>
            <S.LogoImage src="/images/logo.svg" alt="header logo" />
          </S.LogoDiv>
          <S.MenuList>
            {["play", "creator", "챌린지", "market", "about"].map((item) => (
              <Menu name={item} key={item} />
            ))}
          </S.MenuList>
          <S.UserMenu>
            <S.LinkImg src="/images/link.svg" alt="link logo" />
            <S.Hamburger
              src="/images/hamburger.svg"
              alt="hamburger logo"
              onClick={handlePanel}
            />
            <S.UserImg src="/images/user.svg" alt="user logo" />
            <S.LangDropDown>
              KR
              <img src="/images/down-arrow.svg" alt="down arrow" />
            </S.LangDropDown>
            <S.CreateButton>CREATE</S.CreateButton>
          </S.UserMenu>
        </S.HeaderContainer>
        <MobilePanel showPanel={showPanel} handlePanel={handlePanel} />
      </S.WholeContainer>
    </ThemeProvider>
  );
}

/*  css order eslint */
