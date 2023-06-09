import { useLayoutEffect, useState } from "react";
import { Hub } from "aws-amplify";
import { useDispatch, useSelector } from "react-redux";
import { Auth } from "aws-amplify";
import {
  selectSignInInfo,
  setUserId,
  fetchAsyncGetUserInfo,
  initAuthState,
  initSignInInfo,
  initSignUpInfo,
  setSignUpUserId,
  setSignUpCreateStatus,
} from "ducks/auth/slice";
import { SignInInfo } from "ducks/auth/type";
import { AppDispatch } from "app/store";
import { fetchAsyncPutUserInfo } from "ducks/auth/slice";
import { setSignInPhone, setSignInPassword } from "ducks/auth/slice";

export const useAppHook = () => {
  // Redux変数
  const dispatch = useDispatch<AppDispatch>();
  const signInInfo: SignInInfo = useSelector(selectSignInInfo);

  // 変数
  const [signInErr, setSignInErr] = useState<string | null>(null);
  const [forgotErr, setForgotErr] = useState<string | null>(null);
  const [forgotConfirmErr, setForgotConfirmErr] = useState<string | null>(null);

  // 関数
  const getUser = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      // デバッグ用
      Auth.currentSession().then((data) => {
        // console.log(`token: ${data.getIdToken().getJwtToken()}`);
      });
      console.log(userData);
      return userData;
    } catch (e) {
      return console.log("Not signed in");
    }
  };

  // useEffect
  useLayoutEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      console.log(`event：${event}`);
      console.dir(data);
      switch (event) {
        // SignIn
        case "signIn":
          dispatch(initSignInInfo());
          getUser().then((userData) => {
            dispatch(setUserId(userData.username));
            dispatch(fetchAsyncGetUserInfo(userData.username));
          });
          break;

        case "signIn_failure":
          setSignInErr("※正しい電話番号・パスワードを入力してください。");
          dispatch(setSignInPhone(""));
          dispatch(setSignInPassword(""));
          break;

        // SignUp
        case "signUp":
          console.log("サインアップ");
          dispatch(setSignUpCreateStatus(true));
          dispatch(setSignUpUserId(data.userSub));
          break;

        case "signUp_failure":
          console.log("Sign up failure", data);
          break;

        case "autoSignIn":
          console.log("自動サインイン");
          dispatch(
            fetchAsyncPutUserInfo({
              isAdmin: false,
              userId: data.username,
              lastName: data.attributes.family_name,
              firstName: data.attributes.given_name,
              phone: data.attributes.phone_number,
            })
          );
          dispatch(setUserId(data.username));
          dispatch(fetchAsyncGetUserInfo(data.username));
          dispatch(initSignUpInfo());
          break;

        case "autoSignIn_failure":
          console.log("autoSign in failure", data);
          break;

        // signOut
        case "signOut":
          dispatch(initAuthState());
          break;

        case "forgotPassword_failure":
          switch (data.code) {
            case "UserNotFoundException":
              setForgotConfirmErr("ユーザー情報が存在しません。");
              break;
            case "LimitExceededException":
              setForgotConfirmErr(
                "リクエスト回数が制限を超えました。24時間後に再実行してください。"
              );
              break;
            case "TooManyRequestsException":
              setForgotConfirmErr(
                "リクエスト回数が制限を超えました。24時間後に再実行してください。"
              );
              break;
            default:
              setForgotConfirmErr(
                "原因不明のエラーが発生しました。管理者にご連絡ください。"
              );
              break;
          }
          console.log(JSON.stringify(data));
          break;

        case "forgotPasswordSubmit_failure":
          switch (data.code) {
            case "CodeMismatchException":
              setForgotErr("認証コードが誤っています。");
              break;

            case "ExpiredCodeException":
              setForgotErr("認証コードの有効期限が切れています。");
              break;

            case "InvalidPasswordException":
              setForgotErr("パスワードに無効な値が入力されています。");
              break;

            case "LimitExceededException":
              setForgotErr(
                "リクエスト回数が制限を超えました。24時間後に再実行してください。"
              );
              break;

            case "TooManyFailedAttemptsException":
              setForgotErr(
                "認証の失敗回数が多すぎるので24時間後に再実行してください。"
              );
              break;

            case "TooManyRequestsException":
              setForgotErr(
                "リクエスト回数が制限を超えました。24時間後に再実行してください。"
              );
              break;

            default:
              setForgotErr(
                "原因不明のエラーが発生しました。管理者にご連絡ください。"
              );
              break;
          }
          console.log(JSON.stringify(data));
          break;

        default:
          console.log("該当なし");
          break;
      }
    });

    getUser().then((userData) => {
      dispatch(setUserId(userData.username));
      dispatch(fetchAsyncGetUserInfo(userData.username));
    });
  }, [dispatch]);

  return {
    signInInfo,
    signInErr,
    forgotErr,
    forgotConfirmErr,
  };
};
