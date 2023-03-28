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
} from "themes/Applications/singlesApplicationsListTheme";

import { SinglesApplicationInfo } from "ducks/applications/type";

import { schoolYears } from "common/constants";
import { useApplicationsHook } from "hooks/applicationsHook";

type Props = {
  arrayIndex: number;
};
const SinglesApplicationsList: FC<Props> = (props: Props) => {
  // ReactHook
  const { applicantGroupsInfo } = useApplicationsHook();

  // 変数
  const arrayIndex = props.arrayIndex;
  const singlesApplicationsInfo: SinglesApplicationInfo[] =
    applicantGroupsInfo[arrayIndex].singlesApplicationsInfo;

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
                </ApplicationCard>
              </>
            );
          }
        )}
      </ApplicationsCard>
    </>
  );
};

export default SinglesApplicationsList;
