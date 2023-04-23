import { SxProps, Theme } from "@mui/material/styles";
import { Card, CardMedia, CardContent } from "@mui/material";
import emotionStyled from "@emotion/styled";

// emotionStyled（スタイル）

export const TournamentsCard = emotionStyled(Card)`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
`;

export const TournamentsCardMedia = emotionStyled(CardMedia)`
display: flex;
flex-flow: column;
justify-content: center;
align-items: start;
font-weight: bold;
border-bottom: solid;
border-color: #D9D9D9;
`;

export const TournamentsCardContent = emotionStyled(CardContent)`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: left;
align-items: center;
margin: 0;
`;

// Theme（レスポンシブスタイル）
export const tournamentsCardSx: SxProps<Theme> = {
  width: { xs: 350, sm: 500, md: 600, lg: 750 },
  height: { xs: 200, sm: 260, md: 320, lg: 400 },
  margin: { xs: 1, sm: 1.5, md: 2, lg: 2 },
};

export const tournamentsCardMediaSx: SxProps<Theme> = {
  width: { xs: 350, sm: 500, md: 600, lg: 750 },
  height: { xs: 50, sm: 80, md: 100, lg: 100 },
  paddingLeft: { xs: 4, sm: 5, md: 8, lg: 10 },
  fontSize: { xs: 13, sm: 18, md: 25, lg: 30 },
};

export const tournamentsCardContentSx: SxProps<Theme> = {
  height: { xs: 150, sm: 180, md: 220, lg: 300 },
  paddingLeft: { xs: 1, sm: 1.5, md: 2, lg: 3 },
};
