import styled from "styled-components";


export const Wrapper = styled.div`
    margin: 0 auto;
    padding: 50px 100px;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    justify-content: center;
    justify-items: stretch;

    ${props => props.theme.breakpoints.laptop} {
        padding: 25px 50px;
        gap: 40px;
    }

     ${props => props.theme.breakpoints.tablet} {
        grid-template-columns: 1fr 1fr;
        gap: 25px;
        padding: 25px;
     }

    ${props => props.theme.breakpoints.mobile} {
        grid-template-columns: 1fr;
    }
`;

export const Container = styled.div`
    border: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; 
`;

export const ButtonContainer = styled.div`
    align-self: flex-end;
`;

export const BeerImageContainer = styled.div`
    height: 200px;
    display: flex;
    justify-content: center;

    ${props => props.theme.breakpoints.tablet} {
        height: 150px;
        align-self: center;
    }
`;

export const BeerImage = styled.img`
    height: 100%;
`;
export const DecoratorDiv = styled.div`
    background-image: url('/assets/decorator.svg');
    width: 100%;
    min-height: 20px;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: contain;

    ${props => props.theme.breakpoints.mobile} {
        min-height: 15px;
    }
`;