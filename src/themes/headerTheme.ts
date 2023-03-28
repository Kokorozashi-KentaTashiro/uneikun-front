import { SxProps, Theme } from "@mui/material/styles";
import { Typography, AppBar, Box, Menu } from "@mui/material";
import { Icon } from "@iconify/react";
import emotionStyled from "@emotion/styled";

// emotionStyled（スタイル）
export const CustomAppBar = emotionStyled(AppBar)`
  background-color: var(--primary-color);
  position: fixed;
`;

export const TitleTypography = emotionStyled(Typography)`
  mr: 2;
  font-family: monospace;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;

export const HamburgerBox = emotionStyled(Box)`
  flex-grow: 1;
`;

export const PagesMenuXs = emotionStyled(Menu)`
`;

export const PagesMenuMd = emotionStyled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: end;
  align-items: center;
  flex-grow: 1;
`;

export const IconMd = emotionStyled(Icon)`
width: 45px;
height: 45px;
margin-right: 20px;
margin-left: 20px;
@media (max-width:899px) {
  display: none;
}
@media (min-width:900px) {
  display: flex;
}
`;

export const IconXs = emotionStyled(Icon)`
width: 35px;
height: 35px;
margin-right: 18px;
margin-left: 18px;
@media (max-width:899px) {
  display: flex;
}
@media (min-width:900px) {
  display: none;
}
`;

// Theme（レスポンシブスタイル）
export const TitleTypographyMdSx: SxProps<Theme> = {
  fontWeight: 700,
  letterSpacing: 10,
  display: { xs: "none", md: "flex" },
  fontSize: { md: 26, lg: 30 },
};

export const TitleTypographyXsSx: SxProps<Theme> = {
  fontWeight: 500,
  letterSpacing: 10,
  display: { xs: "flex", md: "none" },
  flexGrow: 1,
};

export const adbIconMdSx: SxProps<Theme> = {
  display: { xs: "none", md: "flex" },
  fontSize: { md: 32, lg: 36 },
  marginRight: 1,
  marginLeft: { md: 2, lg: 1 },
};

export const adbIconXsSx: SxProps<Theme> = {
  display: { xs: "flex", md: "none" },
  mr: 1,
};

export const hamburgerBoxSx: SxProps<Theme> = {
  display: { xs: "flex", md: "none" },
};

export const pagesMenuXsSx: SxProps<Theme> = {
  display: { xs: "block", md: "none" },
};

export const pagesMenuMdSx: SxProps<Theme> = {
  display: { xs: "none", md: "flex" },
  paddingRight: 2.5,
};

export const pagesMenuButtonMdSx: SxProps<Theme> = {
  my: 2,
  color: "white",
  display: "block",
  fontSize: { md: 16, lg: 20 },
};
