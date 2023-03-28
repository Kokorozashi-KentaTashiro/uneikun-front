import { FC, ChangeEvent } from "react";
import dayjs from "dayjs";

import {
  TextField,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Checkbox,
} from "@mui/material";

import {
  teamApplicantTableSx,
  teamApplicantTableHeadeSx,
  teamApplicantTableHeadeRowSx,
  teamApplicantTableBodyRowSx,
  TeamApplicantTableBodyCell,
  TeamApplicantTableIncrementRow,
  teamApplicantTableIncrementRowSx,
  AddIcon,
  DeleteIcon,
} from "themes/TournamentApplication/teamApplicationTheme";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import { schoolYears } from "common/constants";

import {
  setTeamLastName,
  setTeamFirstName,
  setTeamSchoolYear,
  setTeamCaptain,
  deleteTeamApplicationInfo,
} from "ducks/tournamentApplication/slice";

import { useTournamentApplicationHook } from "hooks/tournamentApplicationHook";

const TeamApplication: FC = () => {
  // ReactHook
  const {
    teamApplicationsInfo,
    dispatch,
    onClickTeamIncrement,
    changeTeamBirthDay,
    captainDisabled,
  } = useTournamentApplicationHook();

  return (
    <>
      <TableContainer component={Paper} sx={teamApplicantTableSx}>
        <Table aria-label="customized table">
          <TableHead sx={teamApplicantTableHeadeSx}>
            <TableRow sx={teamApplicantTableHeadeRowSx}>
              <TableCell align="center">氏名（姓）</TableCell>
              <TableCell align="center">氏名（名）</TableCell>
              <TableCell align="center">生年月日</TableCell>
              <TableCell align="center">学年</TableCell>
              <TableCell align="center">主将</TableCell>
              <TableCell align="center">delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teamApplicationsInfo.map((teamApplicationInfo, index) => (
              <TableRow key={index} sx={teamApplicantTableBodyRowSx}>
                <TeamApplicantTableBodyCell align="center">
                  <TextField
                    id="application-lastName"
                    variant="outlined"
                    value={teamApplicationInfo.lastName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      dispatch(
                        setTeamLastName({
                          index: index,
                          value: e.target.value,
                        })
                      );
                    }}
                  />
                </TeamApplicantTableBodyCell>
                <TeamApplicantTableBodyCell align="center">
                  <TextField
                    id="application-firstName"
                    variant="outlined"
                    value={teamApplicationInfo.firstName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      dispatch(
                        setTeamFirstName({
                          index: index,
                          value: e.target.value,
                        })
                      );
                    }}
                  />
                </TeamApplicantTableBodyCell>
                <TeamApplicantTableBodyCell align="center">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      label="生年月日"
                      inputFormat="YYYY/MM/DD"
                      value={dayjs(teamApplicationInfo.birthDay)}
                      renderInput={(params) => <TextField {...params} />}
                      leftArrowButtonText="前月"
                      rightArrowButtonText="次月"
                      onChange={(newDay) => {
                        changeTeamBirthDay(index, newDay);
                      }}
                    />
                  </LocalizationProvider>
                </TeamApplicantTableBodyCell>
                <TeamApplicantTableBodyCell align="center">
                  <FormControl variant="outlined">
                    <InputLabel id="select"></InputLabel>
                    <Select
                      labelId="select"
                      id="select"
                      value={teamApplicationInfo.schoolYear}
                      onChange={(e) => {
                        dispatch(
                          setTeamSchoolYear({
                            index: index,
                            value: e.target.value,
                          })
                        );
                      }}
                    >
                      {schoolYears.map((schoolYear, key) => (
                        <MenuItem key={key} value={schoolYear.index}>
                          {schoolYear.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </TeamApplicantTableBodyCell>
                <TeamApplicantTableBodyCell align="center">
                  <Checkbox
                    checked={teamApplicationInfo.captain}
                    onChange={(e) => {
                      dispatch(
                        setTeamCaptain({
                          index: index,
                          value: e.target.checked,
                        })
                      );
                    }}
                    disabled={!teamApplicationInfo.captain && captainDisabled}
                  ></Checkbox>
                </TeamApplicantTableBodyCell>
                <TeamApplicantTableBodyCell align="center">
                  {index >= 4 && (
                    <DeleteIcon
                      icon="mingcute:minus-circle-fill"
                      onClick={() => {
                        dispatch(deleteTeamApplicationInfo(index));
                      }}
                    />
                  )}
                </TeamApplicantTableBodyCell>
              </TableRow>
            ))}
            {teamApplicationsInfo.length <= 7 && (
              <TeamApplicantTableIncrementRow
                key="increment"
                sx={teamApplicantTableIncrementRowSx}
              >
                <AddIcon
                  icon="material-symbols:add-circle-rounded"
                  onClick={onClickTeamIncrement}
                />
              </TeamApplicantTableIncrementRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TeamApplication;
