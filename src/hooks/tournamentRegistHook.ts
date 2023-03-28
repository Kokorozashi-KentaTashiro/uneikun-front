import { ChangeEvent, useState, useEffect } from "react";
import { SelectChangeEvent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dayjs } from "dayjs";

import { TornamentRegistInfo } from "ducks/tournamentRegist/type";
import {
  selectIsLoading,
  selectTournamentRegistInfo,
  setTournamentTitle,
  setTournamentClass,
  setEventDate,
  setPlace,
  setApplicationStartDate,
  setApplicationEndDate,
  setDetailPdfUrl,
  fetchAsyncPutTournament,
} from "ducks/tournamentRegist/slice";
import { AppDispatch } from "app/store";
import { TOURNAMNTS_INFO } from "common/PAGES";

import { setPage } from "ducks/effect/slice";
import { initTournamentsState } from "ducks/tournaments/slice";
import { initTournamentDetailState } from "ducks/tournamentDetail/slice";
import { initTournamentRegistState } from "ducks/tournamentRegist/slice";
import { initTournamentApplicationState } from "ducks/tournamentApplication/slice";
import { initApplicationsState } from "ducks/applications/slice";
import { initApplicationHistoryState } from "ducks/applicationHistory/slice";

export const useTournamentRegistHook = () => {
  // 変数
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const isLoading: boolean = useSelector(selectIsLoading);
  const tournamentRegistInfo: TornamentRegistInfo = useSelector(
    selectTournamentRegistInfo
  );
  const [buttonDisable, setButtonDisable] = useState<boolean>(true);

  // useEffect
  useEffect(() => {
    const {
      tournamentTitle,
      tournamentClass,
      eventDate,
      place,
      applicationStartDate,
      applicationEndDate,
      detailPdfUrl,
    } = { ...tournamentRegistInfo };
    if (
      tournamentTitle &&
      tournamentClass !== null &&
      eventDate &&
      place &&
      applicationStartDate &&
      applicationEndDate &&
      detailPdfUrl
    ) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [tournamentRegistInfo]);

  // 関数
  // 「大会名」入力時の処理
  const changeTitleVal = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTournamentTitle(e.target.value));
  };

  // 「大会区分」入力時の処理
  const changeClassVal = (e: SelectChangeEvent<number>) => {
    dispatch(setTournamentClass(e.target.value));
  };

  // 「開催日」入力時の処理
  const changeEventDate = (newValue: Dayjs | null) => {
    if (newValue) {
      const newValueStr = newValue.format("YYYY-MM-DD");
      if (newValueStr === "Invalid Date") {
        dispatch(setEventDate(""));
      } else {
        dispatch(setEventDate(newValueStr));
      }
    } else {
      dispatch(setEventDate(""));
    }
  };

  // 「開催場所」入力時の処理
  const changePlaceVal = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPlace(e.target.value));
  };

  // 「申込開始日」入力時の処理
  const changeApplicationStartDate = (newValue: Dayjs | null) => {
    if (newValue) {
      const newValueStr = newValue.format("YYYY-MM-DD");
      if (newValueStr === "Invalid Date") {
        dispatch(setApplicationStartDate(""));
      } else {
        dispatch(setApplicationStartDate(newValueStr));
      }
    } else {
      dispatch(setApplicationStartDate(""));
    }
  };

  // 「申込終了日」入力時の処理
  const changeApplicationEndDate = (newValue: Dayjs | null) => {
    if (newValue) {
      const newValueStr = newValue.format("YYYY-MM-DD");
      if (newValueStr === "Invalid Date") {
        dispatch(setApplicationEndDate(""));
      } else {
        dispatch(setApplicationEndDate(newValueStr));
      }
    } else {
      dispatch(setApplicationEndDate(""));
    }
  };

  // 「要項（URL）」入力時の処理
  const changeDetailPdfUrl = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setDetailPdfUrl(e.target.value));
  };

  // [確定]
  const onClickConfirm = async () => {
    await dispatch(fetchAsyncPutTournament(tournamentRegistInfo));
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
    dispatch,
    isLoading,
    tournamentRegistInfo,
    buttonDisable,
    changeEventDate,
    changeApplicationStartDate,
    changeApplicationEndDate,
    changeTitleVal,
    changeClassVal,
    changePlaceVal,
    changeDetailPdfUrl,
    onClickConfirm,
  };
};
