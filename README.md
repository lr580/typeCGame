type coding game (`typeCGame`) 三金打字 HTML 小游戏

> React hook + TS 实现 [原项目](https://github.com/webzhd/code-game)

## 改进内容

wait

## 项目运行

本机运行：

1. 安装[nodejs](https://nodejs.org/zh-cn/download/)，版本是 14 或以上 (查看 `node -v`)

2. 安装依赖

   ```sh
   npm install
   npm install --save-dev cross-env
   ```

3. 安装完成后运行：

   ```sh
   npm run start
   ```

> 或者：
>
> ```sh
> npm run build:local
> ```
>
> 然后在根目录开 live，并且在打开诸如 `http://127.0.0.1:5501/docs/` 的链接。



部署：

- 由于有 `.github\workflows\deploy.yml`，在 push 后会自动执行该文件指示的过程，可以在 github action 查看详情，其运行结果为生成 gh-pages 分支的代码文件，其内容为 `npm run build` 生成的 `docs/` 下全部内容。
- 在 github 仓库 settings 找到 pages，找到 build and deployment，source 选 deploy from a branch，其 branch 选 gh-pages，选 / (root)，点 save，那么每次该分支发生变化会自动发生 github action 重新部署。

请务必在 `.gitignore` 添加对 `docs/` 的忽略，否则部署以仓库 `docs/` 为准而不是生成的 `docs/`。

以本仓库为例，部署结果在：[https://lr580.github.io/typeCGame/](https://lr580.github.io/typeCGame/)。打开可能需要数秒时间加载。

