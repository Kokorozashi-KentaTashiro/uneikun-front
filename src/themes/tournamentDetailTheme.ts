import {
  Card,
  CardMedia,
  CardContent,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
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

export const DisableTextField = emotionStyled(TextField)`
& .Mui-disabled {
  color: #000000;
}
& div .Mui-disabled {
  -webkit-text-fill-color: #000000;
}
`;

export const ApplicantButton = emotionStyled(Button)`
color: #FFFFFF;
background-color: #377a7a;
box-shadow: 0 3px 0 #163030;
  &:hover {
    background-color: #377a7a;
    transform: translateY(1px);
    box-shadow: none;
  }
`;

// Theme（レスポンシブスタイル）
export const tournamentRegistCardSx: SxProps<Theme> = {
  width: { xs: 340, sm: 500, md: 750, lg: 750 },
  height: { xs: 290, sm: 350, md: 480, lg: 480 },
  margin: { xs: 1, sm: 1.5, md: 2, lg: 2 },
};

export const tournamentRegistCardMediaSx: SxProps<Theme> = {
  width: { xs: 340, sm: 500, md: 750, lg: 750 },
  height: { xs: 40, sm: 60, md: 80, lg: 80 },
  fontSize: { xs: 12, sm: 15, md: 25, lg: 25 },
};

export const tournamentRegistCardContentSx: SxProps<Theme> = {
  height: { xs: 250, sm: 290, md: 400, lg: 400 },
  gap: { xs: 5.5, sm: 4, md: 3, lg: 4 },
};

// Row
export const tournamentRegistRowSx: SxProps<Theme> = {
  width: { xs: 340, sm: 500, md: 750, lg: 750 },
  gap: { xs: 1, sm: 1.5, md: 2, lg: 2 },
};

// Element
export const disableTextFieldSx: SxProps<Theme> = {
  "& div input": {
    fontSize: { xs: 12, sm: 14, md: 18, lg: 18 },
  },
  "& div label": {
    fontSize: { xs: 12, sm: 14, md: 18, lg: 26 },
  },
  height: { xs: 20, sm: 40, md: 60, lg: 60 },
};

export const titleElementSx: SxProps<Theme> = {
  width: { xs: 190, sm: 300, md: 400, lg: 400 },
};

export const classElementSx: SxProps<Theme> = {
  width: { xs: 110, sm: 100, md: 150, lg: 150 },
};

export const eventDateElementSx: SxProps<Theme> = {
  width: { xs: 110, sm: 120, md: 150, lg: 150 },
};

export const placeElementSx: SxProps<Theme> = {
  width: { xs: 190, sm: 280, md: 400, lg: 400 },
};

export const applicantStartElementSx: SxProps<Theme> = {
  width: { xs: 150, sm: 200, md: 275, lg: 275 },
};

export const applicantEndElementSx: SxProps<Theme> = {
  width: { xs: 150, sm: 200, md: 275, lg: 275 },
};

export const detailPdfUrlElementSx: SxProps<Theme> = {
  width: { xs: 150, sm: 300, md: 400, lg: 400 },
  textAlign: "center",
};

export const pdfUrlLinkSx: SxProps<Theme> = {
  fontSize: { xs: 11, sm: 14, md: 18, lg: 18 },
};

// Button
export const applicantButtonSx: SxProps<Theme> = {
  width: { xs: 80, sm: 80, md: 150, lg: 150 },
  height: { xs: 25, sm: 30, md: 50, lg: 50 },
  margin: { xs: 1, md: 2 },
};
