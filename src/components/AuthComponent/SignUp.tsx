import { FC } from "react";

import { TextField, Typography } from "@mui/material";

import {
  setSignUpFamiliyName,
  setSignUpGivenName,
  setSignUpPhone,
  setSignUpPassword,
  setSignUpVerifyCode,
} from "ducks/auth/slice";
import {
  SignUpCommonCard,
  signUpCommonCardSx,
  SignUpCommonButton,
  signUpCommonButtonSx,
  signUpTextSx,
} from "themes/AuthComponent/signUpTheme";
import { useAuthComponentHook } from "hooks/authComponentHook";

const SignUp: FC = () => {
  // ReactHook
  const {
    dispatch,
    signUpInfo,
    onClickSignUpButton,
    getSignUpLabel,
    getSignUpDisabled,
    passwordErrs,
    createErr,
    confirmErr,
  } = useAuthComponentHook();

  return (
    <>
      <SignUpCommonCard sx={signUpCommonCardSx}>
        {signUpInfo.createStatus ? (
          <>
            <TextField
              id="cognito-verify-code"
              label="認証番号"
              variant="standard"
              value={signUpInfo.verifyCode}
              sx={signUpTextSx}
              onChange={(e) => {
                dispatch(setSignUpVerifyCode(e.target.value));
              }}
              error={confirmErr !== null}
            />
            {confirmErr !== null && <Typography>{`※${confirmErr}`}</Typography>}
          </>
        ) : (
          <>
            <TextField
              id="user-familiy-name"
              label="姓"
              variant="standard"
              value={signUpInfo.familiyName}
              sx={signUpTextSx}
              onChange={(e) => {
                dispatch(setSignUpFamiliyName(e.target.value));
              }}
            />
            <TextField
              id="user-given-name"
              label="名"
              variant="standard"
              value={signUpInfo.givenName}
              sx={signUpTextSx}
              onChange={(e) => {
                dispatch(setSignUpGivenName(e.target.value));
              }}
            />
            <TextField
              id="signup-phone"
              label="電話番号"
              variant="standard"
              value={signUpInfo.phone}
              sx={signUpTextSx}
              onChange={(e) => {
                dispatch(setSignUpPhone(e.target.value));
              }}
            />
            <TextField
              id="user-password"
              label="パスワード"
              variant="standard"
              type="password"
              autoComplete="current-password"
              value={signUpInfo.password}
              sx={signUpTextSx}
              onChange={(e) => {
                dispatch(setSignUpPassword(e.target.value));
              }}
              error={passwordErrs.length !== 0}
            />
            {passwordErrs.map((passwordErr) => {
              return <Typography>{`※${passwordErr}`}</Typography>;
            })}
            {createErr !== null && <Typography>{`※${createErr}`}</Typography>}
          </>
        )}
      </SignUpCommonCard>

      <SignUpCommonButton
        variant="contained"
        onClick={() => {
          onClickSignUpButton();
        }}
        sx={signUpCommonButtonSx}
        disabled={getSignUpDisabled()}
      >
        {getSignUpLabel()}
      </SignUpCommonButton>
    </>
  );
};

export default SignUp;

// Sign Up周りの実装
// https://docs.amplify.aws/lib/auth/emailpassword/q/platform/js/#sign-up
