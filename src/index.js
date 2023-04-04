import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    ReactDOM.render(
    <App />, document.getElementById("root"));
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

ReactDOM.render(<Footer />, document.getElementById("footer"));
