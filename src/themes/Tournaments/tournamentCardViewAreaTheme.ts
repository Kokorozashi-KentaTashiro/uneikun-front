import { SxProps, Theme } from "@mui/material/styles";
import { CardMedia, Box } from "@mui/material";
import emotionStyled from "@emotion/styled";

// emotionStyled（スタイル）

export const ViewArea = emotionStyled(Box)`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;

export const ElementInfoCardMedia = emotionStyled(CardMedia)`
display: flex;
flex-flow: column;
justify-content: center;
align-items: start;
font-weight: bold;
background-color: #D9D9D9;
`;

export const ElementInfoCardContent = emotionStyled(CardMedia)`
display: flex;
flex-flow: row;
justify-content: left;
align-items: center;
`;

// Theme（レスポンシブスタイル）
export const viewAreaSx: SxProps<Theme> = {
  marginTop: { xs: 0.5, sm: 1, md: 1.5, lg: 2 },
  marginBottom: { xs: 1, sm: 1.5, md: 2, lg: 2.5 },
};

export const viewElementDateCardSx: SxProps<Theme> = {
  width: { xs: 80, sm: 90, md: 120, lg: 150 },
  height: { xs: 60, sm: 80, md: 100, lg: 110 },
  marginRight: { xs: 1, sm: 1.5, md: 1.8, lg: 2 },
  marginLeft: { xs: 1, sm: 1.5, md: 1.8, lg: 2 },
};

export const viewElementDateCardMediaSx: SxProps<Theme> = {
  height: { xs: 20, sm: 25, md: 30, lg: 40 },
  paddingLeft: { xs: 1, sm: 1, md: 2, lg: 2 },
  fontSize: { xs: 12, sm: 14, md: 16, lg: 20 },
};

export const viewElementDateCardContentSx: SxProps<Theme> = {
  height: { xs: 40, sm: 55, md: 70, lg: 70 },
  paddingLeft: { xs: 1, sm: 1, md: 2, lg: 2 },
  paddingRight: { xs: 1, sm: 1, md: 2, lg: 2 },
  fontSize: { xs: 12, sm: 14, md: 16, lg: 20 },
};

export const viewElementPlaceCardSx: SxProps<Theme> = {
  width: { xs: 115, sm: 220, md: 240, lg: 300 },
  height: { xs: 60, sm: 80, md: 100, lg: 110 },
  marginRight: { xs: 1, sm: 1.5, md: 1.8, lg: 2 },
  marginLeft: { xs: 1, sm: 1.5, md: 1.8, lg: 2 },
};

export const viewElementPlaceCardMediaSx: SxProps<Theme> = {
  height: { xs: 20, sm: 25, md: 30, lg: 40 },
  paddingLeft: { xs: 1, sm: 1, md: 2, lg: 2 },
  fontSize: { xs: 12, sm: 14, md: 16, lg: 20 },
};

export const viewElementPlaceCardContentSx: SxProps<Theme> = {
  height: { xs: 40, sm: 55, md: 70, lg: 70 },
  paddingLeft: { xs: 1, sm: 1, md: 2, lg: 2 },
  paddingRight: { xs: 1, sm: 1, md: 2, lg: 2 },
  fontSize: { xs: 12, sm: 14, md: 18, lg: 20 },
};
