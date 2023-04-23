import { SxProps, Theme } from "@mui/material/styles";
import { Button } from "@mui/material";
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

// Theme（レスポンシブスタイル）
export const applicationHistoryButtonSx: SxProps<Theme> = {
  width: { xs: 100, sm: 140, md: 160, lg: 190 },
  height: { xs: 40, sm: 50, md: 60, lg: 80 },
  margin: { xs: 2, sm: 2.5, md: 3, lg: 3.5 },
  fontSize: { xs: 13, sm: 18, md: 22, lg: 28 },
};

export const registButtonSx: SxProps<Theme> = {
  width: { xs: 100, sm: 140, md: 160, lg: 190 },
  height: { xs: 40, sm: 50, md: 60, lg: 80 },
  margin: { xs: 2, sm: 2.5, md: 3, lg: 3.5 },
  fontSize: { xs: 13, sm: 18, md: 22, lg: 28 },
};
