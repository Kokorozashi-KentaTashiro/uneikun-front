import { ReactNode } from "react";

import Home from "containers/Home";
import Tournaments from "containers/Tournaments";
import TournamentRegist from "containers/TournamentRegist";
import TournamentDetail from "containers/TournamentDetail";
import TournamentApplication from "containers/TournamentApplication";
import Applications from "containers/Applications";
import ApplicationHistory from "containers/ApplicationHistory";

// 型定義
type PageInfo = {
  CONTEXT: string;
  URL: string;
  ELEMENT: ReactNode;
  VIEW: boolean;
};

export const settings = ["Profile", "Account", "Dashboard", "Logout"];

// 各ページ情報の定義
export const HOME_INFO: PageInfo = {
  CONTEXT: "ホーム",
  URL: "/",
  ELEMENT: <Home />,
  VIEW: true,
};

export const TOURNAMNTS_INFO: PageInfo = {
  CONTEXT: "大会一覧",
  URL: "/tournaments",
  ELEMENT: <Tournaments />,
  VIEW: true,
};

export const TOURNAMNT_REGIST_INFO: PageInfo = {
  CONTEXT: "大会登録",
  URL: "/tournament-regist",
  ELEMENT: <TournamentRegist />,
  VIEW: false,
};

export const TOURNAMNT_DETAIL_INFO: PageInfo = {
  CONTEXT: "大会要項",
  URL: "/tournament-detail",
  ELEMENT: <TournamentDetail />,
  VIEW: false,
};

export const TOURNAMNT_APPLICATION_INFO: PageInfo = {
  CONTEXT: "大会応募",
  URL: "/tournament-application",
  ELEMENT: <TournamentApplication />,
  VIEW: false,
};

export const APPLICATIONS_VIEW_INFO: PageInfo = {
  CONTEXT: "参加者一覧（管理者ページ）",
  URL: "/applications",
  ELEMENT: <Applications />,
  VIEW: false,
};

export const APPLICATION_HISTORY_INFO: PageInfo = {
  CONTEXT: "申込履歴",
  URL: "/application-history",
  ELEMENT: <ApplicationHistory />,
  VIEW: false,
};

// 各ページを配列に詰めてexport
export const PAGEINFOS: PageInfo[] = [
  HOME_INFO,
  TOURNAMNTS_INFO,
  TOURNAMNT_REGIST_INFO,
  TOURNAMNT_DETAIL_INFO,
  TOURNAMNT_APPLICATION_INFO,
  APPLICATIONS_VIEW_INFO,
  APPLICATION_HISTORY_INFO,
];
