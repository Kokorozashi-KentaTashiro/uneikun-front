import { SxProps, Theme } from "@mui/material/styles";
import { Card, CardMedia, CardContent } from "@mui/material";
import emotionStyled from "@emotion/styled";

// emotionStyled（スタイル）
export const DirecterInfoCard = emotionStyled(Card)`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
border-radius: 0;
`;

export const DirecterCardMedia = emotionStyled(CardMedia)`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
font-weight: bold;
color: #151515;
background-color: #D9D9D9;
border-bottom: solid;
border-width: 0.1;
`;

export const DirecterCardContent = emotionStyled(CardContent)`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
font-weight: bold;
`;

// チーム情報カードスタイル
export const directerInfoCardSx: SxProps<Theme> = {
  width: { xs: 300, md: 750 },
  height: { xs: 300, md: 450 },
  margin: { xs: 1, md: 2 },
};

export const directerCardMediaSx: SxProps<Theme> = {
  width: { xs: 300, md: 750 },
  height: { xs: 50, md: 80 },
  fontSize: { xs: 15, md: 25 },
};

export const directerCardContentSx: SxProps<Theme> = {
  height: { xs: 50, md: 370 },
};

// Element
export const directerElementSx: SxProps<Theme> = {
  width: { xs: 100, md: 350 },
  marginTop: 1,
  marginBottom: 1,
};
