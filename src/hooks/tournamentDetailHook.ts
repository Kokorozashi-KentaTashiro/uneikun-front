import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AppDispatch } from "app/store";
import {
  TOURNAMNT_APPLICATION_INFO,
  APPLICATIONS_VIEW_INFO,
} from "common/PAGES";
import { selectTournamentDetailInfo } from "ducks/tournamentDetail/slice";
import { TornamentDetailInfo } from "ducks/tournamentDetail/type";
import {
  setTournamentTitle,
  setTournamentClass,
} from "ducks/tournamentApplication/slice";
import {
  setApplicationsTournamentTitle,
  setApplicationsTournamentClass,
} from "ducks/applications/slice";

import { setPage } from "ducks/effect/slice";
import { initTournamentsState } from "ducks/tournaments/slice";
import { initTournamentDetailState } from "ducks/tournamentDetail/slice";
import { initTournamentRegistState } from "ducks/tournamentRegist/slice";
import { initTournamentApplicationState } from "ducks/tournamentApplication/slice";
import { initApplicationsState } from "ducks/applications/slice";
import { initApplicationHistoryState } from "ducks/applicationHistory/slice";
import { TOURNAMNTS_INFO } from "common/PAGES";

import { selectUserInfo } from "ducks/auth/slice";
import { UserInfo } from "ducks/auth/type";

import { todayDate } from "common/utility";

export const useTournamentDetailHook = () => {
  // 変数
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const tournamentDetailInfo: TornamentDetailInfo = useSelector(
    selectTournamentDetailInfo
  );
  const userInfo: UserInfo = useSelector(selectUserInfo);
  const isAdmin = userInfo.isAdmin;

  // useEffect
  useEffect(() => {
    if (tournamentDetailInfo.tournamentTitle === "") {
      dispatch(initTournamentsState());
      dispatch(initTournamentDetailState());
      dispatch(initTournamentRegistState());
      dispatch(initTournamentApplicationState());
      dispatch(initApplicationsState());
      dispatch(initApplicationHistoryState());
      dispatch(setPage(TOURNAMNTS_INFO.URL));
      navigate(TOURNAMNTS_INFO.URL);
    }
  });

  // 関数
  // [申込]
  const onClickApply = () => {
    dispatch(setTournamentTitle(tournamentDetailInfo.tournamentTitle));
    dispatch(setTournamentClass(tournamentDetailInfo.tournamentClass));
    navigate(TOURNAMNT_APPLICATION_INFO.URL);
    dispatch(setPage(TOURNAMNT_APPLICATION_INFO.URL));
  };

  // [要項はこちら]
  const onClickPdfLink = () => {
    window.open(tournamentDetailInfo.detailPdfUrl);
  };

  // [参加者情報はこちら]
  const onClickApplicationsLink = () => {
    dispatch(
      setApplicationsTournamentTitle(tournamentDetailInfo.tournamentTitle)
    );
    dispatch(
      setApplicationsTournamentClass(tournamentDetailInfo.tournamentClass)
    );
    navigate(APPLICATIONS_VIEW_INFO.URL);
    dispatch(setPage(APPLICATIONS_VIEW_INFO.URL));
  };

  // 申込ボタンの表示判定
  const applicantJudge = () => {
    return todayDate > new Date(tournamentDetailInfo.applicationEndDate)
      ? false
      : todayDate < new Date(tournamentDetailInfo.applicationStartDate)
      ? false
      : true;
  };

  return {
    navigate,
    tournamentDetailInfo,
    isAdmin,
    onClickApply,
    onClickPdfLink,
    onClickApplicationsLink,
    applicantJudge,
  };
};
