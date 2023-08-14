import styled from "@emotion/styled";

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .box {
    width: 100px;
    height: 100px;
    background-color: #99e2e2;
    transition: 1s;

    &:hover {
      transform: rotate(45deg);
    }
  }
`;

export function Index() {
  return (
    <StyledPage>
      <div className="box"></div>
    </StyledPage>
  );
}

export default Index;
