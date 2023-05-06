import { useCallback, useState } from "react";
import { Auth } from "aws-amplify";
import { useDispatch, useSelector } from "react-redux";

import {
  selectSignUpInfo,
  selectIsLoading,
  selectSignInInfo,
  selectPasswordResetInfo,
  initPasswordResetInfo,
} from "ducks/auth/slice";
import { SignUpInfo, SignInInfo, PasswordResetInfo } from "ducks/auth/type";
import { AppDispatch } from "app/store";

export const useAuthComponentHook = () => {
  // Redux
  const dispatch = useDispatch<AppDispatch>();
  const signUpInfo: SignUpInfo = useSelector(selectSignUpInfo);
  const signInInfo: SignInInfo = useSelector(selectSignInInfo);
  const passwordResetInfo: PasswordResetInfo = useSelector(
    selectPasswordResetInfo
  );
  const isLoading: boolean = useSelector(selectIsLoading);

  // useState
  const [createDisable, setCreateDisable] = useState<boolean>(false);
  const [resetDisable, setResetDisable] = useState<boolean>(false);
  const [signUpPasswordErrs, setSignUpPasswordErrs] = useState<string[]>([]);
  const [resetPasswordErrs, setResetPasswordErrs] = useState<string[]>([]);
  const [createErr, setCreateErr] = useState<string | null>(null);
  const [confirmErr, setConfirmErr] = useState<string | null>(null);
  const [passResetFlg, setPassResetFlg] = useState<boolean>(false);

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
    }).catch((err) => {
      switch (err.code) {
        case "UsernameExistsException":
          // ユーザープール内に既に同じ username が存在する場合に起こる。
          setCreateErr(
            "該当の電話番号は既に登録されています。ログインしてください。"
          );
          break;

        case "InvalidPasswordException":
          // ユーザープールのポリシーで設定したパスワードの強度を満たさない場合に起こる。
          setCreateErr(
            "パスワードの設定に失敗しました。管理者に連絡してください。"
          );
          break;

        case "InvalidParameterException":
          // 必要な属性が足りない場合や、入力された各項目が Cognito 側で正しくパースできない場合（バリデーションエラー）に起こる。
          // password が6文字未満の場合はバリデーションエラーでこちらのエラーコードが返ってくる。
          setCreateErr(
            "不正な入力値がありました。入力内容を見直してください。"
          );
          break;

        default:
          setConfirmErr(
            "予期せぬエラーが発生しました。管理者に連絡してください。"
          );
          break;
      }
    });
  }, [signUpInfo]);

  // [会員認証]
  const onCognitoVerify = useCallback(() => {
    Auth.confirmSignUp(
      `+81${signUpInfo.phone.slice(1)}`,
      signUpInfo.verifyCode
    ).catch((err) => {
      switch (err.code) {
        case "CodeMismatchException":
          // 無効なコードが入力された場合に起こる。
          setConfirmErr("正しい認証コードを入力してください。");
          break;

        case "LimitExceededException":
          // コードを間違え続けた場合に起こる。
          setConfirmErr("24時間置いて再実行してください。");
          break;

        case "ExpiredCodeException":
          // コードが期限切れ（24時間をオーバー）した場合に起こる。
          // 注) username が存在しない・無効化されている場合にも起こる。
          setConfirmErr("コードが期限切れです。管理者に連絡してください。");
          break;

        case "NotAuthorizedException":
          // 既にステータスが CONFIRMED になっている場合に起こる。
          setConfirmErr("既に認証済みです。ログインしてください。");
          break;

        case "CodeDeliveryFailureException":
          // 検証コードの送信に失敗した場合に起こる。
          setConfirmErr("認証の送信に失敗しました。管理者に連絡してください。");
          break;

        default:
          setConfirmErr(
            "予期せぬエラーが発生しました。管理者に連絡してください。"
          );
          break;
      }
    });
  }, [signUpInfo]);

  // [ログイン]
  const onSignIn = () => {
    Auth.signIn({
      username: `+81${signInInfo.phone.slice(1)}`,
      password: signInInfo.password,
    });
  };

  // [SMS送信（パスワードリセット）]
  const forgotPassword = async () => {
    await Auth.forgotPassword(`+81${passwordResetInfo.phone.slice(1)}`);
  };

  // [リセット（パスワードリセット）]
  const forgotPasswordConfirm = async () => {
    try {
      await Auth.forgotPasswordSubmit(
        `+81${passwordResetInfo.phone.slice(1)}`,
        passwordResetInfo.code,
        passwordResetInfo.newPassword
      );
      dispatch(initPasswordResetInfo());
      setPassResetFlg(false);

      console.log("OK");
    } catch (error) {
      console.log("NG");
      console.log(error);
    }
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

  // SignUpでの活性状態返却用
  const getSignUpDisabled = useCallback(() => {
    let res = false;
    if (signUpInfo.createStatus) {
      res = createDisable;
    } else {
      res = createDisable;
    }
    return res;
  }, [signUpInfo.createStatus, createDisable]);

  // パスワードチェック（SignUp）
  const checkSignUpPassword = useCallback(() => {
    // 桁数チェック
    let lengthCheck = false;
    if (signUpInfo.password.length < 6) {
      lengthCheck = true;
    }

    // 数値を含む
    let numberCheck = false;
    const numberPattern = new RegExp(`^.*\\d.*`);
    if (!numberPattern.test(signUpInfo.password)) {
      numberCheck = true;
    }

    // 特殊文字を含む
    // let specialCheck = false;
    // const specialPattern = new RegExp(
    //   `[\\^||\\$||\\*||\\.||\\[||\\]||\\{||\\}||\\(||\\)||\\?||\\-||\\"||\\!||\\@||\\#||\\%||\\&||\\/||\\,||\\>||\\<||\\'||\\:||\\;||\\|||\\_||\\~||\\+||\\=]`
    // );
    // const specialSinglePattern = new RegExp("[' || /]");
    // if (!specialPattern.test(signUpInfo.password)) {
    //   if (!specialSinglePattern.test(signUpInfo.password)) {
    //     specialCheck = true;
    //   }
    // }

    // 大文字を含む
    // let upperCheck = false;
    // const upperPattern = new RegExp(`[A-Z]`);
    // if (!upperPattern.test(signUpInfo.password)) {
    //   upperCheck = true;
    // }

    // 小文字を含む
    let lowerCheck = false;
    const lowerPattern = new RegExp(`[a-z]`);
    if (!lowerPattern.test(signUpInfo.password)) {
      lowerCheck = true;
    }

    // レスポンス判定
    let errArray = [];
    if (lengthCheck) {
      errArray.push("パスワードは6文字以上を入力してください");
    }
    // if (specialCheck) {
    //   errArray.push("パスワードに特殊文字を含めてください");
    // }
    // if (upperCheck) {
    //   errArray.push("パスワードに大文字を含めてください");
    // }
    if (lowerCheck) {
      errArray.push("パスワードに子文字を含めてください");
    }
    if (numberCheck) {
      errArray.push("パスワードは数値を入力してください");
    }
    setSignUpPasswordErrs(errArray);

    if (
      lengthCheck ||
      // specialCheck ||
      // upperCheck ||
      lowerCheck ||
      numberCheck
    ) {
      return true;
    } else {
      return false;
    }
  }, [signUpInfo.password]);

  // パスワードチェック（PassWordReset）
  const checkResetPassword = useCallback(() => {
    // 桁数チェック
    let lengthCheck = false;
    if (passwordResetInfo.newPassword.length < 6) {
      lengthCheck = true;
    }

    // 数値を含む
    let numberCheck = false;
    const numberPattern = new RegExp(`^.*\\d.*`);
    if (!numberPattern.test(passwordResetInfo.newPassword)) {
      numberCheck = true;
    }

    // 特殊文字を含む
    // let specialCheck = false;
    // const specialPattern = new RegExp(
    //   `[\\^||\\$||\\*||\\.||\\[||\\]||\\{||\\}||\\(||\\)||\\?||\\-||\\"||\\!||\\@||\\#||\\%||\\&||\\/||\\,||\\>||\\<||\\'||\\:||\\;||\\|||\\_||\\~||\\+||\\=]`
    // );
    // const specialSinglePattern = new RegExp("[' || /]");
    // if (!specialPattern.test(passwordResetInfo.newPassword)) {
    //   if (!specialSinglePattern.test(passwordResetInfo.newPassword)) {
    //     specialCheck = true;
    //   }
    // }

    // 大文字を含む
    // let upperCheck = false;
    // const upperPattern = new RegExp(`[A-Z]`);
    // if (!upperPattern.test(passwordResetInfo.newPassword)) {
    //   upperCheck = true;
    // }

    // 小文字を含む
    let lowerCheck = false;
    const lowerPattern = new RegExp(`[a-z]`);
    if (!lowerPattern.test(passwordResetInfo.newPassword)) {
      lowerCheck = true;
    }

    // レスポンス判定
    let errArray = [];
    if (lengthCheck) {
      errArray.push("パスワードは6文字以上を入力してください");
    }
    // if (specialCheck) {
    //   errArray.push("パスワードに特殊文字を含めてください");
    // }
    // if (upperCheck) {
    //   errArray.push("パスワードに大文字を含めてください");
    // }
    if (lowerCheck) {
      errArray.push("パスワードに子文字を含めてください");
    }
    if (numberCheck) {
      errArray.push("パスワードは数値を入力してください");
    }
    setResetPasswordErrs(errArray);

    if (
      lengthCheck ||
      // specialCheck ||
      // upperCheck ||
      lowerCheck ||
      numberCheck
    ) {
      return true;
    } else {
      return false;
    }
  }, [passwordResetInfo.newPassword]);

  return {
    dispatch,
    signUpInfo,
    signInInfo,
    passwordResetInfo,
    passResetFlg,
    resetPasswordErrs,
    checkResetPassword,
    setPassResetFlg,
    forgotPassword,
    forgotPasswordConfirm,
    resetDisable,
    setResetDisable,
    isLoading,
    onSignIn,
    onClickSignUpButton,
    getSignUpLabel,
    getSignUpDisabled,
    createDisable,
    signUpPasswordErrs,
    createErr,
    confirmErr,
    setCreateDisable,
    checkSignUpPassword,
  };
};
