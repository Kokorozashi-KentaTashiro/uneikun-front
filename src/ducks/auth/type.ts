export type AuthState = {
  isLoading: boolean;
  signInInfo: SignInInfo;
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
