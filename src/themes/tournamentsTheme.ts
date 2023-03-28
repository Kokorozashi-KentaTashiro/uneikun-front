import { SxProps, Theme } from "@mui/material/styles";
import {
  Button,
  Card,
  CardMedia,
  CardContent,
  Box,
  Typography,
} from "@mui/material";
import emotionStyled from "@emotion/styled";

// emotionStyled（スタイル）
export const RegistButton = emotionStyled(Button)`
background-color: #50A6D7;
box-shadow: 0 3px 0 #204256;
  &:hover {
    background-color: #50A6D7;
    transform: translateY(1px);
    box-shadow: none;
  }
`;

export const ApplicationHistoryButton = emotionStyled(Button)`
background-color: #50A6D7;
box-shadow: 0 3px 0 #204256;
  &:hover {
    background-color: #50A6D7;
    transform: translateY(1px);
    box-shadow: none;
  }
`;

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
export const applicationHistoryButtonSx: SxProps<Theme> = {
  width: { xs: 100, md: 150 },
  height: { xs: 30, md: 50 },
  margin: { xs: 1, md: 2 },
};

export const registButtonSx: SxProps<Theme> = {
  width: { xs: 100, md: 150 },
  height: { xs: 30, md: 50 },
  margin: { xs: 1, md: 2 },
};

// トーナメントカードスタイル
export const tournamentsCardSx: SxProps<Theme> = {
  width: { xs: 300, md: 750 },
  height: { xs: 300, md: 300 },
  margin: { xs: 1, md: 2 },
};

export const tournamentsCardMediaSx: SxProps<Theme> = {
  width: { xs: 300, md: 750 },
  height: { xs: 50, md: 80 },
  paddingLeft: { xs: 1, md: 8 },
  fontSize: { xs: 15, md: 25 },
};

export const tournamentsCardContentSx: SxProps<Theme> = {
  height: { xs: 50, md: 180 },
  paddingLeft: { xs: 1, md: 3.2 },
};

// Viewエリアスタイル
export const eventDateCardSx: SxProps<Theme> = {
  width: { xs: 80, md: 200 },
  height: { xs: 50, md: 80 },
  marginRight: 1,
  marginLeft: 1,
};

export const eventDateCardMediaSx: SxProps<Theme> = {
  height: { xs: 15, md: 25 },
  paddingLeft: { xs: 1, md: 2 },
  fontSize: { xs: 5, md: 16 },
};

export const placeCardSx: SxProps<Theme> = {
  width: { xs: 80, md: 250 },
  height: { xs: 50, md: 80 },
  marginRight: 1,
  marginLeft: 1,
};

export const placeCardMediaSx: SxProps<Theme> = {
  height: { xs: 15, md: 25 },
  paddingLeft: { xs: 1, md: 2 },
  fontSize: { xs: 5, md: 16 },
};

export const applicationEndCardSx: SxProps<Theme> = {
  width: { xs: 80, md: 200 },
  height: { xs: 50, md: 80 },
  marginRight: 1,
  marginLeft: 1,
};

export const applicationEndCardMediaSx: SxProps<Theme> = {
  height: { xs: 15, md: 25 },
  paddingLeft: { xs: 1, md: 2 },
  fontSize: { xs: 5, md: 16 },
};

// Buttonエリアスタイル
export const buttonAreaSx: SxProps<Theme> = {
  paddingLeft: 1,
  paddingRight: 1,
};

export const detailViewButtonSx: SxProps<Theme> = {
  width: { xs: 15, md: 200 },
  height: { xs: 15, md: 70 },
  marginRight: { xs: 15, md: 5 },
  fontSize: { xs: 5, md: 20 },
};

export const applicantButtonSx: SxProps<Theme> = {
  width: { xs: 15, md: 445 },
  height: { xs: 15, md: 70 },
  paddingLeft: { xs: 1, md: 2 },
  fontSize: { xs: 5, md: 20 },
};

export const applicantNormalFontSx: SxProps<Theme> = {
  fontSize: { xs: 5, md: 20 },
};

export const applicantSpecialFontSx: SxProps<Theme> = {
  fontSize: { xs: 5, md: 30 },
};
