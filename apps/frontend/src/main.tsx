import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { A, App, B } from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <A />
    <B />
  </StrictMode>
);
