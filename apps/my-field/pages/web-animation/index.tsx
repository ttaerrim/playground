import styled from "@emotion/styled";
import { Noto_Sans_KR } from "@next/font/google";
import { useEffect, useRef } from "react";

const noto_sans = Noto_Sans_KR({
  weight: ["400"],
  display: "swap",
});

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
  padding: 12px;
  font-family: ${noto_sans.style.fontFamily};

  p {
    margin-bottom: 8px;
  }
  .box3 {
    width: 100px;
    height: 100px;
    background: dodgerblue;
  }
`;

export function Index() {
  const hoverRef = useRef<HTMLDivElement>(null);
  const animateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animation = animateRef.current.animate(
      [
        { transform: "translateX(100px)", opacity: 0.1 },
        { transform: "translateX(0)" },
        { transform: "translateX(300px)", opacity: 1 },
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

    hoverRef.current.addEventListener("mouseover", () => {
      if (animation.playState === "paused") {
        animation.play();
      }
    });

    hoverRef.current.addEventListener("mouseout", () => {
      if (animation.playState === "running") {
        animation.pause();
      }
    });

    return () => {
      hoverRef.current.removeEventListener("mouseover", () => {
        animation.pause();
      });

      hoverRef.current.removeEventListener("mouseout", () => {
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
      <SecondFloor ref={hoverRef}>
        <p>hover here!</p>
        <div className="box3" ref={animateRef}></div>
      </SecondFloor>
    </StyledPage>
  );
}

export default Index;
