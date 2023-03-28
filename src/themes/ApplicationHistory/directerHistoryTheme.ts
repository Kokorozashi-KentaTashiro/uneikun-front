import { SxProps, Theme } from "@mui/material/styles";
import { Box, Card, TextField } from "@mui/material";
import emotionStyled from "@emotion/styled";

// emotionStyled（スタイル）
export const DirecterCard = emotionStyled(Card)`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
border: solid;
`;

export const DirecterRow = emotionStyled(Box)`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`;

export const DisableTextField = emotionStyled(TextField)`
& .Mui-disabled {
  color: #000000;
}
& div .Mui-disabled {
  -webkit-text-fill-color: #000000;
}
`;

// Theme（レスポンシブスタイル）
export const directerCardSx: SxProps<Theme> = {
  width: { xs: 300, md: 750 },
  paddingTop: { xs: 1, md: 1.5 },
  paddingBottom: { xs: 1, md: 1.5 },
  marginTop: 1.5,
  marginBottom: 1.5,
};

export const directerRowSx: SxProps<Theme> = {
  width: { xs: 300, md: 700 },
  marginTop: 2,
  marginBottom: 2,
  gap: 3,
};

export const directerNameElementSx: SxProps<Theme> = {
  width: { xs: 300, md: 300 },
};

export const directerPhoneElementSx: SxProps<Theme> = {
  width: { xs: 300, md: 300 },
};

export const directerEmailElementSx: SxProps<Theme> = {
  width: { xs: 300, md: 300 },
};

export const advisorNameElementSx: SxProps<Theme> = {
  width: { xs: 300, md: 300 },
};
