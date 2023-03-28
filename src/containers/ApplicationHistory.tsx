import { FC, useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Layout from "components/Layout";
import { AppBox, CommonLoading } from "common/commonMaterial";
import { fetchAsyncGetTournaments } from "ducks/applicationHistory/slice";
import { HistoryGroupInfo } from "ducks/applicationHistory/type";
import TournamentsHistory from "components/ApplicationHistory/TournamentsHistory";
import TeamHistory from "components/ApplicationHistory/TeamHistory";
import DirecterHistory from "components/ApplicationHistory/DirecterHistory";
import TeamListHistory from "components/ApplicationHistory/TeamListHistory";
import SinglesListHistory from "components/ApplicationHistory/SinglesListHistory";
import {
  NoneTypography,
  noneTypographySx,
  TitleTypography,
  titleTypographySx,
  accordionSx,
  BackButton,
  backButtonSx,
} from "themes/applicationHistoryTheme";
import { sexies } from "common/constants";
import { useApplicationHistoryHook } from "hooks/applicationHistoryHook";
import {
  HOME_INFO,
  TOURNAMNTS_INFO,
  APPLICATION_HISTORY_INFO,
} from "common/PAGES";

const ApplicationHistory: FC = () => {
  // ReactHook
  const {
    dispatch,
    userInfo,
    isLoading,
    tournamentName,
    tournamentClass,
    tournamentsInfo,
    historyGroupsInfo,
    onClickBack,
  } = useApplicationHistoryHook();

  /** useEffect */
  useEffect(() => {
    dispatch(fetchAsyncGetTournaments(userInfo.userId));
  }, [dispatch, userInfo]);

  return (
    <>
      <Layout
        breadcrumbs={[
          HOME_INFO.CONTEXT,
          TOURNAMNTS_INFO.CONTEXT,
          APPLICATION_HISTORY_INFO.CONTEXT,
        ]}
      >
        <AppBox>
          {isLoading ? (
            <CommonLoading size={100} />
          ) : (
            <>
              {tournamentsInfo.length === 0 ? (
                <NoneTypography sx={noneTypographySx}>
                  申込履歴情報がありません
                </NoneTypography>
              ) : (
                <>
                  {historyGroupsInfo.length === 0 ? (
                    <TournamentsHistory />
                  ) : (
                    <>
                      <TitleTypography sx={titleTypographySx}>
                        {tournamentName}
                      </TitleTypography>
                      {historyGroupsInfo.map(
                        (historyGroupInfo: HistoryGroupInfo, index: number) => {
                          return (
                            <>
                              <Accordion sx={accordionSx}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1a-content"
                                  id="panel1a-header"
                                >
                                  <Typography variant="h3">
                                    {`申込${index + 1}（${
                                      sexies[
                                        historyGroupInfo.teamDetailInfo.teamSex
                                      ].label
                                    }）`}
                                  </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <TeamHistory arrayIndex={index} />
                                  <DirecterHistory arrayIndex={index} />
                                  {tournamentClass === 0 && (
                                    <TeamListHistory arrayIndex={index} />
                                  )}
                                  {tournamentClass === 1 && (
                                    <SinglesListHistory arrayIndex={index} />
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
                        onClick={onClickBack}
                      >
                        戻る
                      </BackButton>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </AppBox>
      </Layout>
    </>
  );
};

export default ApplicationHistory;
