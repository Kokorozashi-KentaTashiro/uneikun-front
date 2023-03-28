import { SxProps, Theme } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import emotionStyled from "@emotion/styled";

// emotionStyled（スタイル）
export const TournamentsCommonButton = emotionStyled(Button)`
  background-color: #377a7a;
  box-shadow: 0 3px 0 #163030;
    &:hover {
      background-color: #377a7a;
      transform: translateY(1px);
      box-shadow: none;
    }
`;

export const TournamentsConfirmButton = emotionStyled(Button)`
  color: #FFFFFF;
  background-color: #D76550;
  box-shadow: 0 3px 0 #562820;
    &:hover {
      background-color: #D76550;
      transform: translateY(1px);
      box-shadow: none;
    }
`;

export const TitleTypography = emotionStyled(Typography)`
  font-weight: bold;
`;

// Theme（レスポンシブスタイル）
export const tournamentsCommonButtonSx: SxProps<Theme> = {
  width: { xs: 100, md: 150 },
  height: { xs: 30, md: 50 },
  margin: { xs: 1, md: 2 },
};

export const titleTypographySx: SxProps<Theme> = {
  fontSize: { xs: 20, md: 34 },
  marginTop: { xs: 0.5, md: 1 },
  marginBottom: { xs: 0.5, md: 1 },
};
