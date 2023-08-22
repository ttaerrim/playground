import styled from "@emotion/styled";
import { Noto_Sans_KR } from "@next/font/google";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const noto_sans = Noto_Sans_KR({
  weight: ["400"],
  display: "swap",
});

const StyledPage = styled.div`
  position: relative;

  > div {
    width: 100vw;
    height: 200vh;
    background-color: aliceblue;
  }

  .progress {
    width: 100vw;
    height: 0.5em;
    background: red;
    transform-origin: 0 50%;
    transform: scaleX(0);
    position: fixed;
    top: 0;
    left: 0;
  }
`;

export function Index() {
  const progressRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // const animation = progressRef.current.animate(
    //   [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
    //   { duration: 2500, fill: "forwards", easing: "linear" }
    // );

    ScrollTrigger.create({
      trigger: "#section",
      start: "top 0",
      end: "bottom bottom",
      animation: gsap.fromTo(progressRef.current, { scaleX: 0 }, { scaleX: 1 }),
      scrub: true,
    });
  }, []);

  return (
    <StyledPage>
      <div id="section">
        <div className="progress" ref={progressRef} />
      </div>
    </StyledPage>
  );
}

export default Index;
