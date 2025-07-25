# 霍格沃茨分院系统 🏰

一个基于哈利波特主题的Web应用，允许用户注册账户、填写个人信息、通过答题被分入霍格沃兹学院，并查看魔法咒语和魔药配方。

## 功能特性

- 🔐 用户注册和登录系统
- 👤 个人信息管理
- 🎯 每日分院测试（24小时冷却）
- ✨ 魔法咒语知识库
- 🧪 魔药配方大全
- 🏠 四大学院信息展示
- 📱 响应式设计
- 🌙 深色/浅色主题切换

## 技术栈

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Zustand (状态管理)
- React Router
- Lucide React (图标)
- Sonner (通知)

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 部署到GitHub Pages

### 方法一：自动部署（推荐）

1. 在GitHub上创建一个新的仓库，命名为 `HarryPotter`
2. 将本地代码推送到GitHub：

```bash
git remote add origin https://github.com/YOUR_USERNAME/HarryPotter.git
git push -u origin main
```

3. 在GitHub仓库中：
   - 进入 Settings > Pages
   - Source 选择 "GitHub Actions"
   - 代码推送后会自动触发部署

### 方法二：手动部署

```bash
# 构建项目
npm run build

# 部署到gh-pages分支
npm run deploy
```

## 访问地址

部署成功后，应用将在以下地址可用：
`https://YOUR_USERNAME.github.io/HarryPotter/`

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
