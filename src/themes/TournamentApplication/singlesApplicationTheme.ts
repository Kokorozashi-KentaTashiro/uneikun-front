import { SxProps, Theme } from "@mui/material/styles";
import { Icon } from "@iconify/react";
import { TableRow, TableCell } from "@mui/material";
import emotionStyled from "@emotion/styled";

// emotionStyled（スタイル）
export const AddIcon = emotionStyled(Icon)`
position: absolute;
width: 50px;
height: 50px;
left: 350px;
top: 6px;
color: #50A6D7;
cursor: pointer;
`;

export const DeleteIcon = emotionStyled(Icon)`
position: absolute;
width: 50px;
height: 50px;
left: 26px;
top: 20px;
color: #FF3232;
cursor: pointer;
`;

export const SinglesApplicantTableIncrementRow = emotionStyled(TableRow)`
position: relative;
text-align: center;
`;

export const SinglesApplicantTableBodyCell = emotionStyled(TableCell)`
position: relative;
`;

// Theme（レスポンシブスタイル）
export const singlesApplicantTableSx: SxProps<Theme> = {
  width: { xs: 340, sm: 550, md: 750 },
  margin: { xs: 1, md: 2 },
};

export const singlesApplicantTableHeadeSx: SxProps<Theme> = {
  width: { xs: 300, md: 750 },
};

export const singlesApplicantTableHeadRowSx: SxProps<Theme> = {
  "& th": {
    fontWeight: "bold",
    color: "#151515",
    backgroundColor: "#D9D9D9",
    fontSize: { xs: 12, sm: 14, md: 18 },
  },

  "& th:nth-child(1)": {
    width: { xs: 20, sm: 30, md: 50 },
  },
  "& th:nth-child(2)": {
    width: { xs: 20, sm: 30, md: 50 },
  },
  "& th:nth-child(3)": {
    width: { xs: 20, sm: 30, md: 50 },
  },
  "& th:nth-child(4)": {
    width: { xs: 20, sm: 30, md: 50 },
  },
  "& th:nth-child(5)": {
    width: { xs: 20, sm: 30, md: 50 },
  },
  "& th:nth-child(6)": {
    width: { xs: 20, sm: 30, md: 50 },
  },
};

export const singlesApplicantTableBodyRowSx: SxProps<Theme> = {
  height: { xs: 50, md: 80 },
};

export const singlesApplicantTableIncrementRowSx: SxProps<Theme> = {
  height: { xs: 50, md: 60 },
};
