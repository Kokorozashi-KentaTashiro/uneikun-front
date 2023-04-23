import { FC, useEffect } from "react";
import Layout from "components/Layout";
import { AppBox, CommonLoading } from "common/commonMaterial";
import { useTournamentsHook } from "hooks/tournamentsHook";
import {
  RegistButton,
  registButtonSx,
  ApplicationHistoryButton,
  applicationHistoryButtonSx,
} from "themes/tournamentsTheme";
import { HOME_INFO, TOURNAMNTS_INFO } from "common/PAGES";
import TournamentCard from "components/Tournaments/TournamentCard";
import { fetchAsyncGetTournaments } from "ducks/tournaments/slice";

const Tournaments: FC = () => {
  // ReactHook
  const {
    isLoading,
    tournamentsInfo,
    isAdmin,
    page,
    onClickRegist,
    onClickHistory,
    dispatch,
  } = useTournamentsHook();

  // useEffect
  useEffect(() => {
    (async () => {
      await dispatch(fetchAsyncGetTournaments());
    })();
  }, [page, dispatch]);

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
                return <TournamentCard tournamentInfo={tournamentInfo} />;
              })}
            </>
          )}
        </AppBox>
      </Layout>
    </>
  );
};

export default Tournaments;
