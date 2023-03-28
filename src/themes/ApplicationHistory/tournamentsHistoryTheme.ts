import { SxProps, Theme } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";
import emotionStyled from "@emotion/styled";

// emotionStyled（スタイル）
export const TournamentCard = emotionStyled(Card)`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
cursor: pointer;
box-shadow: 0 3px 0 #4c4c4c;
  &:hover {
    transform: translateY(1px);
    box-shadow: none;
  }
`;

export const TournamentTypography = emotionStyled(Typography)`
font-weight: bold;
`;

// Theme（レスポンシブスタイル）
export const tournamentCardSx: SxProps<Theme> = {
  width: { xs: 300, md: 750 },
  height: { xs: 50, md: 80 },
  marginTop: { xs: 0.5, md: 2 },
  marginBottom: { xs: 0.5, md: 2 },
};

export const tournamentTypographySx: SxProps<Theme> = {
  fontSize: { xs: 18, md: 36 },
};
