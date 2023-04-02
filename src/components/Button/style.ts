import styled from "styled-components";

interface ButtonProps {
    position: string;
}

export const Container = styled.div<ButtonProps>`
    width: 100%;
    display: flex;
    justify-content: ${props => props.position};
    align-items: center;
    gap: 20px
`;

export const StyledButton = styled.button`
    background: linear-gradient(90deg, rgba(125,105,158,1) 0%, rgba(127,150,182,1) 100%);
    border: none;
    width: fit-content;
    height: 50px;
    margin: 30px;
    color: white;
    font-size: 20px;
    padding: 0 20px;
    gap: 10px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    cursor: pointer;
`