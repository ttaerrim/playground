import styled from "@emotion/styled";

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 116px;
  height: 80px;
  padding: 30px 24px;
  color: ${({ theme }) => theme.colors["primary-opposite"]};
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  &:active {
    box-shadow: ${({ theme }) =>
      `0 0 0 2px ${theme.colors["primary-opposite"]} inset;`};
  }
`;
