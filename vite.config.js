import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // déploiement possible à la racine ou dans un sous-dossier (cPanel)
});
