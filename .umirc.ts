import { defineConfig } from "umi";

export default defineConfig({
  base: "/code-game",
  publicPath: "https://lr580.github.io/typeCGame/",
  title: "打字练习",
  outputPath: 'docs',
  routes: [
    { path: "/", component: "App" }
  ],
  npmClient: 'yarn',
});
