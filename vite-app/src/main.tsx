import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";

import "./index.css";

// eslint-disable-next-line ts/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
