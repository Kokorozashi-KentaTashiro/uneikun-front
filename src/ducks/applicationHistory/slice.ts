import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  ActionReducerMapBuilder,
} from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { API } from "aws-amplify";

import { initialState } from "./initialState";
import { ApplicationsState } from "./type";
import {
  API_NAME,
  TOURNAMENTS_HISTORY_RESOURCE,
  SINGLES_HISTORY_RESOURCE,
  TEAM_HISTORY_RESOURCE,
} from "common/constants";

// 非同期処理の関数作成
export const fetchAsyncGetTournaments = createAsyncThunk(
  `${TOURNAMENTS_HISTORY_RESOURCE}/get`,
  async (userId: string, thunkAPI) => {
    const req = {
      body: { userId: userId },
    };
    try {
      return await API.post(API_NAME, TOURNAMENTS_HISTORY_RESOURCE, req);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const fetchAsyncGetSingles = createAsyncThunk(
  `${SINGLES_HISTORY_RESOURCE}/get`,
  async (
    args: {
      tournamentName: string;
      userId: string;
    },
    thunkAPI
  ) => {
    const req = {
      body: { tournamentName: args.tournamentName, userId: args.userId },
    };
    try {
      return await API.post(API_NAME, SINGLES_HISTORY_RESOURCE, req);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const fetchAsyncGetTeam = createAsyncThunk(
  `${TEAM_HISTORY_RESOURCE}/get`,
  async (
    args: {
      tournamentName: string;
      userId: string;
    },
    thunkAPI
  ) => {
    const req = {
      body: { tournamentName: args.tournamentName, userId: args.userId },
    };
    try {
      return await API.post(API_NAME, TEAM_HISTORY_RESOURCE, req);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// sliceの作成
export const applicationHistorySlice = createSlice({
  name: "applicationHistory",
  initialState,
  reducers: {
    initApplicationHistoryState(state: ApplicationsState) {
      return {
        ...initialState,
      };
    },

    setTournamentName(state: ApplicationsState, action) {
      return {
        ...state,
        selectTournamentName: action.payload,
      };
    },

    setTournamentClass(state: ApplicationsState, action) {
      return {
        ...state,
        selectTournamentClass: action.payload,
      };
    },

    initTournamentName(state: ApplicationsState) {
      return {
        ...state,
        selectTournamentName: "",
      };
    },

    initTournamentClass(state: ApplicationsState) {
      return {
        ...state,
        selectTournamentClass: 0,
      };
    },

    initHistoryGroupsInfo(state: ApplicationsState) {
      return {
        ...state,
        historyGroupsInfo: [],
      };
    },
  },
  extraReducers(builder: ActionReducerMapBuilder<ApplicationsState>) {
    builder
      .addCase(
        fetchAsyncGetTournaments.fulfilled,
        (state: ApplicationsState, action: PayloadAction<any>) => {
          console.log("applicationHistory/fetchAsyncGetTournaments：fulfilled");
          return {
            ...state,
            isLoading: false,
            tournamentsInfo: action.payload,
          };
        }
      )
      .addCase(
        fetchAsyncGetTournaments.rejected,
        (state: ApplicationsState, action: PayloadAction<any>) => {
          console.log("applicationHistory/fetchAsyncGetTournaments：rejected");
        }
      )
      .addCase(
        fetchAsyncGetTournaments.pending,
        (state: ApplicationsState, action: PayloadAction<any>) => {
          return {
            ...state,
            isLoading: true,
          };
        }
      )
      .addCase(
        fetchAsyncGetSingles.fulfilled,
        (state: ApplicationsState, action: PayloadAction<any>) => {
          console.log("applicationHistory/fetchAsyncGetSingles：fulfilled");
          return {
            ...state,
            isLoading: false,
            historyGroupsInfo: action.payload,
          };
        }
      )
      .addCase(
        fetchAsyncGetSingles.rejected,
        (state: ApplicationsState, action: PayloadAction<any>) => {
          console.log("applicationHistory/fetchAsyncGetSingles：rejected");
        }
      )
      .addCase(
        fetchAsyncGetSingles.pending,
        (state: ApplicationsState, action: PayloadAction<any>) => {
          return {
            ...state,
            isLoading: true,
          };
        }
      )
      .addCase(
        fetchAsyncGetTeam.fulfilled,
        (state: ApplicationsState, action: PayloadAction<any>) => {
          console.log("applicationHistory/fetchAsyncGetTeam：fulfilled");
          return {
            ...state,
            isLoading: false,
            historyGroupsInfo: action.payload,
          };
        }
      )
      .addCase(
        fetchAsyncGetTeam.rejected,
        (state: ApplicationsState, action: PayloadAction<any>) => {
          console.log("applicationHistory/fetchAsyncGetTeam：rejected");
        }
      )
      .addCase(
        fetchAsyncGetTeam.pending,
        (state: ApplicationsState, action: PayloadAction<any>) => {
          return {
            ...state,
            isLoading: true,
          };
        }
      );
  },
});

export const {
  initApplicationHistoryState,
  setTournamentName,
  setTournamentClass,
  initTournamentName,
  initTournamentClass,
  initHistoryGroupsInfo,
} = applicationHistorySlice.actions;
export const selectIsLoading = (state: RootState) =>
  state.applicationHistory.isLoading;
export const selectTournamentName = (state: RootState) =>
  state.applicationHistory.selectTournamentName;
export const selectTournamentClass = (state: RootState) =>
  state.applicationHistory.selectTournamentClass;
export const selectTournamentsInfo = (state: RootState) =>
  state.applicationHistory.tournamentsInfo;
export const selectHistoryGroupsInfo = (state: RootState) =>
  state.applicationHistory.historyGroupsInfo;
export default applicationHistorySlice.reducer;
