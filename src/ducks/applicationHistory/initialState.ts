import { ApplicationsState } from "./type";

export const initialState: ApplicationsState = {
  isLoading: false,
  selectTournamentName: "",
  selectTournamentClass: 0,
  tournamentsInfo: [],
  historyGroupsInfo: [],
};
