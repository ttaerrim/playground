import styled from "@emotion/styled";
import Link from "next/link";

const StyledHeader = styled.header`
  display: flex;
  font-size: 28px;
  gap: 16px;
  justify-content: space-evenly;
  padding: 20px 0;
  border-bottom: 1px solid #f1f1f1;
  color: #868686;
  height: 100px;

  a {
    font-size: 40px;
    color: #c1c1c1;
    transition: color 0.3s, font-size 0.3s;

    &:hover {
      color: #3892fe;
      font-size: 45px;
    }
  }
`;

function Header() {
  const list = ["Water Drop", "Input", "Web Animation", "Google Sheet"];

  return (
    <StyledHeader>
      {list.map((item) => {
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
