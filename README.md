# 霍格沃茨分院系统 🏰

一个基于哈利波特世界观的魔法学院分院系统，让用户通过答题测试被分配到格兰芬多、赫奇帕奇、拉文克劳或斯莱特林学院。

## ✨ 功能特色

- 🔐 用户注册登录系统
- 👤 个人信息管理
- 🎯 每日分院测试（24小时冷却）
- 📚 魔法咒语知识库
- 🧪 魔药配方大全
- 🏠 学院信息展示
- 📜 入学通知书生成（PDF下载）
- 📱 响应式设计

## 在线体验

🌍 **访问地址**: [https://hogwarts-sorting-x4x698.surge.sh](https://hogwarts-sorting-x4x698.surge.sh)

### 🎯 快速体验
- **分院测试**: [开始分院](https://hogwarts-sorting-x4x698.surge.sh/sorting)
- **入学通知书**: [生成通知书](https://hogwarts-sorting-x4x698.surge.sh/admission-letter)
- **魔法咒语**: [探索咒语](https://hogwarts-sorting-x4x698.surge.sh/spells)
- **魔药配方**: [学习魔药](https://hogwarts-sorting-x4x698.surge.sh/potions)

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

## 🌐 部署方案

### ⚡ Surge.sh 部署（推荐 - 最简单）

#### 一键部署
```bash
# 极速部署到 Surge.sh
npm run deploy:surge
```

#### 优势
- ✅ **完全免费** - 无限制使用
- ✅ **极速部署** - 几秒钟完成
- ✅ **全球CDN** - 世界各地快速访问
- ✅ **HTTPS支持** - 自动SSL证书
- ✅ **无需注册** - 首次使用时快速注册
- ✅ **自定义域名** - 支持绑定自己的域名

> 📖 详细部署说明请查看 [SURGE_DEPLOY.md](./SURGE_DEPLOY.md)

### 🚀 腾讯云静态网站托管

#### 快速部署
```bash
# 一键部署到腾讯云
npm run deploy:tencent
```

#### 优势
- ✅ 国内访问速度快
- ✅ 免费额度充足（1GB存储 + 10GB/月流量）
- ✅ 支持自定义域名
- ✅ CDN加速
- ✅ HTTPS支持

> 📖 详细部署说明请查看 [TENCENT_DEPLOY.md](./TENCENT_DEPLOY.md)

### 📄 Gitee Pages 部署

#### 快速部署
```bash
# 构建并获取部署指导
npm run deploy:gitee
```

#### 详细步骤

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

## 🆕 入学通知书功能

### ✨ 功能特色
- **精美设计**：羊皮纸风格背景，装饰性边框，魔法元素装饰
- **个性化内容**：显示用户信息、分院结果、学院格言和颜色
- **完整格式**：遵循原著格式，包含教科书清单、装备要求等
- **高质量PDF**：支持一键生成和下载高分辨率PDF文件

### 📋 使用方法
1. 完成用户注册和分院测试
2. 访问个人资料页面或主页
3. 点击"生成入学通知书"按钮
4. 预览并下载PDF文件

详细说明请查看：[入学通知书使用指南](./ADMISSION_LETTER_GUIDE.md)

## 项目结构

```
src/
├── components/     # 可复用组件
├── pages/         # 页面组件
│   ├── AdmissionLetter.tsx  # 入学通知书页面
│   ├── SortingTest.tsx      # 分院测试页面
│   └── ...
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
