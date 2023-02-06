import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    color: white;
    font-family: 'Nunito', sans-serif;
 }
 h1{
   color: #131415;
 }
 html {
    scroll-behavior: smooth;
    scroll-padding-top: 100px;
 }
 :root {
    --blue: #61dbfb;
    --black: #131415;
    --grey: #2d3640;
    --dark-blue: #0077b6;
 }
`;