import { ReactNode, FC } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Typography } from "@mui/material";
import {
  BreadcrumbsBox,
  BreadcrumbsContainer,
  AppContainer,
} from "common/commonMaterial";
import { HOME_INFO } from "common/PAGES";
import { SxProps, Theme } from "@mui/material/styles";

type Props = {
  breadcrumbs: string[];
  children: ReactNode;
};

const Layout: FC<Props> = (props: Props) => {
  const { breadcrumbs, children } = props;

  const getSx = () => {
    let resSx: SxProps<Theme> = {};
    if (breadcrumbs.length === 1 && breadcrumbs[0] === HOME_INFO.CONTEXT) {
      resSx = { backgroundColor: "#80a4a4" };
    } else {
      resSx = { display: "none" };
    }
    return resSx;
  };

  return (
    <>
      <Header />
      <BreadcrumbsBox sx={getSx()}>
        <BreadcrumbsContainer>
          {breadcrumbs.map((breadcrumb: string, index: number) => {
            return (
              <>
                {index !== 0 && <Typography>{">"}</Typography>}
                <Typography>{breadcrumb}</Typography>
              </>
            );
          })}
        </BreadcrumbsContainer>
      </BreadcrumbsBox>
      <AppContainer maxWidth={false}>{children}</AppContainer>
      <Footer />
    </>
  );
};

export default Layout;
