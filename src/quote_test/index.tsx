import React from "react";
import ReactDOM from "react-dom/client";

import Component from "./Component";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <Component />
    </React.StrictMode>
  );
}
