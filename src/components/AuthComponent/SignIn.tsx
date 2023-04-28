import { FC, useEffect } from "react";

import { TextField, Typography } from "@mui/material";

import {
  setSignInPhone,
  setSignInPassword,
  setPasswordResetPhone,
  setPasswordResetCode,
  setPasswordResetNewPassword,
} from "ducks/auth/slice";

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
import { CommonLink } from "common/commonMaterial";

const SignIn: FC = () => {
  // ReactHook
  const { dispatch, signInInfo, onSignIn } = useAuthComponentHook();
  const { signInErr, forgotErr, forgotConfirmErr } = useAppHook();

  // customHook
  const {
    passwordResetInfo,
    passResetFlg,
    setPassResetFlg,
    forgotPassword,
    forgotPasswordConfirm,
    resetPasswordErrs,
    checkResetPassword,
    resetDisable,
    setResetDisable,
  } = useAuthComponentHook();

  // function

  // useEffect
  useEffect(() => {
    const { phone, code } = { ...passwordResetInfo };
    setResetDisable(checkResetPassword() || phone === "" || code === "");
  }, [passwordResetInfo, checkResetPassword, setResetDisable]);

  return (
    <>
      {/* パスワードリセットフラグ=false */}
      {!passResetFlg && (
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
      )}

      {/* パスワードリセットフラグ=true：パスワードリセットステータス=「0（コード未送信）」 */}
      {passResetFlg && passwordResetInfo.resetStatus === 0 && (
        <>
          <SignInCommonCard sx={signInCommonCardSx}>
            <TextField
              id="phone"
              label="電話番号"
              value={passwordResetInfo.phone}
              onChange={(e) => {
                dispatch(setPasswordResetPhone(e.target.value));
              }}
            />
            {forgotErr !== null && (
              <SignInTypography sx={signInTypographySx}>
                {forgotErr}
              </SignInTypography>
            )}
          </SignInCommonCard>
          <SignInCommonButton
            variant="contained"
            onClick={() => {
              forgotPassword();
            }}
            sx={signInCommonButtonSx}
          >
            SMS送信
          </SignInCommonButton>
        </>
      )}

      {/* パスワードリセットフラグ=true：パスワードリセットステータス=「1（コード送信済）」 */}
      {passResetFlg && passwordResetInfo.resetStatus === 1 && (
        <>
          <SignInCommonCard sx={signInCommonCardSx}>
            <TextField
              id="authCode"
              label="認証コード"
              value={passwordResetInfo.code}
              onChange={(e) => {
                dispatch(setPasswordResetCode(e.target.value));
              }}
            />
            <TextField
              id="newPassWord"
              label="新しいパスワード"
              value={passwordResetInfo.newPassword}
              onChange={(e) => {
                dispatch(setPasswordResetNewPassword(e.target.value));
              }}
            />
            {resetPasswordErrs.map((resetPasswordErr) => {
              return <Typography>{`※${resetPasswordErr}`}</Typography>;
            })}
            {forgotConfirmErr !== null && (
              <SignInTypography sx={signInTypographySx}>
                {forgotConfirmErr}
              </SignInTypography>
            )}
          </SignInCommonCard>
          <SignInCommonButton
            variant="contained"
            onClick={() => {
              forgotPasswordConfirm();
            }}
            sx={signInCommonButtonSx}
            disabled={resetDisable}
          >
            リセット
          </SignInCommonButton>
        </>
      )}

      <CommonLink
        underline="hover"
        onClick={() => setPassResetFlg(!passResetFlg)}
        sx={{ marginTop: { xs: 2, md: 4 } }}
      >
        {passResetFlg ? "ログインはこちら" : "パスワードを忘れた場合はこちら"}
      </CommonLink>
    </>
  );
};

export default SignIn;
