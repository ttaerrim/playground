import styled from "@emotion/styled";
import { Zilla_Slab } from "@next/font/google";

const zilla = Zilla_Slab({
  weight: ["300"],
  style: ["italic"],
  display: "swap",
});

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #3892fe;
  flex-direction: column;
  font-family: ${zilla.style.fontFamily};

  p {
    font-size: 40px;
    margin-bottom: 40px;
    color: white;
  }

  .drop {
    position: relative;
    height: 200px;
    width: 200px;
    background-color: #54abfb;
    border-radius: 51% 49% 48% 52% / 62% 44% 56% 38%;
    opacity: 0.8;
    border: 2px solid #3d93ff;

    &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      background: #318cfe;
      border-radius: 51% 49% 48% 52% / 62% 44% 56% 38%;
      box-shadow: -20px 30px 16px #1b6cfb, -40px 60px 32px #1b6cfb,
        inset -6px 6px 10px #1b6cfb, inset 2px 6px 10px #1b6cfb,
        inset 20px -20px 22px white, inset 40px -40px 44px #a8ceff;
    }

    &::after {
      content: "";
      position: absolute;
      height: 40px;
      width: 40px;
      background: #e6fdfb;
      border-radius: 44% 56% 46% 54% / 36% 50% 50% 64%;
      left: 130px;
      top: 40px;
      box-shadow: 16px 40px 0 -10px white;
      opacity: 0.8;
    }
  }
`;

export function WaterDrop() {
  return (
    <StyledPage>
      <p>Water Drop</p>
      <div className="drop"></div>
    </StyledPage>
  );
}

export default WaterDrop;
