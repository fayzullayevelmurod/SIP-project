import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";
import { BrowserRouter } from "react-router-dom";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
// import { SelectedChatProvider } from "./context/SelectedChatContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Theme preset={presetGpnDefault}>
      <BrowserRouter>
        {/* <SelectedChatProvider> */}
        <App />
        {/* </SelectedChatProvider> */}
      </BrowserRouter>
    </Theme>
  </>
);
