import styled from "@emotion/styled";

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  gap: 50px;

  @keyframes box-ani {
    0% {
      transform: translateX(0);
    }
    35% {
      transform: translateX(400px);
    }
    100% {
      transform: translateX(300px);
    }
  }

  .box {
    width: 100px;
    height: 100px;
    background-color: #99e2e2;
    transition: transform 1000ms;

    &:hover {
      transform: rotate(45deg);
      background-color: #b0e299;
    }
  }

  .box2 {
    width: 100px;
    height: 100px;
    background-color: #99e2e2;
    animation: box-ani 2s alternate infinite;

    &:hover {
      animation-play-state: paused;
    }
  }
`;

export function Index() {
  return (
    <StyledPage>
      <div className="box"></div>
      <div className="box2"></div>
    </StyledPage>
  );
}

export default Index;
