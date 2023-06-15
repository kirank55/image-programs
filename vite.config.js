import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import fs from "fs/promises";
import dotenv from "dotenv";

dotenv.config();
// https://vitejs.dev/config/

export default () => {
  // process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    define: {
      // 'process' : process,
    },
    plugins: [react()],

    server: {
      port: 3000,
    },

    resolve: {
      alias: {
        src: resolve(__dirname, "src"),
      },
    },
    esbuild: {
      loader: "jsx",
      include: /src\/.*\.jsx?$/,
      exclude: [],
    },
    optimizeDeps: {
      esbuildOptions: {
        plugins: [
          {
            name: "load-js-files-as-jsx",
            setup(build) {
              build.onLoad({ filter: /src\\.*\.js$/ }, async (args) => ({
                loader: "jsx",
                contents: await fs.readFile(args.path, "utf8"),
              }));
            },
          },
        ],
      },
    },
  });
};
