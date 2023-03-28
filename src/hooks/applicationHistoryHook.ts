import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "app/store";
import {
  selectIsLoading,
  selectTournamentName,
  selectTournamentClass,
  selectHistoryGroupsInfo,
  initTournamentName,
  initTournamentClass,
  initHistoryGroupsInfo,
  selectTournamentsInfo,
  fetchAsyncGetSingles,
  fetchAsyncGetTeam,
  setTournamentName,
  setTournamentClass,
} from "ducks/applicationHistory/slice";
import { selectUserInfo } from "ducks/auth/slice";
import {
  HistoryGroupInfo,
  TournamentInfo,
} from "ducks/applicationHistory/type";
import { UserInfo } from "ducks/auth/type";

export const useApplicationHistoryHook = () => {
  // 変数
  const dispatch = useDispatch<AppDispatch>();
  const userInfo: UserInfo = useSelector(selectUserInfo);
  const isLoading: boolean = useSelector(selectIsLoading);
  const tournamentName: string = useSelector(selectTournamentName);
  const tournamentClass: number = useSelector(selectTournamentClass);
  const historyGroupsInfo: HistoryGroupInfo[] = useSelector(
    selectHistoryGroupsInfo
  );
  const tournamentsInfo: TournamentInfo[] = useSelector(selectTournamentsInfo);

  // [戻る]
  const onClickBack = () => {
    dispatch(initTournamentName());
    dispatch(initTournamentClass());
    dispatch(initHistoryGroupsInfo());
  };

  // 大会カードクリック
  const getHistory = (tournamentName: string, tournamentClass: number) => {
    if (tournamentClass === 0) {
      dispatch(
        fetchAsyncGetTeam({
          tournamentName: tournamentName,
          userId: userInfo.userId,
        })
      );
    }
    if (tournamentClass === 1) {
      dispatch(
        fetchAsyncGetSingles({
          tournamentName: tournamentName,
          userId: userInfo.userId,
        })
      );
    }
    dispatch(setTournamentName(tournamentName));
    dispatch(setTournamentClass(tournamentClass));
  };

  return {
    dispatch,
    userInfo,
    isLoading,
    tournamentName,
    tournamentClass,
    historyGroupsInfo,
    tournamentsInfo,
    onClickBack,
    getHistory,
  };
};
