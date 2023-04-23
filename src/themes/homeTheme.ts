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
@media (max-width:599px) {
  height: calc(100vh - 186px);
}
@media (min-width:600px) {
  height: calc(100vh - 186px);
}
@media (min-width:900px) {
  height: calc(100vh - 209px);
}
@media (min-width:1200px) {
  height: calc(100vh - 209px);
}
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
  letterSpacing: { xs: 2, sm: 3, md: 5, lg: 6 },
  fontSize: { xs: 22, sm: 30, md: 38, lg: 42 },
  fontWeight: "bold",
};

export const tournamentsButtonSx: SxProps<Theme> = {
  width: { xs: 130, sm: 150, md: 300, lg: 330 },
  height: { xs: 30, sm: 40, md: 60, lg: 70 },
  fontSize: { xs: 12, sm: 14, md: 20, lg: 24 },
  marginTop: { xs: 2, sm: 2, md: 3, lg: 3 },
};
