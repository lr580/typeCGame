import { defineConfig } from "umi";

export default defineConfig({
  // base: "/docs", // 本地
  // publicPath: "/docs/", // 本地
  base: "/typeCGame", // githubpages
  publicPath: "/typeCGame/", // githubpages
  title: "三金打字",
  outputPath: 'docs',
  routes: [
    { path: "/", component: "App" }
  ],
  npmClient: 'yarn',
});
 