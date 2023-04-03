import styled from "styled-components";

interface ImageProps {
    url: string
}

export const Wrapper = styled.div`
    margin: 0 auto;
    padding: 50px 100px;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 40px;
    justify-content: center;
    justify-items: center;

    ${props => props.theme.breakpoints.mobile} {
        grid-template-columns: 1fr;
        gap: 40px;
        padding-top: 0;
    }
`;

export const ImageContainer = styled.div<ImageProps>`
    width: 100%;
    height: 100%;
    max-height: 700px;
    background-image: url( ${props => props.url});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    ${props => props.theme.breakpoints.mobile} {
        height: 500px;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const DescritpionContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 20px;
    margin-bottom: 20px;
    p{
        margin: 0 10px;
    }

    ${props => props.theme.breakpoints.laptop} {
        grid-template-columns: 1fr;
        gap: 10px;
    }
`;

export const BeerName = styled.h2`
    margin: 0;
`

export const Tagline = styled.p`
    font-style: italic;
    margin-top: 5px;
    font-size: 1.3em;
    margin-bottom: 25px;
`;
