# 霍格沃茨分院系统 🏰

一个基于哈利波特世界观的魔法学院分院系统，让用户通过答题测试被分配到格兰芬多、赫奇帕奇、拉文克劳或斯莱特林学院。

## ✨ 功能特色

- 🔐 用户注册登录系统
- 👤 个人信息管理
- 🎯 每日分院测试（24小时冷却）
- 📚 魔法咒语知识库
- 🧪 魔药配方大全
- 🏠 学院信息展示
- 📱 响应式设计

## 🚀 本地开发

1. 安装依赖：
   ```bash
   npm install
   ```

2. 启动开发服务器：
   ```bash
   npm run dev
   ```

3. 构建生产版本：
   ```bash
   npm run build
   ```

## 🌐 Gitee Pages 部署

### 快速部署
```bash
# 构建并获取部署指导
npm run deploy:gitee
```

### 详细步骤

1. **在 Gitee 创建仓库**
   - 访问 [Gitee](https://gitee.com)
   - 创建新仓库，名称：`hogwarts-sorting`
   - 设置为公开仓库

2. **推送代码**
   ```bash
   git init
   git add .
   git commit -m "霍格沃茨分院系统"
   git remote add origin https://gitee.com/你的用户名/hogwarts-sorting.git
   git push -u origin master
   ```

3. **启用 Gitee Pages**
   - 进入仓库页面
   - 点击 "服务" → "Gitee Pages"
   - 选择 master 分支，根目录部署
   - 点击 "启动"

4. **访问网站**
   ```
   https://你的用户名.gitee.io/hogwarts-sorting
   ```

> 📖 详细部署说明请查看 [GITEE_DEPLOY.md](./GITEE_DEPLOY.md)

## 🛠️ 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式框架**: Tailwind CSS
- **状态管理**: Zustand
- **路由**: React Router
- **图标**: Lucide React
- **通知**: Sonner

## 🎮 使用说明

1. **注册账户**: 填写用户名、邮箱和密码
2. **完善信息**: 设置个人资料
3. **参与分院**: 回答分院帽的问题
4. **探索魔法**: 浏览咒语和魔药知识
5. **重新分院**: 每24小时可重新测试一次

## 🏠 学院介绍

- **格兰芬多** 🦁: 勇敢、胆识、骑士精神
- **赫奇帕奇** 🦡: 忠诚、公正、勤奋
- **拉文克劳** 🦅: 智慧、学识、机智
- **斯莱特林** 🐍: 野心、狡猾、足智多谋

## 项目结构

```
src/
├── components/     # 可复用组件
├── pages/         # 页面组件
├── data/          # 静态数据
├── store/         # 状态管理
├── hooks/         # 自定义钩子
├── types/         # TypeScript类型定义
└── lib/           # 工具函数
```

## 贡献

欢迎提交Issue和Pull Request！

## 许可证

MIT License

---

*"It is our choices, Harry, that show what we truly are, far more than our abilities." - Albus Dumbledore*
