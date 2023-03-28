import { SxProps, Theme } from "@mui/material/styles";
import { Button, Card } from "@mui/material";
import emotionStyled from "@emotion/styled";

// emotionStyled（スタイル）
export const SignUpCommonCard = emotionStyled(Card)`
display: flex;
flex-flow: column;
align-items: center;
justify-content: center;
`;

export const SignUpCommonButton = emotionStyled(Button)`
background-color: #377a7a;
box-shadow: 0 3px 0 #163030;
  &:hover {
    background-color: #377a7a;
    transform: translateY(1px);
    box-shadow: none;
  }
`;

// Theme（レスポンシブスタイル）
export const signUpCommonCardSx: SxProps<Theme> = {
  width: { xs: 300, md: 400 },
  paddingTop: { xs: 1, md: 2 },
  paddingBottom: { xs: 1, md: 2 },
  minHeight: { xs: 30, md: 200 },
};

export const signUpCommonButtonSx: SxProps<Theme> = {
  width: { xs: 100, md: 150 },
  height: { xs: 30, md: 50 },
  marginTop: { xs: 1, md: 2 },
  marginBottom: { xs: 1, md: 1 },
};

export const signUpTextSx: SxProps<Theme> = {
  margin: { xs: 1, md: 2 },
};
