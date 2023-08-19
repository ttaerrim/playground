import { Noto_Sans_KR } from "@next/font/google";
import styled from "@emotion/styled";

const noto_sans = Noto_Sans_KR({
  weight: ["400"],
  display: "swap",
});

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-family: ${noto_sans.style.fontFamily};
  font-size: 40px;
  white-space: break-spaces;
  text-align: center;
  color: #3a3a3a;
`;

export function Index() {
  return (
    <StyledPage>{`Hi there 👋\nWelcome to ttaerrim's playgroud!`}</StyledPage>
  );
}

export default Index;
