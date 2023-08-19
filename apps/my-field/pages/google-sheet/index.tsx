import styled from "@emotion/styled";
import { Noto_Sans_KR } from "@next/font/google";
import { useEffect, useState } from "react";

const noto_sans = Noto_Sans_KR({
  weight: ["400"],
  display: "swap",
});

const StyledPage = styled.div`
  padding: 20px;
  font-family: ${noto_sans.style.fontFamily};
`;

type GoogleData = {
  [key: string]: string;
};

export function GoogleSheet() {
  const [data, setData] = useState<undefined | GoogleData[]>(undefined);
  const getGoogleData = async () => {
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
    const sheetId = "1L1Cmj0OvNfZvrFY4ER9XT5ZzmSgHCl9JhlBTPxbaF_U";
    const sheetName = "test";
    const url = `https://content-sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}?key=${API_KEY}`;

    const temp = await fetch(url);
    const response = await temp.json();
    const keys = response.values[0];
    const data = response.values.slice(1);

    setData(
      data.map((arr) =>
        Object.assign(
          {},
          ...keys.map((k, i) => {
            if (!k) return null;
            return { [k]: arr[i] };
          })
        )
      )
    );
  };

  useEffect(() => {
    getGoogleData();
  }, []);

  useEffect(() => {
    console.table(data);
  }, [data]);

  if (data)
    return (
      <StyledPage>
        <div>
          {data.map((item) => (
            <p key={item.name}>{`id: ${item.id}, name: ${item.name}`}</p>
          ))}
        </div>
      </StyledPage>
    );
}

export default GoogleSheet;
