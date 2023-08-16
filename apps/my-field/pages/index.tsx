import styled from "@emotion/styled";
import { Zilla_Slab } from "@next/font/google";
import Link from "next/link";

const zilla = Zilla_Slab({
  weight: ["700"],
  style: ["italic"],
  display: "swap",
});

const StyledPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;

  a {
    font-family: ${zilla.style.fontFamily};
    font-size: 40px;
    color: #c1c1c1;
    transition: color 0.3s, font-size 0.3s;

    &:hover {
      color: #3892fe;
      font-size: 45px;
    }
  }
`;

export function Index() {
  const list = ["Water Drop", "Input", "Web Animation", "Google Sheet"];
  return (
    <StyledPage>
      {list.map((item) => {
        const link = item.toLocaleLowerCase().replace(/ /g, "-");
        return (
          <Link key="item" href={link}>
            {item}
          </Link>
        );
      })}
    </StyledPage>
  );
}

export default Index;
