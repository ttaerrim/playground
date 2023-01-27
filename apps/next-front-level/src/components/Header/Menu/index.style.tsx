import styled from "@emotion/styled";

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 116px;
  height: 80px;
  padding: 30px 24px;
  color: #fff;
  background-color: hotpink;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  &:active {
    box-shadow: 0 0 0 2px #fff inset;
  }
`;
