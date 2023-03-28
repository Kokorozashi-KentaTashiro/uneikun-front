import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "app/store";
import { TOURNAMNTS_INFO } from "common/PAGES";
import { setPage } from "ducks/effect/slice";
import { initTournamentsState } from "ducks/tournaments/slice";
import { initTournamentDetailState } from "ducks/tournamentDetail/slice";
import { initTournamentRegistState } from "ducks/tournamentRegist/slice";
import { initTournamentApplicationState } from "ducks/tournamentApplication/slice";
import { initApplicationsState } from "ducks/applications/slice";
import { initApplicationHistoryState } from "ducks/applicationHistory/slice";

export const useHomeHook = () => {
  // 変数
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  // 関数
  const buttonClick = () => {
    dispatch(initTournamentsState());
    dispatch(initTournamentDetailState());
    dispatch(initTournamentRegistState());
    dispatch(initTournamentApplicationState());
    dispatch(initApplicationsState());
    dispatch(initApplicationHistoryState());
    dispatch(setPage(TOURNAMNTS_INFO.URL));
    navigate(TOURNAMNTS_INFO.URL);
  };

  return {
    buttonClick,
  };
};
