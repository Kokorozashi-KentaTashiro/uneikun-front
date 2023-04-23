import { FC } from "react";
import { Card } from "@mui/material";
import {
  ViewArea,
  ElementInfoCardMedia,
  ElementInfoCardContent,
  viewElementDateCardSx,
  viewElementDateCardMediaSx,
  viewElementDateCardContentSx,
  viewElementPlaceCardSx,
  viewElementPlaceCardContentSx,
  viewElementPlaceCardMediaSx,
  viewAreaSx,
} from "themes/Tournaments/tournamentCardViewAreaTheme";

type Props = {
  eventDate: string;
  place: string;
  applicationEndDate: string;
};

const TournamentCardViewArea: FC<Props> = (props: Props) => {
  // const
  const { eventDate, place, applicationEndDate } = { ...props };

  return (
    <ViewArea sx={viewAreaSx}>
      <Card sx={viewElementDateCardSx}>
        <ElementInfoCardMedia sx={viewElementDateCardMediaSx}>
          開催日
        </ElementInfoCardMedia>
        <ElementInfoCardContent sx={viewElementDateCardContentSx}>
          {eventDate}
        </ElementInfoCardContent>
      </Card>
      <Card sx={viewElementPlaceCardSx}>
        <ElementInfoCardMedia sx={viewElementPlaceCardMediaSx}>
          会場
        </ElementInfoCardMedia>
        <ElementInfoCardContent sx={viewElementPlaceCardContentSx}>
          {place}
        </ElementInfoCardContent>
      </Card>
      <Card sx={viewElementDateCardSx}>
        <ElementInfoCardMedia sx={viewElementDateCardMediaSx}>
          申込期限
        </ElementInfoCardMedia>
        <ElementInfoCardContent sx={viewElementDateCardContentSx}>
          {applicationEndDate}
        </ElementInfoCardContent>
      </Card>
    </ViewArea>
  );
};

export default TournamentCardViewArea;
