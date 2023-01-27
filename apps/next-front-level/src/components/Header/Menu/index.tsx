import * as S from "./index.style";

export default function Menu({ name }: { name: string }) {
  return <S.MenuContainer>{name.toUpperCase()}</S.MenuContainer>;
}
