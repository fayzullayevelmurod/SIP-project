import React from "react";
import { AppRoutes } from "./routes";
import { ShowNavProvider } from "./context/ShowNavContext";

function App() {
  return (
    <div className="wrapper">
      <ShowNavProvider>
        <AppRoutes />
      </ShowNavProvider>
    </div>
  );
}

export default App;
