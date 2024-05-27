import { defineConfig } from "umi";

export default defineConfig({
  // base: "/docs", // 本地
  // publicPath: "/docs/", // 本地
  base: "/codeCGame", // githubpages
  publicPath: "/codeCGame/", // githubpages
  // base: "/typeCGame",
  // publicPath: "https://lr580.github.io/typeCGame/", // github page
  title: "打字练习",
  // outputPath: 'docs',
  outputPath: 'build',
  routes: [
    { path: "/", component: "App" }
  ],
  npmClient: 'yarn',
});
