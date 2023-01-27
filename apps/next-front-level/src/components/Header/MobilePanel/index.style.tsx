import styled from "@emotion/styled";
import Image from "next/image";

type PanelContainerProps = {
  showPanel: boolean;
};

export const PanelContainer = styled("div")<PanelContainerProps>`
  display: ${({ showPanel }) => (showPanel ? "flex" : "none")};
  position: absolute;
  background-color: black;

  top: 0;
  right: 0;
  width: 351px;
  height: 100vh;
  z-index: 1;
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const CloseImage = styled(Image)`
  position: absolute;
  top: 20px;
  left: 20px;
`;
