import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --logoBlue: #0460D9;
    --logoBlue-lighter: #2585D9;
    --logoBlue-darker: #044BD9;

    --spotlight-primary: #F2CE1B;
    --spotlight-secondary: #F26835;

    --baseColor: #A6A2A1;
    --baseColor-lighter: #e5e5e5;
    --baseColor-black: #000000;
    --baseColor-white: #ffffff;

    --ContentMainContainer: 85vh;
    
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    
  }

  body {
    background: #fff;
    color:#000000;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 16px;
  }

  h1,h2,h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;