import { createRoot } from "react-dom/client";
import { Providers } from "./providers/Providers";
import { AppLayout } from "./layout/AppLayout";
import "./index.css";

const theme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const activeTheme = theme || (prefersDark ? "dark" : "light");

document.documentElement.classList.toggle("dark", activeTheme === "dark");
localStorage.setItem("theme", activeTheme);

createRoot(document.getElementById("root")).render(
  <Providers>
    <AppLayout />
  </Providers>,
);
