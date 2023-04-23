import { FC } from "react";
import {
  TournamentsCard,
  tournamentsCardSx,
  TournamentsCardMedia,
  tournamentsCardMediaSx,
  TournamentsCardContent,
  tournamentsCardContentSx,
} from "themes/Tournaments/tournamentCardTheme";
import { TornamentInfo } from "ducks/tournaments/type";
import TournamentCardViewArea from "components/Tournaments/TournamentCardViewArea";
import TournamentCardButtonArea from "components/Tournaments/TournamentCardButtonArea";

type Props = {
  tournamentInfo: TornamentInfo;
};

const TournamentCard: FC<Props> = (props: Props) => {
  // const
  const { tournamentInfo } = { ...props };

  return (
    <TournamentsCard variant="outlined" sx={tournamentsCardSx}>
      <TournamentsCardMedia sx={tournamentsCardMediaSx}>
        {tournamentInfo.tournamentTitle}
      </TournamentsCardMedia>
      <TournamentsCardContent sx={tournamentsCardContentSx}>
        <TournamentCardViewArea
          eventDate={tournamentInfo.eventDate}
          place={tournamentInfo.place}
          applicationEndDate={tournamentInfo.applicationEndDate}
        />
        <TournamentCardButtonArea tournamentInfo={tournamentInfo} />
      </TournamentsCardContent>
    </TournamentsCard>
  );
};

export default TournamentCard;
