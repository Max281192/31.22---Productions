import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rajdhani', sans-serif;
  }
  
  body{
	//background-color: lightgray;
  }

  a:link, a:visited {
    text-decoration: none;
	color: lightgray;
  }
  
  p{
	font-size: 1.2rem;
  }
`;

export default GlobalStyle;