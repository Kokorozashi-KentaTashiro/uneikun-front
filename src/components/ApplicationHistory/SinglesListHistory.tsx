import React, { FC } from "react";

import { Typography } from "@mui/material";
import {
  ApplicationsCard,
  applicationsCardSx,
  ApplicationCard,
  applicationCardSx,
  DisableTextField,
  applicationNameElementSx,
  applicationBirthdayElementSx,
  applicationSchoolYearElementSx,
  applicationRankElementSx,
} from "themes/ApplicationHistory/singlesListHistoryTheme";

import { SinglesApplicationInfo } from "ducks/applicationHistory/type";

import { schoolYears } from "common/constants";
import { useApplicationHistoryHook } from "hooks/applicationHistoryHook";

type Props = {
  arrayIndex: number;
};
const SinglesListHistory: FC<Props> = (props: Props) => {
  // ReactHook
  const { historyGroupsInfo } = useApplicationHistoryHook();
  // 変数
  const arrayIndex = props.arrayIndex;
  const singlesApplicationsInfo: SinglesApplicationInfo[] =
    historyGroupsInfo[arrayIndex].singlesApplicationsInfo;

  return (
    <>
      <ApplicationsCard sx={applicationsCardSx}>
        <Typography variant="h4" gutterBottom>
          参加者情報
        </Typography>

        {singlesApplicationsInfo.map(
          (singlesApplicationInfo: SinglesApplicationInfo) => {
            return (
              <>
                <ApplicationCard sx={applicationCardSx}>
                  <DisableTextField
                    id="application-name"
                    variant="outlined"
                    label="氏名"
                    value={`${singlesApplicationInfo.lastName} ${singlesApplicationInfo.firstName}`}
                    disabled
                    sx={applicationNameElementSx}
                  />
                  <DisableTextField
                    id="application-birthday"
                    variant="outlined"
                    label="生年月日"
                    value={singlesApplicationInfo.birthDay}
                    disabled
                    sx={applicationBirthdayElementSx}
                  />
                  <DisableTextField
                    id="application-schoolYear"
                    variant="outlined"
                    label="学年"
                    value={schoolYears[singlesApplicationInfo.schoolYear].label}
                    disabled
                    sx={applicationSchoolYearElementSx}
                  />
                  <DisableTextField
                    id="application-rank"
                    variant="outlined"
                    label="支部大会順位"
                    value={singlesApplicationInfo.rank}
                    disabled
                    sx={applicationRankElementSx}
                  />
                </ApplicationCard>
              </>
            );
          }
        )}
      </ApplicationsCard>
    </>
  );
};

export default SinglesListHistory;
