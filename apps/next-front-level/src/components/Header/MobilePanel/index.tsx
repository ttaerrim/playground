import * as S from "./index.style";

export default function MobilePanel({
  showPanel,
  handlePanel,
}: {
  showPanel: boolean;
  handlePanel: () => void;
}) {
  return (
    <S.PanelContainer showPanel={showPanel}>
      <S.CloseImage
        src="/images/close.svg"
        width={28}
        height={28}
        alt="close"
        onClick={handlePanel}
      />
    </S.PanelContainer>
  );
}
