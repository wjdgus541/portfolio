import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
	margin: 40px 0;
	width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #FFFFFF;
  background-color: #0D1117;
  overflow-x: hidden;
}
div {
  box-sizing:border-box;
}
#root {
  width:100%;
}
ul {
  padding: 0;
}
a {
	text-decoration:none;
	color: inherit;
  box-sizing:border-box;
}
p {
  margin: 0;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
