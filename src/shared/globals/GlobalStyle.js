import { createGlobalStyle } from 'styled-components';

import theme from '../../components/authForm/Theme';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${theme.color.greyLight};
    font-family: "Montserrat", sans-serif;
    height: 100vh;
  }
`;

export default GlobalStyle;