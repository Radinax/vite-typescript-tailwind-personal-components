import Loader from "./components/loader/loader";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "~/app";
import "~/main.css";

const root = document.getElementById("root");

root &&
  createRoot(root).render(
    <StrictMode>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </StrictMode>,
  );
