import styled from "styled-components"

export const HeaderLogo = styled.div`
    width: 25%;
    color: white;
    z-index: 999;
    cursor: pointer;
    a{
        text-decoration: none;
    }
    h2{
        font-size: 2.5rem;
        color: white;
    }

    span{
        color: #75aadb;
        color: ${(props) => props.color};
    }
`