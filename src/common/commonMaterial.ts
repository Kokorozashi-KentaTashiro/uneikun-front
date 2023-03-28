import { CircularProgress, Box, Container, Button, Link } from "@mui/material";
import emotionStyled from "@emotion/styled";

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
    @media (min-width:600px) {
        width: 750px;
        padding: 0;
    }
`;

export const AppContainer = emotionStyled(Container)`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    min-height: calc(100vh - 209px);
    max-width: none;
    width: 100%;
    @media (min-width:600px) {
        max-width: none;
        padding: 0;
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
export const CommonButton = emotionStyled(Button)`
    text-transform: none;
    background-color: var(--primary-color);
`;
