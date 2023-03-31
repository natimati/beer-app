import styled from "styled-components";

interface PageProps {
    isOnTheFirstPage: boolean
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const CurrentPage = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 10%;
    background-color: orange;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        color: white;
        font-size: 12px;
        margin: 0;
    }
`;

export const IconContainer = styled.div<PageProps>`
    visibility: ${props => props.isOnTheFirstPage ? 'hidden' : 'visible'}
`;