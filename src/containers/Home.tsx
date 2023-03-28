import { FC } from "react";

import { Typography } from "@mui/material";
import {
  UserFlowBox,
  userFlowBoxSx,
  tournamentTypographySx,
  TournamentsButton,
  tournamentsButtonSx,
} from "themes/homeTheme";
import Layout from "../components/Layout";
import { useHomeHook } from "hooks/homeHook";
import { HOME_INFO } from "common/PAGES";

const Home: FC = () => {
  // ReactHook
  const { buttonClick } = useHomeHook();
  return (
    <>
      <Layout breadcrumbs={[HOME_INFO.CONTEXT]}>
        <UserFlowBox sx={userFlowBoxSx}>
          <Typography sx={tournamentTypographySx}>
            大会申し込みフォーム
          </Typography>
          <TournamentsButton sx={tournamentsButtonSx} onClick={buttonClick}>
            大会一覧はこちら
          </TournamentsButton>
        </UserFlowBox>
      </Layout>
    </>
  );
};

export default Home;
