import { defineConfig } from "umi";

export default defineConfig({
  base: "/typeCGame",
  // publicPath: "/docs/", // 本地
  publicPath: "https://lr580.github.io/typeCGame/docs/", // github page
  title: "打字练习",
  outputPath: 'docs',
  routes: [
    { path: "/", component: "App" }
  ],
  npmClient: 'yarn',
});
