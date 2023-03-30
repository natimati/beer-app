import styled from "styled-components";

export const SquereDiv = styled.div`
    width: 100%;
    height: 300px;
    background: linear-gradient(90deg, rgba(125,105,158,1) 0%, rgba(127,150,182,1) 100%);
    overflow: hidden;
`;

export const Trapezoid = styled.div`
    border-bottom: 0;
    border-top: 150px solid transparent;
    border-right: 100vw solid white;
    height: 0;
    z-index: 1;
    transform: translateY(150px);
`
export const HeaderContainer = styled.div`
    position: absolute;
    transform: translateY(25%);
    overflow: hidden;
    display: flex;
    justify-content: center;
    width: 100%;
    p{
        font-size: 50px;
        color: orange;
    }
`