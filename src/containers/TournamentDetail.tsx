import Layout from "components/Layout";

import { FormControl } from "@mui/material";
import { AppBox, CommonLink } from "common/commonMaterial";
import {
  TournamentRegistCard,
  tournamentRegistCardSx,
  TournamentRegistCardMedia,
  tournamentRegistCardMediaSx,
  TournamentRegistCardContent,
  tournamentRegistCardContentSx,
  TournamentRegistRow,
  tournamentRegistRowSx,
  DisableTextField,
  titleElementSx,
  classElementSx,
  eventDateElementSx,
  placeElementSx,
  applicantStartElementSx,
  applicantEndElementSx,
  detailPdfUrlElementSx,
  ApplicantButton,
  applicantButtonSx,
} from "themes/tournamentDetailTheme";
import { useTournamentDetailHook } from "hooks/tournamentDetailHook";
import { tournamentClasses } from "common/constants";
import {
  HOME_INFO,
  TOURNAMNTS_INFO,
  TOURNAMNT_DETAIL_INFO,
} from "common/PAGES";

const TournamentDetail = () => {
  // ReactHook
  const {
    tournamentDetailInfo,
    isAdmin,
    onClickApply,
    onClickPdfLink,
    onClickApplicationsLink,
    applicantJudge,
  } = useTournamentDetailHook();

  return (
    <>
      <Layout
        breadcrumbs={[
          HOME_INFO.CONTEXT,
          TOURNAMNTS_INFO.CONTEXT,
          TOURNAMNT_DETAIL_INFO.CONTEXT,
        ]}
      >
        <AppBox>
          <TournamentRegistCard sx={tournamentRegistCardSx}>
            <TournamentRegistCardMedia sx={tournamentRegistCardMediaSx}>
              大会登録情報
            </TournamentRegistCardMedia>
            <TournamentRegistCardContent sx={tournamentRegistCardContentSx}>
              <TournamentRegistRow sx={tournamentRegistRowSx}>
                <FormControl variant="outlined" sx={titleElementSx}>
                  <DisableTextField
                    id="tournament-title"
                    label="大会名"
                    variant="outlined"
                    value={tournamentDetailInfo.tournamentTitle}
                    disabled
                  />
                </FormControl>
                <FormControl variant="outlined" sx={classElementSx}>
                  <DisableTextField
                    id="tournament-select"
                    label="大会区分"
                    variant="outlined"
                    value={
                      tournamentClasses[tournamentDetailInfo.tournamentClass]
                        .label
                    }
                    disabled
                  />
                </FormControl>
              </TournamentRegistRow>

              <TournamentRegistRow sx={tournamentRegistRowSx}>
                <FormControl variant="outlined" sx={eventDateElementSx}>
                  <DisableTextField
                    id="tournament-eventDate"
                    label="開催日"
                    variant="outlined"
                    value={tournamentDetailInfo.eventDate}
                    disabled
                  />
                </FormControl>
                <FormControl variant="outlined" sx={placeElementSx}>
                  <DisableTextField
                    id="tournament-place"
                    label="開催場所"
                    variant="outlined"
                    value={tournamentDetailInfo.place}
                    disabled
                  />
                </FormControl>
              </TournamentRegistRow>

              <TournamentRegistRow sx={tournamentRegistRowSx}>
                <FormControl variant="outlined" sx={applicantStartElementSx}>
                  <DisableTextField
                    id="tournament-applicationStartDate"
                    label="申込開始日"
                    variant="outlined"
                    value={tournamentDetailInfo.applicationStartDate}
                    disabled
                  />
                </FormControl>

                <FormControl variant="outlined" sx={applicantEndElementSx}>
                  <DisableTextField
                    id="tournament-applicationEndDate"
                    label="申込終了日"
                    variant="outlined"
                    value={tournamentDetailInfo.applicationEndDate}
                    disabled
                  />
                </FormControl>
              </TournamentRegistRow>

              <TournamentRegistRow sx={tournamentRegistRowSx}>
                <FormControl variant="outlined" sx={detailPdfUrlElementSx}>
                  <CommonLink underline="hover" onClick={onClickPdfLink}>
                    {"要項はこちら(別タブで開く)"}
                  </CommonLink>
                </FormControl>
              </TournamentRegistRow>
            </TournamentRegistCardContent>
          </TournamentRegistCard>{" "}
          {applicantJudge() && (
            <ApplicantButton onClick={onClickApply} sx={applicantButtonSx}>
              申込
            </ApplicantButton>
          )}
          {isAdmin && (
            <CommonLink
              underline="hover"
              onClick={onClickApplicationsLink}
              sx={{ marginTop: { xs: 1, md: 2 } }}
            >
              参加者情報はこちら
            </CommonLink>
          )}
        </AppBox>
      </Layout>
    </>
  );
};

export default TournamentDetail;
