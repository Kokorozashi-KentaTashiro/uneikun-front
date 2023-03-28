import { FC } from "react";

import Layout from "components/Layout";

import { AppBox, CommonLoading } from "common/commonMaterial";
import { Box } from "@mui/material";
import {
  TitleTypography,
  titleTypographySx,
  TournamentsCommonButton,
  TournamentsConfirmButton,
  tournamentsCommonButtonSx,
} from "themes/tournamentApplicationTheme";
import SinglesApplication from "components/TournamentApplication/SinglesApplication";
import TeamApplication from "components/TournamentApplication/TeamApplication";
import { useTournamentApplicationHook } from "hooks/tournamentApplicationHook";
import TeamInfo from "components/TournamentApplication/TeamInfo";
import DirecterInfo from "components/TournamentApplication/DirecterInfo";
import {
  HOME_INFO,
  TOURNAMNTS_INFO,
  TOURNAMNT_APPLICATION_INFO,
} from "common/PAGES";

const TournamentApplication: FC = () => {
  // ReactHook
  const {
    onClickApply,
    isLoading,
    tournamentTitle,
    tournamentClass,
    stage,
    confirmDisabled,
    onClickNext,
    onClickBack,
  } = useTournamentApplicationHook();

  return (
    <Layout
      breadcrumbs={[
        HOME_INFO.CONTEXT,
        TOURNAMNTS_INFO.CONTEXT,
        TOURNAMNT_APPLICATION_INFO.CONTEXT,
      ]}
    >
      <AppBox>
        {isLoading ? (
          <CommonLoading size={100} />
        ) : (
          <>
            <TitleTypography sx={titleTypographySx}>
              {tournamentTitle}
            </TitleTypography>
            {stage === 0 && (
              <>
                <TeamInfo />
                <Box>
                  <TournamentsCommonButton
                    variant="contained"
                    sx={tournamentsCommonButtonSx}
                    onClick={onClickNext}
                  >
                    次へ
                  </TournamentsCommonButton>
                </Box>
              </>
            )}
            {stage === 1 && (
              <>
                <DirecterInfo />
                <Box>
                  <TournamentsCommonButton
                    variant="contained"
                    sx={tournamentsCommonButtonSx}
                    onClick={onClickBack}
                  >
                    戻る
                  </TournamentsCommonButton>
                  <TournamentsCommonButton
                    variant="contained"
                    sx={tournamentsCommonButtonSx}
                    onClick={onClickNext}
                  >
                    次へ
                  </TournamentsCommonButton>
                </Box>
              </>
            )}
            {stage === 2 && (
              <>
                {tournamentClass === 0 && <TeamApplication />}
                {tournamentClass === 1 && <SinglesApplication />}
                <Box>
                  <TournamentsCommonButton
                    variant="contained"
                    sx={tournamentsCommonButtonSx}
                    onClick={onClickBack}
                  >
                    戻る
                  </TournamentsCommonButton>
                  <TournamentsCommonButton
                    variant="contained"
                    sx={tournamentsCommonButtonSx}
                    onClick={onClickNext}
                  >
                    次へ
                  </TournamentsCommonButton>
                </Box>
              </>
            )}
            {stage === 3 && (
              <>
                <TeamInfo />
                <DirecterInfo />
                {tournamentClass === 0 && <TeamApplication />}
                {tournamentClass === 1 && <SinglesApplication />}
                <Box>
                  <TournamentsConfirmButton
                    variant="contained"
                    sx={tournamentsCommonButtonSx}
                    onClick={onClickApply}
                    disabled={confirmDisabled}
                  >
                    確定
                  </TournamentsConfirmButton>
                </Box>
              </>
            )}
          </>
        )}
      </AppBox>
    </Layout>
  );
};

export default TournamentApplication;
