import { FC, useEffect } from "react";

import { fetchAsyncGetTeams } from "ducks/applications/slice";
import { teams, sexies } from "common/constants";
import { CommonLink, CommonLoading } from "common/commonMaterial";

import { useApplicationsHook } from "hooks/applicationsHook";

const TeamsList: FC = () => {
  // ReactHook
  const { dispatch, isLoading, tournamentTitle, teamsInfo, onClickTeamLink } =
    useApplicationsHook();

  // useEffect
  useEffect(() => {
    (async () => {
      await dispatch(fetchAsyncGetTeams(tournamentTitle));
      console.log("TeamsList：rendering");
    })();
  }, [dispatch, tournamentTitle]);

  return (
    <>
      {isLoading ? (
        <CommonLoading size={100} />
      ) : (
        <>
          {teamsInfo.map((teamInfo, index) => {
            return (
              <>
                <CommonLink
                  onClick={() => {
                    onClickTeamLink(teamInfo.team, teamInfo.teamSex);
                  }}
                >
                  {`${teams[teamInfo.team].label}（${
                    sexies[teamInfo.teamSex].label
                  }）`}
                </CommonLink>
              </>
            );
          })}{" "}
        </>
      )}
    </>
  );
};

export default TeamsList;
