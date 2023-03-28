import { FC, useState } from "react";

import SignUp from "components/AuthComponent/SignUp";
import SignIn from "components/AuthComponent/SignIn";
import { AuthContainer } from "themes/authComponentTheme";
import { CommonLink, CommonLoading } from "common/commonMaterial";
import { useAuthComponentHook } from "hooks/authComponentHook";

const AuthComponent: FC = () => {
  // 変数
  const [signFlg, setSignFlg] = useState<boolean>(false);
  const { isLoading } = useAuthComponentHook();

  return (
    <>
      <AuthContainer>
        {isLoading ? (
          <CommonLoading size={100} />
        ) : (
          <>
            {signFlg ? <SignUp /> : <SignIn />}
            <CommonLink
              underline="hover"
              onClick={() => setSignFlg(!signFlg)}
              sx={{ marginTop: { xs: 4, md: 6 } }}
            >
              {signFlg ? "ログインはこちら" : "新規登録はこちら"}
            </CommonLink>
          </>
        )}
      </AuthContainer>
    </>
  );
};

export default AuthComponent;
