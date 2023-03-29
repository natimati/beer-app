import { createGlobalStyle } from "styled-components";

export const theme = {
    fontFamily: {
        mainFont: '"Roboto", sans-serif'
    },
    colors: {
        mainFontColor: '#888888',
        firstGradientColor: '#7d699e',
        secondGradientColor: '#7f96b6',
        firsUiColor: '#ffa418'
    }
}

export const GlobaleStyle = createGlobalStyle`
    body {
        color: ${theme.colors.mainFontColor};
        font-family: ${theme.fontFamily.mainFont};
        font-weight: 400;
    }
`