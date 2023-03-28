import { FC } from "react";
import Layout from "components/Layout";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { AppBox } from "common/commonMaterial";
import {
  TitleTypography,
  titleTypographySx,
  accordionSx,
  BackButton,
  backButtonSx,
} from "themes/applicationsTheme";
import { initApplicantGroupsInfo } from "ducks/applications/slice";
import { ApplicantGroupInfo } from "ducks/applications/type";
import TeamsList from "components/Applications/TeamsList";
import TeamApplicationsList from "components/Applications/TeamApplicationsList";
import SinglesApplicationsList from "components/Applications/SinglesApplicationsList";
import TeamDetailInfo from "components/Applications/TeamDetailInfo";
import DirecterDetailInfo from "components/Applications/DirecterDetailInfo";
import { useApplicationsHook } from "hooks/applicationsHook";
import {
  HOME_INFO,
  TOURNAMNTS_INFO,
  TOURNAMNT_DETAIL_INFO,
  APPLICATIONS_VIEW_INFO,
} from "common/PAGES";

const Applications: FC = () => {
  // ReactHook
  const { dispatch, applicantGroupsInfo, tournamentTitle, tournamentClass } =
    useApplicationsHook();

  return (
    <>
      <Layout
        breadcrumbs={[
          HOME_INFO.CONTEXT,
          TOURNAMNTS_INFO.CONTEXT,
          TOURNAMNT_DETAIL_INFO.CONTEXT,
          APPLICATIONS_VIEW_INFO.CONTEXT,
        ]}
      >
        <AppBox>
          <>
            <TitleTypography sx={titleTypographySx}>
              {tournamentTitle}
            </TitleTypography>
            {applicantGroupsInfo.length === 0 ? (
              <TeamsList />
            ) : (
              <>
                {applicantGroupsInfo.map(
                  (applicantGroupInfo: ApplicantGroupInfo, index: number) => {
                    return (
                      <>
                        <Accordion sx={accordionSx}>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography variant="h3">{`申込${
                              index + 1
                            }`}</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <TeamDetailInfo arrayIndex={index} />
                            <DirecterDetailInfo arrayIndex={index} />
                            {tournamentClass === 0 && (
                              <TeamApplicationsList arrayIndex={index} />
                            )}
                            {tournamentClass === 1 && (
                              <SinglesApplicationsList arrayIndex={index} />
                            )}
                          </AccordionDetails>
                        </Accordion>
                      </>
                    );
                  }
                )}
                <BackButton
                  variant="contained"
                  sx={backButtonSx}
                  onClick={() => {
                    dispatch(initApplicantGroupsInfo());
                  }}
                >
                  戻る
                </BackButton>
              </>
            )}
          </>
        </AppBox>
      </Layout>
    </>
  );
};

export default Applications;
