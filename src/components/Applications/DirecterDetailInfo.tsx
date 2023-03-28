import React, { FC } from "react";
import { useSelector } from "react-redux";

import { Typography } from "@mui/material";

import {
  DirecterCard,
  directerCardSx,
  DirecterRow,
  directerRowSx,
  DisableTextField,
  directerNameElementSx,
  directerPhoneElementSx,
  directerEmailElementSx,
  advisorNameElementSx,
} from "themes/Applications/directerDetailInfoTheme";

import { selectApplicantGroupsInfo } from "ducks/applications/slice";
import { ApplicantGroupInfo, DirecterInfo } from "ducks/applications/type";

type Props = {
  arrayIndex: number;
};

const DirecterDetailInfo: FC<Props> = (props: Props) => {
  /** 変数 */
  const arrayIndex = props.arrayIndex;
  const applicantGroupsInfo: ApplicantGroupInfo[] = useSelector(
    selectApplicantGroupsInfo
  );
  const directerInfo: DirecterInfo =
    applicantGroupsInfo[arrayIndex].directerInfo;
  return (
    <>
      <DirecterCard sx={directerCardSx}>
        <Typography variant="h4" gutterBottom>
          監督情報
        </Typography>
        <DirecterRow sx={directerRowSx}>
          <DisableTextField
            id="directer-name"
            variant="outlined"
            label="監督名"
            value={directerInfo.directerName}
            disabled
            sx={directerNameElementSx}
          />
        </DirecterRow>
        <DirecterRow sx={directerRowSx}>
          <DisableTextField
            id="directer-phone"
            variant="outlined"
            label="電話番号"
            value={directerInfo.directerPhone}
            disabled
            sx={directerPhoneElementSx}
          />
        </DirecterRow>
        <DirecterRow sx={directerRowSx}>
          <DisableTextField
            id="directer-name"
            variant="outlined"
            label="メールアドレス"
            value={directerInfo.directerEmail}
            disabled
            sx={directerEmailElementSx}
          />
        </DirecterRow>
        <DirecterRow sx={directerRowSx}>
          <DisableTextField
            id="advisor-name"
            variant="outlined"
            label="アドバイザー名"
            value={directerInfo.advisorName}
            disabled
            sx={advisorNameElementSx}
          />
        </DirecterRow>
      </DirecterCard>
    </>
  );
};

export default DirecterDetailInfo;
