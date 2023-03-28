import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "app/store";

import {
  selectIsLoading,
  selectTournamentTitle,
  selectTournamentClass,
  selectTeamsInfo,
  selectApplicantGroupsInfo,
  fetchAsyncGetSinglesApplications,
  fetchAsyncGetTeamApplications,
} from "ducks/applications/slice";
import { TeamInfo, ApplicantGroupInfo } from "ducks/applications/type";

export const useApplicationsHook = () => {
  // 変数
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector(selectIsLoading);
  const applicantGroupsInfo: ApplicantGroupInfo[] = useSelector(
    selectApplicantGroupsInfo
  );
  const tournamentTitle: string = useSelector(selectTournamentTitle);
  const tournamentClass: number = useSelector(selectTournamentClass);
  const teamsInfo: TeamInfo[] = useSelector(selectTeamsInfo);

  // チーム名（Link）
  const onClickTeamLink = async (team: number, teamSex: number) => {
    switch (tournamentClass) {
      case 0:
        await dispatch(
          fetchAsyncGetTeamApplications({ tournamentTitle, team, teamSex })
        );
        break;
      case 1:
        await dispatch(
          fetchAsyncGetSinglesApplications({ tournamentTitle, team, teamSex })
        );
        break;
    }
  };

  return {
    dispatch,
    isLoading,
    applicantGroupsInfo,
    tournamentTitle,
    tournamentClass,
    teamsInfo,
    onClickTeamLink,
  };
};
