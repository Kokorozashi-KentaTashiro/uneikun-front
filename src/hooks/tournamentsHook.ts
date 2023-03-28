import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "app/store";
import {
  TOURNAMNT_REGIST_INFO,
  TOURNAMNT_DETAIL_INFO,
  TOURNAMNT_APPLICATION_INFO,
  APPLICATION_HISTORY_INFO,
} from "common/PAGES";
import {
  selectIsLoading,
  selectTournamentsInfo,
} from "ducks/tournaments/slice";
import {
  setTournamentTitle,
  setTournamentClass,
} from "ducks/tournamentApplication/slice";

import { TornamentInfo } from "ducks/tournaments/type";
import { setTournamentDetailInfo } from "ducks/tournamentDetail/slice";
import { selectPage, setPage } from "ducks/effect/slice";
import { fetchAsyncGetTournaments } from "ducks/tournaments/slice";
import { selectUserInfo } from "ducks/auth/slice";
import { UserInfo } from "ducks/auth/type";

import { todayDate } from "common/utility";

export const useTournamentsHook = () => {
  // 変数
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector(selectIsLoading);
  const tournamentsInfo: TornamentInfo[] = useSelector(selectTournamentsInfo);
  const userInfo: UserInfo = useSelector(selectUserInfo);
  const isAdmin = userInfo.isAdmin;
  const page: string = useSelector(selectPage);

  // useEffect
  useEffect(() => {
    (async () => {
      await dispatch(fetchAsyncGetTournaments());
    })();
  }, [page, dispatch]);

  // [この大会へ申し込む]
  const onClickApply = (tournamentInfo: TornamentInfo) => {
    dispatch(setTournamentTitle(tournamentInfo.tournamentTitle));
    dispatch(setTournamentClass(tournamentInfo.tournamentClass));
    navigate(TOURNAMNT_APPLICATION_INFO.URL);
    dispatch(setPage(TOURNAMNT_APPLICATION_INFO.URL));
  };

  // [要項をみる]
  const onClickDetail = (tournamentInfo: TornamentInfo) => {
    dispatch(setTournamentDetailInfo(tournamentInfo));
    navigate(TOURNAMNT_DETAIL_INFO.URL);
    dispatch(setPage(TOURNAMNT_DETAIL_INFO.URL));
  };

  // [新規登録]
  const onClickRegist = () => {
    navigate(TOURNAMNT_REGIST_INFO.URL);
    dispatch(setPage(TOURNAMNT_REGIST_INFO.URL));
  };

  // [申込履歴]
  const onClickHistory = () => {
    navigate(APPLICATION_HISTORY_INFO.URL);
    dispatch(setPage(APPLICATION_HISTORY_INFO.URL));
  };

  // この大会へ申し込むの活性判定
  const applicantJudge = (tournamentInfo: TornamentInfo) => {
    return todayDate > new Date(tournamentInfo.applicationEndDate)
      ? true
      : todayDate < new Date(tournamentInfo.applicationStartDate)
      ? true
      : false;
  };

  return {
    navigate,
    dispatch,
    isLoading,
    tournamentsInfo,
    isAdmin,
    page,
    onClickApply,
    onClickDetail,
    onClickRegist,
    onClickHistory,
    applicantJudge,
  };
};
