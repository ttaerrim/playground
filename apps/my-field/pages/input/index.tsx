import styled from "@emotion/styled";
import InputAnimation from "../../components/InputAnimation";
import { Zilla_Slab } from "@next/font/google";

const zilla = Zilla_Slab({
  weight: ["300"],
  style: ["italic"],
  display: "swap",
});

const StyledPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  background-color: #090c22;
  color: #fff;
  padding: 0 50px;

  .title {
    font-family: ${zilla.style.fontFamily};
    font-size: 40px;
    margin-bottom: 40px;
    color: white;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
`;

export function Index() {
  return (
    <StyledPage>
      <div className="title">Input Animation</div>
      <div className="inputs">
        <InputAnimation label="name" />
        <InputAnimation label="nickname" />
        <InputAnimation label="description" />
      </div>
    </StyledPage>
  );
}

export default Index;
