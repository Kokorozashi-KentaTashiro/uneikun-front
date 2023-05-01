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
  width: { xs: 340, sm: 550, md: 750 },
  height: { xs: 330, sm: 420, md: 480 },
  margin: { xs: 1, md: 2 },
};

export const directerCardMediaSx: SxProps<Theme> = {
  width: { xs: 340, sm: 550, md: 750 },
  height: { xs: 30, sm: 40, md: 50 },
  fontSize: { xs: 15, md: 25 },
};

export const directerCardContentSx: SxProps<Theme> = {
  height: { xs: 300, sm: 380, md: 430 },
  gap: { xs: 1.5, sm: 2, md: 2 },
};

// Element
export const directerElementSx: SxProps<Theme> = {
  "& div input": {
    fontSize: { xs: 12, sm: 14, md: 18 },
    height: { xs: 20, sm: 30, md: 30 },
  },
  "& div label": {
    fontSize: { xs: 12, sm: 14, md: 18 },
  },
  width: { xs: 250, sm: 380, md: 450 },
};
