import { useCallback } from "react";
import { Auth } from "aws-amplify";
import { useDispatch, useSelector } from "react-redux";

import {
  selectSignUpInfo,
  selectIsLoading,
  selectSignInInfo,
} from "ducks/auth/slice";
import { SignUpInfo, SignInInfo } from "ducks/auth/type";
import { AppDispatch } from "app/store";

export const useAuthComponentHook = () => {
  // 変数
  const dispatch = useDispatch<AppDispatch>();
  const signUpInfo: SignUpInfo = useSelector(selectSignUpInfo);
  const signInInfo: SignInInfo = useSelector(selectSignInInfo);
  const isLoading: boolean = useSelector(selectIsLoading);

  // [新規会員登録]
  const onCognitoSignUp = useCallback(() => {
    Auth.signUp({
      username: `+81${signUpInfo.phone.slice(1)}`,
      password: signUpInfo.password,
      attributes: {
        family_name: signUpInfo.familiyName,
        given_name: signUpInfo.givenName,
        phone_number: `+81${signUpInfo.phone.slice(1)}`,
      },
      autoSignIn: {
        enabled: true,
      },
    });
  }, [signUpInfo]);

  // [会員認証]
  const onCognitoVerify = useCallback(() => {
    Auth.confirmSignUp(
      `+81${signUpInfo.phone.slice(1)}`,
      signUpInfo.verifyCode
    );
  }, [signUpInfo]);

  // [ログイン]
  const onSignIn = () => {
    Auth.signIn({
      username: `+81${signInInfo.phone.slice(1)}`,
      password: signInInfo.password,
    });
  };

  // SignUpでのボタン押下共通処理
  const onClickSignUpButton = useCallback(() => {
    signUpInfo.createStatus ? onCognitoVerify() : onCognitoSignUp();
  }, [signUpInfo.createStatus, onCognitoVerify, onCognitoSignUp]);

  // SignUpでのボタン名返却用
  const getSignUpLabel = useCallback(() => {
    let res = "";
    if (signUpInfo.createStatus) {
      res = "会員認証";
    } else {
      res = "新規会員登録";
    }
    return res;
  }, [signUpInfo.createStatus]);

  return {
    dispatch,
    signUpInfo,
    signInInfo,
    isLoading,
    onSignIn,
    onClickSignUpButton,
    getSignUpLabel,
  };
};
