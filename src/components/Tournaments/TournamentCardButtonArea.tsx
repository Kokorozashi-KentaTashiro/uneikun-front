import { FC } from "react";
import { useTournamentsHook } from "hooks/tournamentsHook";
import {
  ButtonArea,
  buttonAreaSx,
  DetailViewButton,
  detailViewButtonSx,
  ApplicantButton,
  applicantButtonSx,
  ApplicantNormalFont,
  applicantNormalFontSx,
  ApplicantSpecialFont,
  applicantSpecialFontSx,
} from "themes/Tournaments/tournamentCardButtonAreaTheme";
import { TornamentInfo } from "ducks/tournaments/type";

type Props = {
  tournamentInfo: TornamentInfo;
};

const TournamentCardButtonArea: FC<Props> = (props: Props) => {
  // const
  const { tournamentInfo } = { ...props };

  // ReactHook
  const { onClickApply, onClickDetail, applicantJudge } = useTournamentsHook();

  return (
    <ButtonArea sx={buttonAreaSx}>
      <DetailViewButton
        variant="contained"
        onClick={() => onClickDetail(tournamentInfo)}
        sx={detailViewButtonSx}
      >
        要項をみる
      </DetailViewButton>
      <ApplicantButton
        variant="contained"
        disabled={applicantJudge(tournamentInfo)}
        onClick={() => onClickApply(tournamentInfo)}
        sx={applicantButtonSx}
      >
        <ApplicantNormalFont sx={applicantNormalFontSx}>
          この大会へ
        </ApplicantNormalFont>
        <ApplicantSpecialFont sx={applicantSpecialFontSx}>
          申し込む
        </ApplicantSpecialFont>
      </ApplicantButton>
    </ButtonArea>
  );
};

export default TournamentCardButtonArea;
