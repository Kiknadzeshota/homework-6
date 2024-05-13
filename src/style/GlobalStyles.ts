import { createGlobalStyle } from "styled-components";
import desktop from '../../public/images/bg-intro-desktop.png'
const GlobalStyles = createGlobalStyle`
    *{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }
    body{
        height: 100vh;
        background-image: url(${desktop});
        background-color: #FF7979;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export default GlobalStyles