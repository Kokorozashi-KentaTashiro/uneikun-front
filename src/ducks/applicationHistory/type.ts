export type ApplicationsState = {
  isLoading: boolean;
  selectTournamentName: string;
  selectTournamentClass: number;
  tournamentsInfo: TournamentInfo[];
  historyGroupsInfo: HistoryGroupInfo[];
};

/** 応募大会一覧情報 */
export type TournamentInfo = {
  tournamentName: string;
  tournamentClass: number;
};

/** 参加者情報グループ */
export type HistoryGroupInfo = {
  teamDetailInfo: TeamDetailInfo;
  directerInfo: DirecterInfo;
  singlesApplicationsInfo: SinglesApplicationInfo[];
  teamApplicationsInfo: TeamApplicationInfo[];
};

/** チーム情報 */
export type TeamDetailInfo = {
  team: number;
  teamZone: number;
  teamRank: number;
  teamSex: number;
  teamAddress: string;
  teamPhone: string;
  teamFax: string;
  teamManager: string;
};

/** 監督情報 */
export type DirecterInfo = {
  directerName: string;
  directerPhone: string;
  directerEmail: string;
  advisorName: string;
};

/** シングルス応募情報 */
export type SinglesApplicationInfo = {
  lastName: string;
  firstName: string;
  schoolYear: number;
  birthDay: string;
  rank: number;
};

/** 団体戦応募情報 */
export type TeamApplicationInfo = {
  lastName: string;
  firstName: string;
  schoolYear: number;
  birthDay: string;
  captain: boolean;
  order: number;
};
