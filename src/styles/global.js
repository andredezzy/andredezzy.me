import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #app, .container {
    height: 100%;
  }

  body {
    font: 21px 'Poppins', sans-serif;
    font-weight: 500;
    background: #F2F2F2;
    color: #707070;
    -webkit-font-smoothing: antialiased !important;
  }

  .container {
    @media (max-width: 1024px) {
      padding: 0;
      margin: 0;

      max-width: 1024px;
    }

    @media (max-width: 1200px) {
      padding: 0;
      margin: 0;

      max-width: 1200px;
    }

    @media (min-width: 1200px) {
      max-width: 1220px;
    }
  }
`;
