import { CircularProgress, Box, Container, Link } from "@mui/material";
import emotionStyled from "@emotion/styled";

// Header・Footerの高さ
// xs以上：56px
// md以上：79px

// パンくずリスト
// システム共通の部品を定義
export const BreadcrumbsBox = emotionStyled(Box)`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
width: 100%;
margin: 0;
padding: 0;
`;

export const BreadcrumbsContainer = emotionStyled(Container)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    height: 51px;
    margin-top: 79px;
    gap: 5px;
`;

export const AppContainer = emotionStyled(Box)`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    max-width: none;
    width: 100%;
    @media (max-width:599px) {
        min-height: calc(100vh - 186px);
      }
      @media (min-width:600px) {
        min-height: calc(100vh - 186px);
      }
      @media (min-width:900px) {
        min-height: calc(100vh - 209px);
    }
      @media (min-width:1200px) {
        min-height: calc(100vh - 209px);
      }
`;

export const AppBox = emotionStyled(Container)`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    width: 100%;
`;

export const CommonLoading = emotionStyled(CircularProgress)`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`;

export const CommonLink = emotionStyled(Link)`
    cursor: pointer;
`;
