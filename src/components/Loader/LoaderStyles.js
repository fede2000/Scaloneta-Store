import styled from "styled-components";

export const LoaderWrapper = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.7);
    z-index: 9;
`

export const Loader = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
`