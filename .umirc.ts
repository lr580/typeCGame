import { defineConfig } from "umi";

export default defineConfig({
  base: process.env.DEPLOY_ENV === 'local' ? "/docs" : "/typeCGame",
  publicPath: process.env.DEPLOY_ENV === 'local' ? "/docs/" : "/typeCGame/",
  title: "三金打字",
  outputPath: 'docs',
  routes: [
    { path: "/", component: "App" }
  ],
  npmClient: 'yarn',
});
