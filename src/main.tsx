import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/routes.tsx";
import { RealTimeProvider } from "./shared/RealTimeProvider.tsx";

import "./index.css";
import "./shared/styles/global.css.ts";

createRoot(document.getElementById("root")!).render(
  <RealTimeProvider>
    <RouterProvider router={router} />
  </RealTimeProvider>,
);
