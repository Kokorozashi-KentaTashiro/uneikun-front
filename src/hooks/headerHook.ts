import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "app/store";
import { HOME_INFO, APPLICATION_HISTORY_INFO } from "common/PAGES";
import { Auth } from "aws-amplify";
import { setPage } from "ducks/effect/slice";
import { initTournamentsState } from "ducks/tournaments/slice";
import { initTournamentDetailState } from "ducks/tournamentDetail/slice";
import { initTournamentRegistState } from "ducks/tournamentRegist/slice";
import { initTournamentApplicationState } from "ducks/tournamentApplication/slice";
import { initApplicationsState } from "ducks/applications/slice";
import { initApplicationHistoryState } from "ducks/applicationHistory/slice";
import { selectUserInfo } from "ducks/auth/slice";

type Func = { (): void };

export const useHeaderHook = () => {
  // 変数
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const userInfo = useSelector(selectUserInfo);
  const settings: { label: string; func: Func }[] = [
    {
      label: "ログアウト",
      func: () => {
        dispatch(setPage(HOME_INFO.URL));
        navigate(HOME_INFO.URL);
        Auth.signOut();
      },
    },
    // {
    //   label: "プロフィール",
    //   func: () => {
    //     alert("実装中・・・");
    //   },
    // },
    {
      label: "申込履歴",
      func: () => {
        navigate(APPLICATION_HISTORY_INFO.URL);
        dispatch(setPage(APPLICATION_HISTORY_INFO.URL));
      },
    },
  ];

  // useState
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  // 関数

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClickUserMenu = () => {
    Auth.signOut();
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const menuOnClick = async (url: string) => {
    dispatch(initTournamentsState());
    dispatch(initTournamentDetailState());
    dispatch(initTournamentRegistState());
    dispatch(initTournamentApplicationState());
    dispatch(initApplicationsState());
    dispatch(initApplicationHistoryState());
    dispatch(setPage(url));
    navigate(url);
  };

  return {
    userInfo,
    settings,
    anchorElNav,
    anchorElUser,
    handleOpenNavMenu,
    handleOpenUserMenu,
    handleCloseNavMenu,
    handleClickUserMenu,
    handleCloseUserMenu,
    menuOnClick,
  };
};
