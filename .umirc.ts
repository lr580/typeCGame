import { defineConfig } from "umi";

export default defineConfig({
  base: "/docs",
  publicPath: "/docs/",
  title: "打字练习",
  outputPath: 'docs',
  routes: [
    { path: "/", component: "App" }
  ],
  npmClient: 'yarn',
});
