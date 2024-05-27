import { defineConfig } from "umi";

export default defineConfig({
  // base: "/docs", // 本地
  // publicPath: "/docs/", // 本地
  base: "/codeCGame", // githubpages
  publicPath: "/codeCGame/", // githubpages
  title: "打字练习",
  outputPath: 'docs',
  routes: [
    { path: "/", component: "App" }
  ],
  npmClient: 'yarn',
});
 