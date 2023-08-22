import styled from "@emotion/styled";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const StyledPage = styled.div`
  position: relative;

  > div {
    width: 100vw;
    height: 200vh;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 4.5rem;

    background: linear-gradient(to bottom, #ffe0e0, #cfe5ff);
  }

  .progress {
    width: 100vw;
    height: 0.5rem;
    background: transparent;
    position: fixed;
    top: 0;
    left: 0;

    &::-webkit-progress-bar {
      background: transparent;
    }
    &::-webkit-progress-value {
      background: linear-gradient(
        to right,
        rgba(255, 0, 0, 1),
        rgba(255, 160, 0, 1),
        rgba(230, 255, 0, 1),
        rgba(75, 255, 0, 1),
        rgba(0, 255, 88, 1),
        rgba(0, 255, 229, 1),
        rgba(0, 84, 255, 1),
        rgba(121, 0, 255, 1),
        rgba(255, 0, 235, 1),
        rgba(255, 0, 131, 1),
        rgba(255, 0, 0, 1)
      );
      background-attachment: fixed;
    }
  }
`;

export function Index() {
  const progressRef = useRef<HTMLProgressElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#section",
      start: "top 0",
      end: "bottom bottom",
      animation: gsap.fromTo(progressRef.current, { value: 0 }, { value: 100 }),
      scrub: true,
    });
  }, []);

  return (
    <StyledPage>
      <div id="section">
        <progress className="progress" max="100" value="70" ref={progressRef} />
        <p>Scroll to add some color to your life! 🎨</p>
        <p>You're doing great, keep going 😘</p>
      </div>
    </StyledPage>
  );
}

export default Index;
