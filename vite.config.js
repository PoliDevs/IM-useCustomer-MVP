import { defineConfig } from 'vite'
import replace from "@rollup/plugin-replace";
import svgr from "vite-plugin-svgr";
import react from '@vitejs/plugin-react'
import dotenv from "dotenv";

dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  cors: true, // HabiliCORS en el servidor de desarrollo
  build: {rollupOptions: {
    plugins: [
      // Reemplaza las variables de entorno durante la construcción
      replace({
        "process.env.REACT_APP_CLAVE_SECRETA": JSON.stringify(process.env.VITE_REACT_APP_KEY),
      }),
    ],
  },}
});
