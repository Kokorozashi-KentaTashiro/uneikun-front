import React, { FC, ChangeEvent } from "react";

import {
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

import {
  TeamInfoCard,
  teamInfoCardSx,
  TeamInfoCardMedia,
  teamInfoCardMediaSx,
  TeamInfoCardContent,
  teamInfoCardContentSx,
  TeamInfoRow,
  teamInfoRowSx,
  teamElementSx,
  teamZoneElementSx,
  teamRankElementSx,
  teamAddressElementSx,
  teamPhoneElementSx,
  teamEmailElementSx,
  teamManagerElementSx,
  teamSexElementSx,
} from "themes/TournamentApplication/teamInfoTheme";

import {
  setTeam,
  setTeamZone,
  setTeamRank,
  setTeamSex,
  setTeamAddress,
  setTeamPhone,
  setTeamFax,
  setTeamManager,
} from "ducks/tournamentApplication/slice";
import { useTournamentApplicationHook } from "hooks/tournamentApplicationHook";
import { teams, zones, sexies } from "common/constants";

const TeamInfo: FC = () => {
  // ReactHook
  const { teamInfo, dispatch } = useTournamentApplicationHook();
  return (
    <>
      <TeamInfoCard sx={teamInfoCardSx}>
        <TeamInfoCardMedia sx={teamInfoCardMediaSx}>
          チーム情報
        </TeamInfoCardMedia>
        <TeamInfoCardContent sx={teamInfoCardContentSx}>
          <TeamInfoRow sx={teamInfoRowSx}>
            <FormControl variant="outlined" sx={teamElementSx}>
              <InputLabel id="team">チーム・学校名</InputLabel>
              <Select
                labelId="team"
                id="チーム・学校名"
                value={teamInfo.team}
                onChange={(e) => {
                  dispatch(setTeam(e.target.value));
                }}
              >
                {teams.map((team, key) => (
                  <MenuItem key={key} value={team.index}>
                    {team.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl variant="outlined" sx={teamZoneElementSx}>
              <InputLabel id="teamZone">地区・支部名</InputLabel>
              <Select
                labelId="teamZone"
                id="地区・支部名"
                value={teamInfo.teamZone}
                onChange={(e) => {
                  dispatch(setTeamZone(e.target.value));
                }}
              >
                {zones.map((zone, key) => (
                  <MenuItem key={key} value={zone.index}>
                    {zone.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl variant="outlined" sx={teamRankElementSx}>
              <TextField
                id="team-rank"
                variant="outlined"
                label="支部大会順位"
                value={teamInfo.teamRank}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  dispatch(setTeamRank(e.target.value));
                }}
              />
            </FormControl>
          </TeamInfoRow>
          <TeamInfoRow sx={teamInfoRowSx}>
            <FormControl variant="outlined" sx={teamAddressElementSx}>
              <TextField
                id="team-address"
                variant="outlined"
                label="住所"
                value={teamInfo.teamAddress}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  dispatch(setTeamAddress(e.target.value));
                }}
              />
            </FormControl>
          </TeamInfoRow>
          <TeamInfoRow sx={teamInfoRowSx}>
            <FormControl variant="outlined" sx={teamPhoneElementSx}>
              <TextField
                id="team-phone"
                variant="outlined"
                label="電話"
                value={teamInfo.teamPhone}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  dispatch(setTeamPhone(e.target.value));
                }}
              />
            </FormControl>
            <FormControl variant="outlined" sx={teamEmailElementSx}>
              <TextField
                id="team-fax"
                variant="outlined"
                label="FAX"
                value={teamInfo.teamFax}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  dispatch(setTeamFax(e.target.value));
                }}
              />
            </FormControl>
          </TeamInfoRow>
          <TeamInfoRow sx={teamInfoRowSx}>
            <FormControl variant="outlined" sx={teamManagerElementSx}>
              <TextField
                id="team-manager"
                variant="outlined"
                label="所属長名"
                value={teamInfo.teamManager}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  dispatch(setTeamManager(e.target.value));
                }}
              />
            </FormControl>
          </TeamInfoRow>
          <TeamInfoRow sx={teamInfoRowSx}>
            <FormControl variant="outlined" sx={teamSexElementSx}>
              <InputLabel id="select">性別</InputLabel>
              <Select
                labelId="select"
                id="select"
                value={teamInfo.teamSex}
                onChange={(e) => {
                  dispatch(setTeamSex(e.target.value));
                }}
              >
                {sexies.map((sex, key) => (
                  <MenuItem key={key} value={sex.index}>
                    {sex.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </TeamInfoRow>
        </TeamInfoCardContent>
      </TeamInfoCard>
    </>
  );
};

export default TeamInfo;
