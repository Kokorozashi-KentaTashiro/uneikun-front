import { SxProps, Theme } from "@mui/material/styles";
import { Card, CardMedia, CardContent, Box, Button } from "@mui/material";
import emotionStyled from "@emotion/styled";

// emotionStyled（スタイル）
export const TournamentRegistCard = emotionStyled(Card)`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
border-radius: 0;
`;

export const TournamentRegistCardMedia = emotionStyled(CardMedia)`
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

export const TournamentRegistCardContent = emotionStyled(CardContent)`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
font-weight: bold;
`;

export const TournamentRegistRow = emotionStyled(Box)`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`;

export const TournamentRegistButton = emotionStyled(Button)`
color: #FFFFFF;
background-color: #D76550;
box-shadow: 0 3px 0 #562820;
  &:hover {
    background-color: #D76550;
    transform: translateY(1px);
    box-shadow: none;
  }
`;

// Theme（レスポンシブスタイル）
export const tournamentRegistCardSx: SxProps<Theme> = {
  width: { xs: 300, md: 750 },
  height: { xs: 300, md: 580 },
  margin: { xs: 1, md: 2 },
};

export const tournamentRegistCardMediaSx: SxProps<Theme> = {
  width: { xs: 300, md: 750 },
  height: { xs: 50, md: 110 },
  fontSize: { xs: 15, md: 25 },
};

export const tournamentRegistCardContentSx: SxProps<Theme> = {
  height: { xs: 50, md: 470 },
};

// Row
export const tournamentRegistRowSx: SxProps<Theme> = {
  width: { xs: 300, md: 650 },
  marginTop: 2,
  marginBottom: 2,
  gap: 5,
};

// Element
export const titleElementSx: SxProps<Theme> = {
  width: { xs: 100, md: 400 },
};

export const classElementSx: SxProps<Theme> = {
  width: { xs: 100, md: 150 },
};

export const eventDateElementSx: SxProps<Theme> = {
  width: { xs: 15, md: 150 },
};

export const placeElementSx: SxProps<Theme> = {
  width: { xs: 15, md: 400 },
};

export const applicantStartElementSx: SxProps<Theme> = {
  width: { xs: 15, md: 275 },
};

export const applicantEndElementSx: SxProps<Theme> = {
  width: { xs: 15, md: 275 },
};

export const detailPdfUrlElementSx: SxProps<Theme> = {
  width: { xs: 15, md: 400 },
};

// Button
export const tournamentRegistButtonSx: SxProps<Theme> = {
  width: { xs: 100, md: 150 },
  height: { xs: 30, md: 50 },
  margin: { xs: 1, md: 2 },
};
