# AI Think

使用 VitePress 构建的 AI 高质量内容库，聚焦：

- X / Twitter 一手信号
- 优秀播客深度讨论
- 经典与高价值论文

## 本地运行

```bash
npm install
npm run docs:dev
```

## 构建静态站点

```bash
npm run docs:build
npm run docs:preview
```

## Google Analytics（GA4）

1. 在本地创建 `.env.local` 并配置：

```bash
VITEPRESS_GA_ID=G-XXXXXXXXXX
```

2. 本地启动后打开页面，使用浏览器开发者工具检查是否加载 `gtag/js`。
3. GitHub Pages 部署时，在仓库 `Settings > Secrets and variables > Actions` 新增 `VITEPRESS_GA_ID`。
