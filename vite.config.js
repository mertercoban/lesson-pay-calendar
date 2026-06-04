import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/lesson-pay-calendar/",
  plugins: [react(), tailwindcss()],
});