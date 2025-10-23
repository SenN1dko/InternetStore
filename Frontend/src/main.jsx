import { createRoot } from "react-dom/client";
import { Providers } from "./providers/Providers";
import { AppLayout } from "./layout/AppLayout";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Providers>
    <AppLayout />
  </Providers>,
);
