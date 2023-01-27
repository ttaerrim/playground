import styled from "@emotion/styled";
import Image from "next/image";

type PanelContainerProps = {
  showPanel: boolean;
};

export default function MobilePanel({
  showPanel,
  handlePanel,
}: {
  showPanel: boolean;
  handlePanel: () => void;
}) {
  return (
    <PanelContainer showPanel={showPanel}>
      <CloseImage
        src="/images/close.svg"
        width={28}
        height={28}
        alt="close"
        onClick={handlePanel}
      />
    </PanelContainer>
  );
}

const PanelContainer = styled("div")<PanelContainerProps>`
  display: flex;
  display: ${({ showPanel }) => (showPanel ? "flex" : "none")};
  position: absolute;
  background-color: black;

  top: 0;
  right: 0;
  width: 351px;
  height: 100vh;
  z-index: 1;
`;

const CloseImage = styled(Image)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

/*  css order eslint */
