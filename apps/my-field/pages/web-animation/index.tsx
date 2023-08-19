import styled from "@emotion/styled";
import { useEffect, useRef } from "react";

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  width: 100vw;
  height: 100vh;

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
`;

const FirstFloor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

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

const SecondFloor = styled.div`
  border: 2px dotted dodgerblue;
  padding: 20px;

  .box3 {
    width: 100px;
    height: 100px;
    background: dodgerblue;
  }
`;

export function Index() {
  const animateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animation = animateRef.current.animate(
      [
        { transform: "translateX(0)", opacity: 0.5 },
        { transform: "translateX(-100px)" },
        { transform: "translateX(200px)", opacity: 1 },
      ],
      {
        duration: 1000,
        easing: "linear",
        fill: "both",
        iterations: Infinity,
        direction: "alternate",
      }
    );

    animation.pause();

    window.addEventListener("click", () => {
      if (animation.playState === "paused") {
        animation.play();
      } else {
        animation.pause();
      }
    });

    return () => {
      window.removeEventListener("click", () => {
        animation.pause();
      });
    };
  }, []);

  return (
    <StyledPage>
      <FirstFloor>
        <div className="box"></div>
        <div className="box2"></div>
      </FirstFloor>
      <SecondFloor>
        click!
        <div className="box3" ref={animateRef}></div>
      </SecondFloor>
    </StyledPage>
  );
}

export default Index;
