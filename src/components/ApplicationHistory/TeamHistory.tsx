import React, { FC } from "react";
import { Typography } from "@mui/material";

import {
  TeamCard,
  teamCardSx,
  TeamRow,
  teamRowSx,
  DisableTextField,
  teamElementSx,
  teamZoneElementSx,
  teamRankElementSx,
  teamAddressElementSx,
  teamPhoneElementSx,
  teamEmailElementSx,
  teamManagerElementSx,
  teamSexElementSx,
} from "themes/ApplicationHistory/teamHistoryTheme";
import { teams, zones, sexies } from "common/constants";
import { useApplicationHistoryHook } from "hooks/applicationHistoryHook";

type Props = {
  arrayIndex: number;
};

const TeamHistory: FC<Props> = (props: Props) => {
  /** 変数 */
  const arrayIndex = props.arrayIndex;
  const { tournamentClass, historyGroupsInfo } = useApplicationHistoryHook();
  const teamDetailInfo = historyGroupsInfo[arrayIndex].teamDetailInfo;
  return (
    <>
      <TeamCard sx={teamCardSx}>
        <Typography variant="h4" gutterBottom>
          チーム情報
        </Typography>
        <TeamRow sx={teamRowSx}>
          <DisableTextField
            id="team"
            variant="outlined"
            label="チーム・学校名"
            value={teams[teamDetailInfo.team].label}
            disabled
            sx={teamElementSx}
          />
          <DisableTextField
            id="team-zone"
            variant="outlined"
            label="地区・支部名"
            value={zones[teamDetailInfo.teamZone].label}
            disabled
            sx={teamZoneElementSx}
          />
          {tournamentClass === 0 && (
            <DisableTextField
              id="team-rank"
              variant="outlined"
              label="支部大会順位"
              value={teamDetailInfo.teamRank}
              disabled
              sx={teamRankElementSx}
            />
          )}
        </TeamRow>
        <TeamRow sx={teamRowSx}>
          <DisableTextField
            id="team-address"
            variant="outlined"
            label="住所"
            value={teamDetailInfo.teamAddress}
            disabled
            sx={teamAddressElementSx}
          />
        </TeamRow>
        <TeamRow sx={teamRowSx}>
          <DisableTextField
            id="team-phone"
            variant="outlined"
            label="電話"
            value={teamDetailInfo.teamPhone}
            disabled
            sx={teamPhoneElementSx}
          />
          <DisableTextField
            id="team-fax"
            variant="outlined"
            label="FAX"
            value={teamDetailInfo.teamFax}
            disabled
            sx={teamEmailElementSx}
          />
        </TeamRow>
        <TeamRow sx={teamRowSx}>
          <DisableTextField
            id="team"
            variant="outlined"
            label="所属長名"
            value={teamDetailInfo.teamManager}
            disabled
            sx={teamManagerElementSx}
          />
        </TeamRow>
        <TeamRow sx={teamRowSx}>
          <DisableTextField
            id="team-sex"
            variant="outlined"
            label="性別"
            value={sexies[teamDetailInfo.teamSex].label}
            disabled
            sx={teamSexElementSx}
          />
        </TeamRow>
      </TeamCard>
    </>
  );
};

export default TeamHistory;
