import styled from "@emotion/styled";

export const WholeContainer = styled.div`
  position: relative;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 60px;
  padding: 20px 23px 18px 24px;

  @media (min-width: 1200px) {
    height: 120px;
    padding: 17px 45px 23px 90px;
  }
`;

export const LogoDiv = styled.div`
  display: flex;
`;

export const MenuList = styled.div`
  display: none;
  @media (min-width: 1200px) {
    display: flex;
  }
`;

export const LogoImage = styled("img")`
  cursor: pointer;
`;

export const UserMenu = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 30px;
  @media (min-width: 1200px) {
    gap: 40px;
  }
`;

export const LinkImg = styled("img")`
  width: 22px;
  height: 22px;
  cursor: pointer;
  @media (min-width: 1200px) {
    width: 30px;
    height: 30px;
  }
`;

export const Hamburger = styled("img")`
  display: block;
  width: 20px;
  height: 20px;
  cursor: pointer;
  @media (min-width: 1200px) {
    display: none;
  }
`;

export const UserImg = styled("img")`
  display: none;
  @media (min-width: 1200px) {
    display: block;
    cursor: pointer;
    width: 30px;
    height: 30px;
  }
`;

export const LangDropDown = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors["primary-opposite"]};
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  cursor: pointer;
  img {
    margin-left: 10px;
  }
  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;

export const CreateButton = styled.button`
  display: none;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors["primary-opposite"]};
  filter: contrast(4);
  font-weight: 700;
  font-size: 12px;
  line-height: 150%;
  padding: 26px 16px 26px 56px;
  &:hover {
    filter: contrast(3);
  }
  &:active {
    filter: contrast(2);
  }
  @media screen and (min-width: 1200px) {
    display: block;
  }
`;
