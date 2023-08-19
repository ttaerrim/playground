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
`;

export function Index() {
  return <StyledPage></StyledPage>;
}

export default Index;
