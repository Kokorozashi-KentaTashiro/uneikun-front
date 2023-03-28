import { AuthState } from "./type";
export const initialState: AuthState = {
  isLoading: false,
  signInInfo: {
    phone: "",
    password: "",
    userId: "",
    signInStatus: false,
  },
  signUpInfo: {
    userId: "",
    familiyName: "",
    givenName: "",
    phone: "",
    password: "",
    verifyCode: "",
    createStatus: false,
  },

  userInfo: {
    isAdmin: false,
    userId: "",
    lastName: "",
    firstName: "",
    phone: "",
  },
};
