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
    margin-bottom: 50px;

    ${props => props.theme.breakpoints.tablet} {
        display: none;
    }
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

    ${props => props.theme.breakpoints.tablet} {
        width: 50px;
        height: 50px;

        p {
            font-size: 20px;
        }
    }
`;

export const IconContainer = styled.div<PageProps>`
    visibility: ${props => props.isOnTheFirstPage ? 'hidden' : 'visible'}
`;

export const MobileContainer = styled(Container)`
    display: none;

    ${props => props.theme.breakpoints.tablet} {
        display: flex;
    }
`;