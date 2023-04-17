import { FC } from "react";

import { TextField } from "@mui/material";

import { setSignInPhone, setSignInPassword } from "ducks/auth/slice";

import {
  SignInCommonCard,
  signInCommonCardSx,
  SignInCommonButton,
  signInCommonButtonSx,
  signInTextSx,
  SignInTypography,
  signInTypographySx,
} from "themes/AuthComponent/signInTheme";
import { useAuthComponentHook } from "hooks/authComponentHook";
import { useAppHook } from "hooks/appHook";

const SignIn: FC = () => {
  // ReactHook
  const { dispatch, signInInfo, onSignIn } = useAuthComponentHook();
  const { signInErr } = useAppHook();

  return (
    <>
      <SignInCommonCard sx={signInCommonCardSx}>
        <TextField
          id="user-phone"
          label="電話番号"
          variant="standard"
          value={signInInfo.phone}
          onChange={(e) => {
            dispatch(setSignInPhone(e.target.value));
          }}
          sx={signInTextSx}
        />
        <TextField
          id="user-password"
          label="パスワード"
          variant="standard"
          type="password"
          autoComplete="current-password"
          value={signInInfo.password}
          onChange={(e) => {
            dispatch(setSignInPassword(e.target.value));
          }}
          sx={signInTextSx}
        />
        {signInErr !== null && (
          <SignInTypography sx={signInTypographySx}>
            {signInErr}
          </SignInTypography>
        )}
      </SignInCommonCard>
      <SignInCommonButton
        variant="contained"
        onClick={onSignIn}
        sx={signInCommonButtonSx}
      >
        ログイン
      </SignInCommonButton>
    </>
  );
};

export default SignIn;
