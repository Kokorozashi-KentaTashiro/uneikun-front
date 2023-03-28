import { FC } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { PAGEINFOS, HOME_INFO } from "common/PAGES";
import { useHeaderHook } from "hooks/headerHook";
import {
  IconMd,
  IconXs,
  TitleTypography,
  TitleTypographyMdSx,
  TitleTypographyXsSx,
  CustomAppBar,
  HamburgerBox,
  hamburgerBoxSx,
  PagesMenuXs,
  pagesMenuXsSx,
  PagesMenuMd,
  pagesMenuMdSx,
  pagesMenuButtonMdSx,
} from "themes/headerTheme";

// Headerのテンプレート
// https://mui.com/material-ui/react-app-bar/
const Header: FC = () => {
  // ReactHook
  const {
    userInfo,
    settings,
    anchorElNav,
    anchorElUser,
    handleOpenNavMenu,
    handleOpenUserMenu,
    handleCloseNavMenu,
    handleCloseUserMenu,
    menuOnClick,
  } = useHeaderHook();
  return (
    <CustomAppBar>
      <Container maxWidth="xl" sx={{ padding: { md: 0, lg: 0 } }}>
        <Toolbar disableGutters>
          {/* Md（デスクトップサイズ） */}
          <IconMd icon="mdi:table-tennis" />
          <TitleTypography
            variant="h6"
            noWrap
            onClick={() => menuOnClick(HOME_INFO.URL)}
            sx={TitleTypographyMdSx}
          >
            運営くん
          </TitleTypography>
          <PagesMenuMd sx={pagesMenuMdSx}>
            {PAGEINFOS.map(
              (PAGEINFO) =>
                PAGEINFO.VIEW && (
                  <Button
                    key={PAGEINFO.CONTEXT}
                    onClick={() => menuOnClick(PAGEINFO.URL)}
                    sx={pagesMenuButtonMdSx}
                  >
                    {PAGEINFO.CONTEXT}
                  </Button>
                )
            )}
          </PagesMenuMd>

          {/* Xs（スマホサイズ） */}
          <HamburgerBox sx={hamburgerBoxSx}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <PagesMenuXs
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={pagesMenuXsSx}
            >
              {PAGEINFOS.map(
                (PAGEINFO) =>
                  PAGEINFO.VIEW && (
                    <MenuItem
                      key={PAGEINFO.CONTEXT}
                      onClick={() => menuOnClick(PAGEINFO.URL)}
                    >
                      <Typography textAlign="center">
                        {PAGEINFO.CONTEXT}
                      </Typography>
                    </MenuItem>
                  )
              )}
            </PagesMenuXs>
          </HamburgerBox>
          <IconXs icon="mdi:table-tennis" />
          <TitleTypography
            variant="h5"
            noWrap
            onClick={() => menuOnClick(HOME_INFO.URL)}
            sx={TitleTypographyXsSx}
          >
            運営くん
          </TitleTypography>

          {/* デスクトップ・スマホ共通 */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="設定を開く">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mr: 1.5 }}>
                <Avatar>{userInfo.firstName.charAt(0)}</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.label} onClick={setting.func}>
                  <Typography textAlign="center">{setting.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </CustomAppBar>
  );
};
export default Header;
