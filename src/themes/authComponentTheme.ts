import { Container } from "@mui/material";
import emotionStyled from "@emotion/styled";

export const AuthContainer = emotionStyled(Container)`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100vw;
`;
