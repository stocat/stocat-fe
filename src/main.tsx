import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/routes.tsx";
import { QueryProvider } from "./providers/QueryProvider.tsx";
import { AuthProvider } from "./providers/AuthProvider.tsx";

import "./shared/styles/global.css.ts";

createRoot(document.getElementById("root")!).render(
  <QueryProvider>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </QueryProvider>,
);
