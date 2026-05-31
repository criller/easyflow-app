# EasyFlow App

EasyFlow App 是一个最小可运行的前后端分离示例项目：

- 前端：React + Vite
- 后端：Node.js + Express
- 前端端口：`3000`
- 后端端口：`4000`
- 前端通过环境变量 `VITE_API_URL` 调用后端 API

## 功能说明

后端提供两个基础接口：

- `GET /api/health`：返回后端健康状态
- `GET /api/message`：返回示例消息内容

前端首页会展示：

- 后端健康状态
- 后端返回的 message 内容
- 当前使用的 API 地址

## 本地启动

先启动后端：

```bash
cd backend
npm install
npm run dev
```

再打开另一个终端启动前端：

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

浏览器访问：

[http://localhost:3000](http://localhost:3000)

后端 API 地址：

[http://localhost:4000](http://localhost:4000)

## Docker 启动

在项目根目录执行：

```bash
docker compose up --build
```

启动后访问：

- 前端：[http://localhost:3000](http://localhost:3000)
- 后端：[http://localhost:4000](http://localhost:4000)

## 环境变量

前端通过 `VITE_API_URL` 访问后端。

本地开发默认配置文件：

```text
frontend/.env.example
```

默认内容：

```env
VITE_API_URL=http://localhost:4000
```

如果后端地址变化，可以复制 `.env.example` 为 `.env` 后修改：

```bash
cd frontend
cp .env.example .env
```

## 项目目录结构

```text
easyflow-app/
├── .github/
│   └── workflows/
│       └── ci.yml
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   └── server.js
│   ├── test/
│   │   └── app.test.js
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── package-lock.json
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── favicon.svg
│   ├── src/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── .env.example
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── vite.config.js
├── docker-compose.yml
├── .gitignore
├── README.md
└── README.zh-CN.md
```

## GitHub Actions

项目已包含第一个 CI 工作流：

```text
.github/workflows/ci.yml
```

该工作流会在代码 push 到 `main` 分支时自动执行：

- 安装前端依赖
- 构建前端
- 安装后端依赖
- 启动后端服务
- 检查 `/api/health` 是否能正常响应

## 常用命令

后端测试：

```bash
cd backend
npm test
```

前端构建：

```bash
cd frontend
npm run build
```

查看 Docker Compose 配置：

```bash
docker compose config
```
