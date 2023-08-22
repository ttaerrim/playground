import styled from "@emotion/styled";
import { Noto_Sans_KR } from "@next/font/google";
import { useEffect, useRef } from "react";

const noto_sans = Noto_Sans_KR({
  weight: ["400"],
  display: "swap",
});

const StyledPage = styled.div`
  position: relative;

  .progress {
    width: 100vw;
    height: 0.5em;
    background: red;
    transform-origin: 0 50%;
    transform: scaleX(0);

    position: absolute;
    top: 0;
    left: 0;
  }
`;

export function Index() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    progressRef.current.animate(
      [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
      {
        duration: 2500,
        fill: "forwards",
        easing: "linear",
      }
    );
    //c
    // new Animation(
    //     new KeyframeEffect(
    //       document.querySelector('.progressbar'),
    //       {
    //         backgroundColor: ['red', 'darkred'],
    //         transform: ['scaleX(0)', 'scaleX(1)'],
    //       },
    //       {
    //         duration: 2500,
    //         fill: 'forwards',
    //         easing: 'linear',
    //       }
    //     )
    //   ).play();
  }, []);

  return (
    <StyledPage>
      <div className="progress" ref={progressRef}></div>
    </StyledPage>
  );
}

export default Index;
