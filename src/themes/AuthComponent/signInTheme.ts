import { SxProps, Theme } from "@mui/material/styles";
import { Button, Card, Typography } from "@mui/material";
import emotionStyled from "@emotion/styled";
// emotionStyled（スタイル）
export const SignInCommonCard = emotionStyled(Card)`
display: flex;
flex-flow: column;
align-items: center;
justify-content: center;
`;

export const SignInCommonButton = emotionStyled(Button)`
background-color: #377a7a;
box-shadow: 0 3px 0 #163030;
  &:hover {
    background-color: #377a7a;
    transform: translateY(1px);
    box-shadow: none;
  }
`;

export const SignInTypography = emotionStyled(Typography)`
color: red;
font-weight: normal;
`;

// Theme（レスポンシブスタイル）
export const signInCommonCardSx: SxProps<Theme> = {
  width: { xs: 300, md: 400 },
  height: { xs: 250, md: 300 },
};

export const signInCommonButtonSx: SxProps<Theme> = {
  width: { xs: 100, md: 150 },
  height: { xs: 30, md: 50 },
  marginTop: { xs: 1, md: 2 },
  marginBottom: { xs: 1, md: 1 },
};

export const signInTextSx: SxProps<Theme> = {
  margin: 2,
};

export const signInTypographySx: SxProps<Theme> = {
  fontSize: { xs: 8, md: 10 },
};
