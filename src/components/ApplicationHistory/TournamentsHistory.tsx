import { FC } from "react";
import { TournamentInfo } from "ducks/applicationHistory/type";
import {
  TournamentCard,
  tournamentCardSx,
  TournamentTypography,
  tournamentTypographySx,
} from "themes/ApplicationHistory/tournamentsHistoryTheme";
import { useApplicationHistoryHook } from "hooks/applicationHistoryHook";

const TournamentsHistory: FC = () => {
  // ReactHook
  const { tournamentsInfo, getHistory } = useApplicationHistoryHook();

  return (
    <>
      {tournamentsInfo.map((tournamentInfo: TournamentInfo) => {
        return (
          <TournamentCard
            sx={tournamentCardSx}
            onClick={() =>
              getHistory(
                tournamentInfo.tournamentName,
                tournamentInfo.tournamentClass
              )
            }
          >
            <TournamentTypography sx={tournamentTypographySx}>
              {tournamentInfo.tournamentName}
            </TournamentTypography>
          </TournamentCard>
        );
      })}
    </>
  );
};

export default TournamentsHistory;
