import styled from "@emotion/styled";
import { Poppins } from "@next/font/google";
import Link from "next/link";

const poppins = Poppins({
  weight: ["500"],
  display: "swap",
});

const StyledHeader = styled.header`
  display: flex;
  gap: 12px;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #f1f1f1;
  color: #868686;
  height: 100px;
  font-family: ${poppins.style.fontFamily};

  a {
    font-size: 28px;
    color: #c1c1c1;
    transition: color 0.3s, font-size 0.3s;

    &:hover {
      color: #5d5d5d;
      font-size: 32px;
    }
  }
`;

function Header() {
  const list = ["Home", "Water Drop", "Input", "Web Animation", "Google Sheet"];

  return (
    <StyledHeader>
      {list.map((item) => {
        if (item === "Home") {
          return (
            <Link key="item" href="/">
              {item}
            </Link>
          );
        }
        const link = item.toLocaleLowerCase().replace(/ /g, "-");
        return (
          <Link key="item" href={link}>
            {item}
          </Link>
        );
      })}
    </StyledHeader>
  );
}

export default Header;
