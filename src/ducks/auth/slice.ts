import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  ActionReducerMapBuilder,
} from "@reduxjs/toolkit";
import { API } from "aws-amplify";

import { API_NAME, USERINFO_RESOURCE } from "common/constants";
import { RootState } from "app/store";
import { initialState } from "./initialState";
import { AuthState, UserInfo } from "./type";

// ログインユーザー情報の取得
export const fetchAsyncGetUserInfo = createAsyncThunk(
  "userInfo/get",
  async (userId: string, thunkAPI) => {
    const req = {
      body: {
        userId: userId,
      },
    };
    try {
      return await API.post(API_NAME, USERINFO_RESOURCE, req);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// 新規ユーザー情報の登録
export const fetchAsyncPutUserInfo = createAsyncThunk(
  "userInfo/put",
  (userInfo: UserInfo, thunkAPI) => {
    console.log("userInfo/create");
    const req = {
      body: {
        userId: userInfo.userId,
        lastName: userInfo.lastName,
        firstName: userInfo.firstName,
        phone: userInfo.phone,
      },
    };
    try {
      return API.put(API_NAME, USERINFO_RESOURCE, req);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// sliceの作成
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // 共通
    initAuthState(state: AuthState) {
      return {
        ...initialState,
      };
    },
    setUserId(state: AuthState, action) {
      return {
        ...state,
        signInInfo: {
          ...state.signInInfo,
          userId: action.payload,
        },
        userInfo: {
          ...state.userInfo,
          isAdmin: false,
          userId: action.payload,
        },
      };
    },
    // UserInfo
    setUserInfoLastName(state: AuthState, action) {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          lastName: action.payload,
        },
      };
    },
    setUserInfoFirstName(state: AuthState, action) {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          firstName: action.payload,
        },
      };
    },
    setUserInfoPhone(state: AuthState, action) {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          phone: action.payload,
        },
      };
    },
    // SignInInfo
    initSignInInfo(state: AuthState) {
      return {
        ...state,
        signInInfo: {
          ...initialState.signInInfo,
        },
      };
    },
    setSignInPhone(state: AuthState, action) {
      return {
        ...state,
        signInInfo: {
          ...state.signInInfo,
          phone: action.payload,
        },
      };
    },
    setSignInPassword(state: AuthState, action) {
      return {
        ...state,
        signInInfo: {
          ...state.signInInfo,
          password: action.payload,
        },
      };
    },
    // PasswordResetInfo
    initPasswordResetInfo(state: AuthState) {
      return {
        ...state,
        passwordResetInfo: {
          ...initialState.passwordResetInfo,
        },
      };
    },
    setPasswordResetPhone(state: AuthState, action) {
      return {
        ...state,
        passwordResetInfo: {
          ...state.passwordResetInfo,
          phone: action.payload,
        },
      };
    },
    setPasswordResetCode(state: AuthState, action) {
      return {
        ...state,
        passwordResetInfo: {
          ...state.passwordResetInfo,
          code: action.payload,
        },
      };
    },
    setPasswordResetNewPassword(state: AuthState, action) {
      return {
        ...state,
        passwordResetInfo: {
          ...state.passwordResetInfo,
          newPassword: action.payload,
        },
      };
    },
    setPasswordResetResetStatus(state: AuthState, action) {
      console.log("slice実行");
      console.log(action.payload);
      return {
        ...state,
        passwordResetInfo: {
          ...state.passwordResetInfo,
          resetStatus: action.payload,
        },
      };
    },

    // SignUpInfo
    initSignUpInfo(state: AuthState) {
      return {
        ...state,
        signUpInfo: {
          ...initialState.signUpInfo,
        },
      };
    },
    setSignUpUserId(state: AuthState, action) {
      return {
        ...state,
        signUpInfo: {
          ...state.signUpInfo,
          userId: action.payload,
        },
      };
    },
    setSignUpFamiliyName(state: AuthState, action) {
      return {
        ...state,
        signUpInfo: {
          ...state.signUpInfo,
          familiyName: action.payload,
        },
      };
    },
    setSignUpGivenName(state: AuthState, action) {
      return {
        ...state,
        signUpInfo: {
          ...state.signUpInfo,
          givenName: action.payload,
        },
      };
    },
    setSignUpPhone(state: AuthState, action) {
      return {
        ...state,
        signUpInfo: {
          ...state.signUpInfo,
          phone: action.payload,
        },
      };
    },
    setSignUpPassword(state: AuthState, action) {
      return {
        ...state,
        signUpInfo: {
          ...state.signUpInfo,
          password: action.payload,
        },
      };
    },
    setSignUpVerifyCode(state: AuthState, action) {
      return {
        ...state,
        signUpInfo: {
          ...state.signUpInfo,
          verifyCode: action.payload,
        },
      };
    },
    setSignUpCreateStatus(state: AuthState, action) {
      return {
        ...state,
        signUpInfo: {
          ...state.signUpInfo,
          createStatus: action.payload,
        },
      };
    },
  },
  extraReducers(builder: ActionReducerMapBuilder<AuthState>) {
    builder
      .addCase(
        fetchAsyncGetUserInfo.fulfilled,
        (state: AuthState, action: PayloadAction<any>) => {
          console.log("auth/fetchAsyncGetUserInfo：fulfilled");

          let judgeStatus = false;
          if (action.payload.firstName) {
            judgeStatus = true;
          }

          return {
            ...state,
            isLoading: false,
            signInInfo: {
              ...state.signInInfo,
              signInStatus: judgeStatus,
            },
            userInfo: {
              ...state.userInfo,
              isAdmin: action.payload.isAdmin,
              userId: action.payload.userId,
              lastName: action.payload.lastName,
              firstName: action.payload.firstName,
              phone: action.payload.phone,
            },
          };
        }
      )
      .addCase(
        fetchAsyncGetUserInfo.rejected,
        (state: AuthState, action: PayloadAction<any>) => {
          console.log("auth/fetchAsyncGetUserInfo：rejected");
        }
      )
      .addCase(
        fetchAsyncGetUserInfo.pending,
        (state: AuthState, action: PayloadAction<any>) => {
          return {
            ...state,
            isLoading: true,
          };
        }
      )
      .addCase(
        fetchAsyncPutUserInfo.fulfilled,
        (state: AuthState, action: PayloadAction<any>) => {
          console.log("auth/fetchAsyncPutUserInfo：fulfilled");
          return {
            ...state,
            isLoading: false,
            signInInfo: {
              ...state.signInInfo,
              userInfoStatus: true,
            },
          };
        }
      )
      .addCase(
        fetchAsyncPutUserInfo.rejected,
        (state: AuthState, action: PayloadAction<any>) => {
          console.log("auth/fetchAsyncPutUserInfo：rejected");
          console.log(action.payload);
        }
      )
      .addCase(
        fetchAsyncPutUserInfo.pending,
        (state: AuthState, action: PayloadAction<any>) => {
          return {
            ...state,
            isLoading: true,
          };
        }
      );
  },
});

export const {
  initAuthState,
  setUserId,
  setUserInfoLastName,
  setUserInfoFirstName,
  setUserInfoPhone,
  initSignInInfo,
  setSignInPhone,
  setSignInPassword,
  initPasswordResetInfo,
  setPasswordResetPhone,
  setPasswordResetCode,
  setPasswordResetNewPassword,
  setPasswordResetResetStatus,
  initSignUpInfo,
  setSignUpUserId,
  setSignUpFamiliyName,
  setSignUpGivenName,
  setSignUpPhone,
  setSignUpPassword,
  setSignUpVerifyCode,
  setSignUpCreateStatus,
} = authSlice.actions;

export const selectIsLoading = (state: RootState) => state.auth.isLoading;
export const selectSignInInfo = (state: RootState) => state.auth.signInInfo;
export const selectPasswordResetInfo = (state: RootState) =>
  state.auth.passwordResetInfo;
export const selectSignUpInfo = (state: RootState) => state.auth.signUpInfo;
export const selectUserInfo = (state: RootState) => state.auth.userInfo;
export default authSlice.reducer;
