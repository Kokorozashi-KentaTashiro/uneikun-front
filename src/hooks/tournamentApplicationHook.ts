import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dayjs } from "dayjs";

import { AppDispatch } from "app/store";

import { selectUserInfo } from "ducks/auth/slice";
import { UserInfo } from "ducks/auth/type";
import {
  selectIsLoading,
  selectTournamentTitle,
  selectTournamentClass,
  selectTeamInfo,
  selectDirecterInfo,
  selectSinglesApplicationsInfo,
  selectTeamApplicationsInfo,
  addSinglesApplicationInfo,
  addTeamApplicationInfo,
  fetchAsyncPutSinglesApplications,
  fetchAsyncPutTeamApplications,
  setSinglesBirthDay,
  setTeamBirthDay,
} from "ducks/tournamentApplication/slice";
import {
  TeamInfo,
  DirecterInfo,
  SinglesApplicationInfo,
  TeamApplicationInfo,
} from "ducks/tournamentApplication/type";
import { selectTournamentDetailInfo } from "ducks/tournamentDetail/slice";
import { TornamentDetailInfo } from "ducks/tournamentDetail/type";
import { TOURNAMNTS_INFO } from "common/PAGES";
import { setPage } from "ducks/effect/slice";

import { initTournamentsState } from "ducks/tournaments/slice";
import { initTournamentDetailState } from "ducks/tournamentDetail/slice";
import { initTournamentRegistState } from "ducks/tournamentRegist/slice";
import { initTournamentApplicationState } from "ducks/tournamentApplication/slice";
import { initApplicationsState } from "ducks/applications/slice";
import { initApplicationHistoryState } from "ducks/applicationHistory/slice";
import { teams, TEAM } from "common/constants";

export const useTournamentApplicationHook = () => {
  /** 変数 */
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [stage, setStage] = useState<number>(0);
  const [confirmDisabled, setConfirmDisabled] = useState<boolean>(true);
  const [captainDisabled, setCaptainDisabled] = useState<boolean>(false);
  const [teamSelectChoice, setTeamSelectChoice] = useState<TEAM[]>([]);
  const tornamentDetailInfo: TornamentDetailInfo = useSelector(
    selectTournamentDetailInfo
  );
  const isLoading = useSelector(selectIsLoading);
  const tournamentTitle: string = useSelector(selectTournamentTitle);
  const tournamentClass: number = useSelector(selectTournamentClass);
  const teamInfo: TeamInfo = useSelector(selectTeamInfo);
  const directerInfo: DirecterInfo = useSelector(selectDirecterInfo);
  const singlesApplicationsInfo: SinglesApplicationInfo[] = useSelector(
    selectSinglesApplicationsInfo
  );
  const teamApplicationsInfo: TeamApplicationInfo[] = useSelector(
    selectTeamApplicationsInfo
  );

  const userInfo: UserInfo = useSelector(selectUserInfo);

  // 関数

  // [次へ]
  const onClickNext = () => {
    switch (stage) {
      case 0:
        setStage(1);
        break;
      case 1:
        setStage(2);
        break;
      case 2:
        setStage(3);
        break;
      default:
        break;
    }
  };

  // [戻る]
  const onClickBack = () => {
    switch (stage) {
      case 1:
        setStage(0);
        break;
      case 2:
        setStage(1);
        break;
      default:
        break;
    }
  };

  // [確定]
  const onClickApply = async () => {
    if (tournamentClass === 0) {
      let args = {
        tournamentTitle: tournamentTitle,
        tournamentClass: tournamentClass,
        teamInfo: teamInfo,
        directerInfo: directerInfo,
        teamApplicationsInfo: teamApplicationsInfo,
        userId: userInfo.userId,
      };
      await dispatch(fetchAsyncPutTeamApplications(args));
    }
    if (tournamentClass === 1) {
      let args = {
        tournamentTitle: tournamentTitle,
        tournamentClass: tournamentClass,
        teamInfo: teamInfo,
        directerInfo: directerInfo,
        singlesApplicationsInfo: singlesApplicationsInfo,
        userId: userInfo.userId,
      };
      await dispatch(fetchAsyncPutSinglesApplications(args));
    }

    dispatch(initTournamentsState());
    dispatch(initTournamentDetailState());
    dispatch(initTournamentRegistState());
    dispatch(initTournamentApplicationState());
    dispatch(initApplicationsState());
    dispatch(initApplicationHistoryState());
    dispatch(setPage(TOURNAMNTS_INFO.URL));
    navigate(TOURNAMNTS_INFO.URL);
  };

  // [＋]（シングルス）
  const onClickSinglesIncrement = () => {
    dispatch(addSinglesApplicationInfo());
  };

  // [＋]（団体戦）
  const onClickTeamIncrement = () => {
    dispatch(addTeamApplicationInfo());
  };

  // 誕生日入力時の処理（シングルス）
  const changeSinglesBirthDay = (index: number, newValue: Dayjs | null) => {
    if (newValue) {
      const newValueStr = newValue.format("YYYY-MM-DD");
      if (newValueStr === "Invalid Date") {
        dispatch(setSinglesBirthDay({ index: index, value: "" }));
      } else {
        dispatch(setSinglesBirthDay({ index: index, value: newValueStr }));
      }
    } else {
      dispatch(setSinglesBirthDay({ index: index, value: "" }));
    }
  };

  // 誕生日入力時の処理（団体戦）
  const changeTeamBirthDay = (index: number, newValue: Dayjs | null) => {
    if (newValue) {
      const newValueStr = newValue.format("YYYY-MM-DD");
      if (newValueStr === "Invalid Date") {
        dispatch(setTeamBirthDay({ index: index, value: "" }));
      } else {
        dispatch(setTeamBirthDay({ index: index, value: newValueStr }));
      }
    } else {
      dispatch(setTeamBirthDay({ index: index, value: "" }));
    }
  };

  // 「チーム・学校名」のチェック
  const createTeamSelectChoice = useCallback(() => {
    return teams.filter((team: TEAM) => {
      return team.teamIndex === teamInfo.teamZone;
    });
  }, [teamInfo.teamZone]);

  // 「チーム情報」の入力チェック
  const teamInputCheck = useCallback(() => {
    const {
      team,
      teamZone,
      teamRank,
      teamSex,
      teamAddress,
      teamPhone,
      teamFax,
      teamManager,
    } = { ...teamInfo };

    setTeamSelectChoice(createTeamSelectChoice());

    if (
      team !== null &&
      teamZone !== null &&
      teamRank !== null &&
      teamSex !== null &&
      teamAddress &&
      teamPhone &&
      teamFax &&
      teamManager
    ) {
      return false;
    } else {
      return true;
    }
  }, [teamInfo, createTeamSelectChoice]);

  // 監督情報の入力チェック
  const directerInputCheck = useCallback(() => {
    const { directerName, directerPhone, directerEmail } = { ...directerInfo };
    if (directerName && directerPhone && directerEmail) {
      return false;
    } else {
      return true;
    }
  }, [directerInfo]);

  // 団体戦参加者情報の入力チェック
  const teamApplicantInputCheck = useCallback(() => {
    let captainCnt = 0;
    let temporaryTeamDisable = false;

    teamApplicationsInfo.forEach((teamApplicationInfo: TeamApplicationInfo) => {
      const { lastName, firstName, schoolYear, birthDay, captain } = {
        ...teamApplicationInfo,
      };

      // 必須チェック
      if (lastName && firstName && schoolYear !== null && birthDay) {
        if (temporaryTeamDisable) {
          temporaryTeamDisable = true;
        } else {
          temporaryTeamDisable = false;
        }
      } else {
        temporaryTeamDisable = true;
      }

      // 必須チェック（主将）
      if (captain) {
        captainCnt = captainCnt + 1;
      }
    });

    if (captainCnt !== 1) {
      temporaryTeamDisable = true;
    }

    return temporaryTeamDisable;
  }, [teamApplicationsInfo]);

  // シングルス参加者情報の入力チェック
  const singlesApplicantInputCheck = useCallback(() => {
    let temporarySinglesDisable = false;
    singlesApplicationsInfo.forEach(
      (singlesApplicationInfo: SinglesApplicationInfo) => {
        const { lastName, firstName, schoolYear, birthDay, rank } = {
          ...singlesApplicationInfo,
        };
        if (
          lastName &&
          firstName &&
          schoolYear !== null &&
          rank !== null &&
          birthDay
        ) {
          if (temporarySinglesDisable) {
            temporarySinglesDisable = true;
          } else {
            temporarySinglesDisable = false;
          }
        } else {
          temporarySinglesDisable = true;
        }
      }
    );
    return temporarySinglesDisable;
  }, [singlesApplicationsInfo]);

  // useEffect
  useEffect(() => {
    if (tournamentTitle === "") {
      dispatch(initTournamentsState());
      dispatch(initTournamentDetailState());
      dispatch(initTournamentRegistState());
      dispatch(initTournamentApplicationState());
      dispatch(initApplicationsState());
      dispatch(setPage(TOURNAMNTS_INFO.URL));
      navigate(TOURNAMNTS_INFO.URL);
    }
  });

  useEffect(() => {
    // チーム情報の入力チェック
    const teamInputResult = teamInputCheck();

    // 監督情報の入力チェック
    const directerInputResult = directerInputCheck();

    // 参加者情報の入力チェック
    switch (tournamentClass) {
      case 0:
        const temporaryTeamDisable = teamApplicantInputCheck();
        if (teamInputResult || directerInputResult || temporaryTeamDisable) {
          setConfirmDisabled(true);
        } else {
          setConfirmDisabled(false);
        }
        break;
      case 1:
        const temporarySinglesDisable = singlesApplicantInputCheck();
        if (teamInputResult || directerInputResult || temporarySinglesDisable) {
          setConfirmDisabled(true);
        } else {
          setConfirmDisabled(false);
        }
        break;
      default:
        break;
    }
  }, [
    tournamentClass,
    teamInfo,
    directerInfo,
    singlesApplicationsInfo,
    teamApplicationsInfo,
    teamInputCheck,
    directerInputCheck,
    teamApplicantInputCheck,
    singlesApplicantInputCheck,
  ]);

  // 主将の非活性判定
  useEffect(() => {
    let captainCnt = 0;

    teamApplicationsInfo.forEach((teamApplicationInfo: TeamApplicationInfo) => {
      const { captain } = { ...teamApplicationInfo };

      if (captain) {
        captainCnt = captainCnt + 1;
      }
    });

    if (captainCnt !== 0) {
      setCaptainDisabled(true);
    } else {
      setCaptainDisabled(false);
    }
  }, [teamApplicationsInfo]);

  return {
    dispatch,
    navigate,
    isLoading,
    stage,
    confirmDisabled,
    captainDisabled,
    tournamentTitle,
    tournamentClass,
    teamInfo,
    directerInfo,
    tornamentDetailInfo,
    singlesApplicationsInfo,
    onClickSinglesIncrement,
    teamApplicationsInfo,
    onClickTeamIncrement,
    changeSinglesBirthDay,
    changeTeamBirthDay,
    onClickApply,
    onClickNext,
    onClickBack,
    teamSelectChoice,
  };
};
