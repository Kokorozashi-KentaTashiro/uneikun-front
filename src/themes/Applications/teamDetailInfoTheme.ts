import { SxProps, Theme } from "@mui/material/styles";
import { Box, Card, TextField } from "@mui/material";
import emotionStyled from "@emotion/styled";

// emotionStyled（スタイル）
export const TeamCard = emotionStyled(Card)`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
cursor: pointer;
border: solid;
`;

export const TeamRow = emotionStyled(Box)`
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

// Theme（レスポンシブスタイル）
export const teamCardSx: SxProps<Theme> = {
  width: { xs: 300, md: 750 },
  paddingTop: { xs: 1, md: 1.5 },
  paddingBottom: { xs: 1, md: 1.5 },
  marginTop: 1.5,
  marginBottom: 1.5,
};

export const teamRowSx: SxProps<Theme> = {
  width: { xs: 300, md: 700 },
  marginTop: 2,
  marginBottom: 2,
  gap: 3,
};

export const teamElementSx: SxProps<Theme> = {
  width: { xs: 300, md: 280 },
};

export const teamZoneElementSx: SxProps<Theme> = {
  width: { xs: 300, md: 230 },
};

export const teamRankElementSx: SxProps<Theme> = {
  width: { xs: 300, md: 100 },
};

export const teamAddressElementSx: SxProps<Theme> = {
  width: { xs: 300, md: 660 },
};

export const teamPhoneElementSx: SxProps<Theme> = {
  width: { xs: 300, md: 320 },
};

export const teamEmailElementSx: SxProps<Theme> = {
  width: { xs: 300, md: 320 },
};

export const teamManagerElementSx: SxProps<Theme> = {
  width: { xs: 300, md: 280 },
};

export const teamSexElementSx: SxProps<Theme> = {
  width: { xs: 300, md: 100 },
};
