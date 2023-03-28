export type TournamentRegistState = {
  isLoading: boolean;
  tournamentRegistInfo: TornamentRegistInfo;
};

/** 大会登録情報 */
export type TornamentRegistInfo = {
  tournamentTitle: string;
  tournamentClass: number;
  eventDate: string;
  place: string;
  applicationStartDate: string;
  applicationEndDate: string;
  detailPdfUrl: string;
};
