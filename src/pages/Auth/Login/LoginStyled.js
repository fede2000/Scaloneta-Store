import styled from "styled-components";

import { AuthButtonGoogle, AuthContainer, AuthEmail, AuthForm, AuthImgContainer, AuthPassword, AuthSection } from "../AuthStyles";


export const LoginSection = styled(AuthSection)`

`

export const LoginContainer = styled(AuthContainer)`

`

export const LoginImgContainer = styled(AuthImgContainer)`
`


export const Form = styled(AuthForm)`
p{
    @media (max-width: 800px){
    padding: 0;
    margin: 0;
    font-size: .8rem;
    
    }
}
`;

export const LoginPassword = styled(AuthPassword)`
    text-align: center;
`;

export const LoginButtonGoogle= styled(AuthButtonGoogle)`

`;

export const LoginEmail = styled(AuthEmail)`
`;
