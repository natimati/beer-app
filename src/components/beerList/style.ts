import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 0 auto;
    padding: 50px 100px;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    justify-content: center;
    justify-items: center;
`;

export const Container = styled.div`
    border: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; 
    max-width: 300px;
    width: 100%;
`;

export const BeerImageContainer = styled.div`
    max-height: 200px;
    display: flex;
    justify-content: center;
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
`;