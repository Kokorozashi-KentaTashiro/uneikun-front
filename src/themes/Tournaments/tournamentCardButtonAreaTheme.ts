import { SxProps, Theme } from "@mui/material/styles";
import { Button, Box, Typography } from "@mui/material";
import emotionStyled from "@emotion/styled";

// emotionStyled（スタイル）
export const ButtonArea = emotionStyled(Box)`
display: flex;
flex-flow: row;
justify-content: center;
align-items: center;
`;

export const DetailViewButton = emotionStyled(Button)`
font-weight: bold;
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
color: #D76550;
background-color: #D9D9D9;
box-shadow: 0 3px 0 #565656;
  &:hover {
    background-color: #D9D9D9;
    transform: translateY(1px);
    box-shadow: none;
  }
`;

export const ApplicantButton = emotionStyled(Button)`
margin: auto;
display: flex;
flex-flow: row;
color: #FFFFFF;
background-color: #D76550;
box-shadow: 0 3px 0 #562820;
  &:hover {
    background-color: #D76550;
    transform: translateY(1px);
    box-shadow: none;
  }
`;

export const ApplicantNormalFont = emotionStyled(Typography)`
font-weight: bold;
`;

export const ApplicantSpecialFont = emotionStyled(Typography)`
font-weight: bold;
`;

// Theme（レスポンシブスタイル）
export const buttonAreaSx: SxProps<Theme> = {
  paddingLeft: { xs: 1, sm: 1, md: 1.5, lg: 2 },
  paddingRight: { xs: 1, sm: 1, md: 1.5, lg: 2 },
  marginTop: { xs: 1, sm: 1.5, md: 2, lg: 2.5 },
  marginBottom: { xs: 0.5, sm: 1, md: 1.5, lg: 2 },
};

export const detailViewButtonSx: SxProps<Theme> = {
  width: { xs: 102, sm: 156, md: 180, lg: 195 },
  height: { xs: 35, sm: 50, md: 70, lg: 80 },
  marginRight: { xs: 3, sm: 5, md: 5, lg: 5 },
  fontSize: { xs: 10, sm: 16, md: 20, lg: 26 },
};

export const applicantButtonSx: SxProps<Theme> = {
  width: { xs: 182, sm: 257, md: 320, lg: 430 },
  height: { xs: 35, sm: 50, md: 70, lg: 80 },
};

export const applicantNormalFontSx: SxProps<Theme> = {
  fontSize: { xs: 10, sm: 16, md: 20, lg: 26 },
};

export const applicantSpecialFontSx: SxProps<Theme> = {
  fontSize: { xs: 14, sm: 18, md: 26, lg: 36 },
};
