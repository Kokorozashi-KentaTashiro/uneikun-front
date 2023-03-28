import { SxProps, Theme } from "@mui/material/styles";
import { Button, Box } from "@mui/material";
import emotionStyled from "@emotion/styled";

// emotionStyled（スタイル）
export const UserFlowBox = emotionStyled(Box)`
display: flex;
flex-flow: column;
align-items: center;
justify-content: center;
background-color: #80a4a4;
margin: 0;
padding: 0;
width: 100%;
height: calc(100vh - 209px);
`;

export const TournamentsButton = emotionStyled(Button)`
display: flex;
flex-flow: row;
color: #FFFFFF;
background-color: #D76550;
box-shadow: 0 3px 0 #562820;
border-radius: 50px;
  &:hover {
    background-color: #D76550;
    transform: translateY(1px);
    box-shadow: none;
  }
`;

// Theme（レスポンシブスタイル）
export const userFlowBoxSx: SxProps<Theme> = {};

export const tournamentTypographySx: SxProps<Theme> = {
  letterSpacing: { xs: 2, md: 5 },
  fontSize: { xs: 5, md: 42 },
  fontWeight: "bold",
};

export const tournamentsButtonSx: SxProps<Theme> = {
  width: { xs: 15, md: 380 },
  height: { xs: 15, md: 70 },
  fontSize: { xs: 5, md: 20 },
  marginTop: { xs: 2, md: 3 },
};
