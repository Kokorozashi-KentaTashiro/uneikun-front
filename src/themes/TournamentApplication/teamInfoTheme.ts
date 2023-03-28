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

// Theme（レスポンシブスタイル）
export const teamInfoCardSx: SxProps<Theme> = {
  width: { xs: 300, md: 750 },
  height: { xs: 300, md: 550 },
  margin: { xs: 1, md: 2 },
};

export const teamInfoCardMediaSx: SxProps<Theme> = {
  width: { xs: 300, md: 750 },
  height: { xs: 50, md: 100 },
  fontSize: { xs: 15, md: 25 },
};

export const teamInfoCardContentSx: SxProps<Theme> = {
  height: { xs: 50, md: 450 },
};

export const teamInfoRowSx: SxProps<Theme> = {
  width: { xs: 300, md: 650 },
  marginTop: 2,
  marginBottom: 2,
  gap: 5,
};

export const teamElementSx: SxProps<Theme> = {
  width: { xs: 100, md: 240 },
};

export const teamZoneElementSx: SxProps<Theme> = {
  width: { xs: 100, md: 140 },
};

export const teamRankElementSx: SxProps<Theme> = {
  width: { xs: 15, md: 90 },
};

export const teamAddressElementSx: SxProps<Theme> = {
  width: { xs: 15, md: 550 },
};

export const teamPhoneElementSx: SxProps<Theme> = {
  width: { xs: 15, md: 255 },
};

export const teamEmailElementSx: SxProps<Theme> = {
  width: { xs: 15, md: 255 },
};

export const teamManagerElementSx: SxProps<Theme> = {
  width: { xs: 15, md: 350 },
};

export const teamSexElementSx: SxProps<Theme> = {
  width: { xs: 15, md: 90 },
};
