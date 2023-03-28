import { Card, Box, TextField } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import emotionStyled from "@emotion/styled";

// emotionStyled（スタイル）
export const ApplicationsCard = emotionStyled(Card)`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
border: solid;
`;

export const ApplicationCard = emotionStyled(Card)`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`;

export const ApplicationNoArea = emotionStyled(Box)`
display: flex;
flex-flow: column;
justify-content: center;
align-items: start;
border-right: solid;
border-color: #cccccc;
`;

export const ApplicationInfoArea = emotionStyled(Box)`
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
export const applicationsCardSx: SxProps<Theme> = {
  width: { xs: 300, md: 750 },
  paddingTop: { xs: 1, md: 1.5 },
  paddingBottom: { xs: 1, md: 1.5 },
  marginTop: 1.5,
  marginBottom: 1.5,
};

export const applicationCardSx: SxProps<Theme> = {
  width: { xs: 300, md: 700 },
  paddingTop: { xs: 1, md: 2 },
  paddingBottom: { xs: 1, md: 1.5 },
  marginTop: 1,
  marginBottom: 1,
};

export const applicationNoAreaSx: SxProps<Theme> = {
  width: { xs: 300, md: 150 },
  height: { xs: 300, md: 80 },
};

export const applicationInfoAreaSx: SxProps<Theme> = {
  width: { xs: 300, md: 500 },
  height: { xs: 300, md: 80 },
  gap: 2,
};

export const applicationNameElementSx: SxProps<Theme> = {
  width: { xs: 300, md: 200 },
};

export const applicationBirthdayElementSx: SxProps<Theme> = {
  width: { xs: 300, md: 150 },
};

export const applicationSchoolYearElementSx: SxProps<Theme> = {
  width: { xs: 300, md: 60 },
};
