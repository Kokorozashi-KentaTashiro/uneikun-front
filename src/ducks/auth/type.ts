export type AuthState = {
  isLoading: boolean;
  signInInfo: SignInInfo;
  passwordResetInfo: PasswordResetInfo;
  signUpInfo: SignUpInfo;
  userInfo: UserInfo;
};

/** SignIn情報 */
export type SignInInfo = {
  phone: string;
  password: string;
  userId: string;
  signInStatus: boolean;
};

/** PassWordリセット情報 */
export type PasswordResetInfo = {
  phone: string;
  code: string;
  newPassword: string;
  resetStatus: number;
};

/** SignUp情報 */
export type SignUpInfo = {
  userId: string;
  familiyName: string;
  givenName: string;
  phone: string;
  password: string;
  verifyCode: string;
  createStatus: boolean;
};

/** ユーザ情報 */
export type UserInfo = {
  isAdmin: boolean;
  userId: string;
  lastName: string;
  firstName: string;
  phone: string;
};
