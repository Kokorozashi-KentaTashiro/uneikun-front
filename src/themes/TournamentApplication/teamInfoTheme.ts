import { SxProps, Theme } from "@mui/material/styles";
import { Card, CardMedia, CardContent, Box } from "@mui/material";
import emotionStyled from "@emotion/styled";

// emotionStyled（スタイル）
export const TeamInfoCard = emotionStyled(Card)`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
border-radius: 0;
`;

export const TeamInfoCardMedia = emotionStyled(CardMedia)`
font-weight: bold;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
color: #151515;
background-color: #D9D9D9;
border-bottom: solid;
border-width: 0.1;
`;

export const TeamInfoCardContent = emotionStyled(CardContent)`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
font-weight: bold;
`;

export const TeamInfoRow = emotionStyled(Box)`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`;

export const SinglesExplanationTypography = emotionStyled(Box)`
color: red;
font-weight: normal;
`;

// Theme（レスポンシブスタイル）
export const teamInfoCardSx: SxProps<Theme> = {
  width: { xs: 340, sm: 550, md: 750 },
  height: { xs: 440, sm: 520, md: 540 },
  margin: { xs: 1, md: 2 },
};

export const teamInfoCardMediaSx: SxProps<Theme> = {
  width: { xs: 340, sm: 550, md: 750 },
  height: { xs: 30, sm: 40, md: 50 },
  fontSize: { xs: 15, md: 25 },
};

export const teamInfoCardContentSx: SxProps<Theme> = {
  height: { xs: 410, sm: 480, md: 490 },
  gap: { xs: 1.5, sm: 2, md: 2 },
};

export const teamInfoRowSx: SxProps<Theme> = {
  width: { xs: 340, sm: 550, md: 750 },
  gap: { xs: 1, sm: 2, md: 3 },
};

export const elementSx: SxProps<Theme> = {
  "& div input": {
    fontSize: { xs: 12, sm: 14, md: 18 },
    height: { xs: 20, sm: 30, md: 30 },
  },
  "& div label": {
    fontSize: { xs: 12, sm: 14, md: 18 },
  },
};

export const teamElementSx: SxProps<Theme> = {
  width: { xs: 150, sm: 200, md: 240 },
};

export const teamZoneElementSx: SxProps<Theme> = {
  width: { xs: 150, sm: 200, md: 240 },
};

export const teamSexElementSx: SxProps<Theme> = {
  width: { xs: 150, sm: 200, md: 240 },
};

export const teamRankElementSx: SxProps<Theme> = {
  width: { xs: 150, sm: 200, md: 240 },
};

export const teamAddressElementSx: SxProps<Theme> = {
  width: { xs: 300, sm: 417, md: 505 },
};

export const teamPhoneElementSx: SxProps<Theme> = {
  width: { xs: 145, sm: 200, md: 240 },
};

export const teamFaxElementSx: SxProps<Theme> = {
  width: { xs: 145, sm: 200, md: 240 },
};

export const teamManagerElementSx: SxProps<Theme> = {
  width: { xs: 300, sm: 417, md: 505 },
};

export const singlesExplanationTypographySx: SxProps<Theme> = {
  fontSize: { xs: 12, sm: 14, md: 18 },
  width: { xs: 300, sm: 417, md: 505 },
};
