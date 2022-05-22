import { createGlobalStyle } from "styled-components";
import { theme } from "helpers";

const GlobalStyle = createGlobalStyle`
  /**
  * Here we can add global styles using Styled-components features
  */
  body {
    padding: 0;
    background-color: ${theme("background")};
  }

  #root {
    width: 100%;
  }
`;

export default GlobalStyle;
