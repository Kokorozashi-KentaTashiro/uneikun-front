import { FC } from "react";
import {
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import {
  TournamentRegistCard,
  tournamentRegistCardSx,
  TournamentRegistCardMedia,
  tournamentRegistCardMediaSx,
  TournamentRegistCardContent,
  tournamentRegistCardContentSx,
  TournamentRegistRow,
  tournamentRegistRowSx,
  titleElementSx,
  classElementSx,
  eventDateElementSx,
  placeElementSx,
  applicantStartElementSx,
  applicantEndElementSx,
  detailPdfUrlElementSx,
  TournamentRegistButton,
  tournamentRegistButtonSx,
} from "themes/tournamentRegistTheme";
import dayjs from "dayjs";
import Layout from "components/Layout";
import { AppBox, CommonLoading } from "common/commonMaterial";
import { tournamentClasses } from "common/constants";
import { useTournamentRegistHook } from "hooks/tournamentRegistHook";
import {
  HOME_INFO,
  TOURNAMNTS_INFO,
  TOURNAMNT_REGIST_INFO,
} from "common/PAGES";

const TournamentRegist: FC = () => {
  // ReactHook
  const {
    isLoading,
    tournamentRegistInfo,
    buttonDisable,
    changeTitleVal,
    changeClassVal,
    changeEventDate,
    changePlaceVal,
    changeApplicationStartDate,
    changeApplicationEndDate,
    changeDetailPdfUrl,
    onClickConfirm,
  } = useTournamentRegistHook();

  return (
    <>
      <Layout
        breadcrumbs={[
          HOME_INFO.CONTEXT,
          TOURNAMNTS_INFO.CONTEXT,
          TOURNAMNT_REGIST_INFO.CONTEXT,
        ]}
      >
        <AppBox>
          {isLoading ? (
            <CommonLoading size={100} />
          ) : (
            <TournamentRegistCard sx={tournamentRegistCardSx}>
              <TournamentRegistCardMedia sx={tournamentRegistCardMediaSx}>
                大会登録情報
              </TournamentRegistCardMedia>
              <TournamentRegistCardContent sx={tournamentRegistCardContentSx}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TournamentRegistRow sx={tournamentRegistRowSx}>
                    <FormControl variant="outlined" sx={titleElementSx}>
                      <TextField
                        id="tournament-title"
                        label="大会名"
                        variant="outlined"
                        value={tournamentRegistInfo.tournamentTitle}
                        onChange={changeTitleVal}
                      />
                    </FormControl>
                    <FormControl variant="outlined" sx={classElementSx}>
                      <InputLabel id="select">大会区分</InputLabel>
                      <Select
                        labelId="select"
                        id="select"
                        label="大会区分"
                        value={tournamentRegistInfo.tournamentClass}
                        onChange={changeClassVal}
                      >
                        {tournamentClasses.map((tournamentClass, key) => (
                          <MenuItem key={key} value={tournamentClass.index}>
                            {tournamentClass.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </TournamentRegistRow>

                  <TournamentRegistRow sx={tournamentRegistRowSx}>
                    <FormControl variant="outlined" sx={eventDateElementSx}>
                      <DesktopDatePicker
                        label="開催日"
                        inputFormat="YYYY/MM/DD"
                        value={dayjs(tournamentRegistInfo.eventDate)}
                        onChange={changeEventDate}
                        renderInput={(params) => <TextField {...params} />}
                        leftArrowButtonText="前月"
                        rightArrowButtonText="次月"
                      />
                    </FormControl>
                    <FormControl variant="outlined" sx={placeElementSx}>
                      <TextField
                        id="tournament-place"
                        label="開催場所"
                        variant="outlined"
                        value={tournamentRegistInfo.place}
                        onChange={changePlaceVal}
                      />
                    </FormControl>
                  </TournamentRegistRow>

                  <TournamentRegistRow sx={tournamentRegistRowSx}>
                    <FormControl
                      variant="outlined"
                      sx={applicantStartElementSx}
                    >
                      <DesktopDatePicker
                        label="申込開始日"
                        inputFormat="YYYY/MM/DD"
                        value={dayjs(tournamentRegistInfo.applicationStartDate)}
                        onChange={changeApplicationStartDate}
                        renderInput={(params) => <TextField {...params} />}
                        leftArrowButtonText="前月"
                        rightArrowButtonText="次月"
                      />
                    </FormControl>

                    <FormControl variant="outlined" sx={applicantEndElementSx}>
                      <DesktopDatePicker
                        label="申込終了日"
                        inputFormat="YYYY/MM/DD"
                        value={dayjs(tournamentRegistInfo.applicationEndDate)}
                        onChange={changeApplicationEndDate}
                        renderInput={(params) => <TextField {...params} />}
                        leftArrowButtonText="前月"
                        rightArrowButtonText="次月"
                      />
                    </FormControl>
                  </TournamentRegistRow>

                  <TournamentRegistRow sx={tournamentRegistRowSx}>
                    <FormControl variant="outlined" sx={detailPdfUrlElementSx}>
                      <TextField
                        id="tournament-detailPdfUrl"
                        label="要項（URL）"
                        variant="outlined"
                        value={tournamentRegistInfo.detailPdfUrl}
                        onChange={changeDetailPdfUrl}
                      />
                    </FormControl>
                  </TournamentRegistRow>

                  <TournamentRegistRow sx={tournamentRegistRowSx}>
                    <TournamentRegistButton
                      variant="contained"
                      sx={tournamentRegistButtonSx}
                      disabled={buttonDisable}
                      onClick={onClickConfirm}
                    >
                      確定
                    </TournamentRegistButton>
                  </TournamentRegistRow>
                </LocalizationProvider>
              </TournamentRegistCardContent>
            </TournamentRegistCard>
          )}
        </AppBox>
      </Layout>
    </>
  );
};

export default TournamentRegist;

// 日付選択のform
// https://mui.com/x/react-date-pickers/getting-started/
