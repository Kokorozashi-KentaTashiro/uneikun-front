import { FC } from "react";
import { Card, CardContent } from "@mui/material";
import Layout from "components/Layout";
import { AppBox, CommonLoading } from "common/commonMaterial";
import { useTournamentsHook } from "hooks/tournamentsHook";
import {
  RegistButton,
  registButtonSx,
  ApplicationHistoryButton,
  applicationHistoryButtonSx,
  TournamentsCard,
  tournamentsCardSx,
  TournamentsCardMedia,
  tournamentsCardMediaSx,
  TournamentsCardContent,
  tournamentsCardContentSx,
  ViewArea,
  eventDateCardSx,
  ElementInfoCardMedia,
  eventDateCardMediaSx,
  placeCardSx,
  placeCardMediaSx,
  applicationEndCardSx,
  applicationEndCardMediaSx,
  ButtonArea,
  buttonAreaSx,
  DetailViewButton,
  detailViewButtonSx,
  ApplicantButton,
  applicantButtonSx,
  ApplicantNormalFont,
  applicantNormalFontSx,
  ApplicantSpecialFont,
  applicantSpecialFontSx,
} from "themes/tournamentsTheme";
import { HOME_INFO, TOURNAMNTS_INFO } from "common/PAGES";

const Tournaments: FC = () => {
  // ReactHook
  const {
    isLoading,
    tournamentsInfo,
    isAdmin,
    onClickApply,
    onClickDetail,
    onClickRegist,
    onClickHistory,
    applicantJudge,
  } = useTournamentsHook();

  return (
    <>
      <Layout breadcrumbs={[HOME_INFO.CONTEXT, TOURNAMNTS_INFO.CONTEXT]}>
        <AppBox>
          {isLoading ? (
            <CommonLoading size={100} />
          ) : (
            <>
              {isAdmin ? (
                <RegistButton
                  variant="contained"
                  onClick={() => onClickRegist()}
                  sx={registButtonSx}
                >
                  新規登録
                </RegistButton>
              ) : (
                <ApplicationHistoryButton
                  variant="contained"
                  onClick={() => onClickHistory()}
                  sx={applicationHistoryButtonSx}
                >
                  申込履歴
                </ApplicationHistoryButton>
              )}
              {tournamentsInfo.map((tournamentInfo) => {
                return (
                  <TournamentsCard variant="outlined" sx={tournamentsCardSx}>
                    <TournamentsCardMedia sx={tournamentsCardMediaSx}>
                      {tournamentInfo.tournamentTitle}
                    </TournamentsCardMedia>
                    <TournamentsCardContent sx={tournamentsCardContentSx}>
                      <ViewArea>
                        <Card sx={eventDateCardSx}>
                          <ElementInfoCardMedia sx={eventDateCardMediaSx}>
                            開催日
                          </ElementInfoCardMedia>
                          <CardContent>{tournamentInfo.eventDate}</CardContent>
                        </Card>
                        <Card sx={placeCardSx}>
                          <ElementInfoCardMedia sx={placeCardMediaSx}>
                            会場
                          </ElementInfoCardMedia>
                          <CardContent>{tournamentInfo.place}</CardContent>
                        </Card>
                        <Card sx={applicationEndCardSx}>
                          <ElementInfoCardMedia sx={applicationEndCardMediaSx}>
                            申込期限
                          </ElementInfoCardMedia>
                          <CardContent>
                            {tournamentInfo.applicationEndDate}
                          </CardContent>
                        </Card>
                      </ViewArea>
                      <ButtonArea sx={buttonAreaSx}>
                        <DetailViewButton
                          variant="contained"
                          onClick={() => onClickDetail(tournamentInfo)}
                          sx={detailViewButtonSx}
                        >
                          要項をみる
                        </DetailViewButton>
                        <ApplicantButton
                          variant="contained"
                          disabled={applicantJudge(tournamentInfo)}
                          onClick={() => onClickApply(tournamentInfo)}
                          sx={applicantButtonSx}
                        >
                          <ApplicantNormalFont sx={applicantNormalFontSx}>
                            この大会へ
                          </ApplicantNormalFont>
                          <ApplicantSpecialFont sx={applicantSpecialFontSx}>
                            申し込む
                          </ApplicantSpecialFont>
                        </ApplicantButton>
                      </ButtonArea>
                    </TournamentsCardContent>
                  </TournamentsCard>
                );
              })}
            </>
          )}
        </AppBox>
      </Layout>
    </>
  );
};

export default Tournaments;
