import { Card, TextField } from "@mui/material";
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
  width: { xs: 300, md: 560 },
  paddingTop: { xs: 1, md: 2 },
  paddingBottom: { xs: 1, md: 1.5 },
  marginTop: 1,
  marginBottom: 1,
  gap: 2,
};

export const applicationNameElementSx: SxProps<Theme> = {
  width: { xs: 300, md: 190 },
};

export const applicationBirthdayElementSx: SxProps<Theme> = {
  width: { xs: 300, md: 120 },
};

export const applicationSchoolYearElementSx: SxProps<Theme> = {
  width: { xs: 300, md: 60 },
};

export const applicationRankElementSx: SxProps<Theme> = {
  width: { xs: 300, md: 100 },
};
