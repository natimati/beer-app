import { createGlobalStyle } from "styled-components";

const laptopWidth = 1280;
const tabletWidth = 864;
const mobile = 580;

export const theme = {
    fontFamily: {
        mainFont: '"Roboto", sans-serif'
    },
    colors: {
        mainFontColor: '#888888',
        firstGradientColor: '#7d699e',
        secondGradientColor: '#7f96b6',
        firsUiColor: '#ffa418'
    },
    breakpoints: {
        laptop: `@media screen and (max-width: ${laptopWidth}px)`,
        tablet: `@media screen and (max-width: ${tabletWidth}px)`,
        mobile: `@media screen and (max-width: ${mobile}px)`,
    }
}

export const GlobaleStyle = createGlobalStyle`
    body {
        color: ${theme.colors.mainFontColor};
        font-family: ${theme.fontFamily.mainFont};
        font-weight: 300;
        font-size: 18px;
        ${theme.breakpoints.tablet} {
            font-size: 16px;
        }
    }
    ul {
        margin: 0;
    }
    li {
        margin: 0;
    }
`