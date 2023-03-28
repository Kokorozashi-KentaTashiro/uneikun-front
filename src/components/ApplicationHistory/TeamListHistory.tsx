import React, { FC } from "react";

import { Typography } from "@mui/material";
import { useApplicationHistoryHook } from "hooks/applicationHistoryHook";

import {
  ApplicationsCard,
  applicationsCardSx,
  ApplicationCard,
  applicationCardSx,
  ApplicationNoArea,
  applicationNoAreaSx,
  ApplicationInfoArea,
  applicationInfoAreaSx,
  DisableTextField,
  applicationNameElementSx,
  applicationBirthdayElementSx,
  applicationSchoolYearElementSx,
} from "themes/ApplicationHistory/teamListHistoryTheme";

import { TeamApplicationInfo } from "ducks/applicationHistory/type";

import { schoolYears } from "common/constants";

type Props = {
  arrayIndex: number;
};
const TeamListHistory: FC<Props> = (props: Props) => {
  // ReactHook
  const { historyGroupsInfo } = useApplicationHistoryHook();
  // 変数
  const arrayIndex = props.arrayIndex;
  const teamApplicationsInfo: TeamApplicationInfo[] =
    historyGroupsInfo[arrayIndex].teamApplicationsInfo;

  return (
    <>
      <ApplicationsCard sx={applicationsCardSx}>
        <Typography variant="h4" gutterBottom>
          参加者情報
        </Typography>

        {teamApplicationsInfo.map(
          (teamApplicationInfo: TeamApplicationInfo) => {
            return (
              <>
                <ApplicationCard sx={applicationCardSx}>
                  <ApplicationNoArea sx={applicationNoAreaSx}>
                    <Typography variant="h5" gutterBottom>
                      {`No${teamApplicationInfo.order}${
                        teamApplicationInfo.captain ? "（主将）" : ""
                      }`}
                    </Typography>
                  </ApplicationNoArea>
                  <ApplicationInfoArea sx={applicationInfoAreaSx}>
                    <DisableTextField
                      id="application-name"
                      variant="outlined"
                      label="氏名"
                      value={`${teamApplicationInfo.lastName} ${teamApplicationInfo.firstName}`}
                      disabled
                      sx={applicationNameElementSx}
                    />
                    <DisableTextField
                      id="application-birthday"
                      variant="outlined"
                      label="生年月日"
                      value={teamApplicationInfo.birthDay}
                      disabled
                      sx={applicationBirthdayElementSx}
                    />
                    <DisableTextField
                      id="application-schoolYear"
                      variant="outlined"
                      label="学年"
                      value={schoolYears[teamApplicationInfo.schoolYear].label}
                      disabled
                      sx={applicationSchoolYearElementSx}
                    />
                  </ApplicationInfoArea>
                </ApplicationCard>
              </>
            );
          }
        )}
      </ApplicationsCard>
    </>
  );
};

export default TeamListHistory;
