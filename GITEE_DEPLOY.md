# Gitee Pages 部署指南

## 🚀 快速部署步骤

### 1. 构建项目
```bash
npm run build
```

### 2. 执行部署脚本
```bash
npm run deploy:gitee
```

### 3. 在 Gitee 上创建仓库
1. 访问 [Gitee](https://gitee.com)
2. 点击右上角 "+" 创建新仓库
3. 仓库名建议：`hogwarts-sorting`
4. 设置为公开仓库
5. 不要初始化 README

### 4. 推送代码到 Gitee
```bash
# 初始化 Git 仓库
git init

# 添加远程仓库（替换为你的用户名）
git remote add origin https://gitee.com/你的用户名/hogwarts-sorting.git

# 添加所有文件
git add .

# 提交代码
git commit -m "霍格沃茨分院系统首次部署"

# 推送到 Gitee
git push -u origin master
```

### 5. 启用 Gitee Pages
1. 进入你的 Gitee 仓库页面
2. 点击 "服务" → "Gitee Pages"
3. 选择部署分支：`master`
4. 部署目录：`/`（根目录）
5. 点击 "启动" 按钮
6. 等待部署完成

### 6. 访问网站
部署成功后，访问地址为：
```
https://你的用户名.gitee.io/hogwarts-sorting
```

## 📝 注意事项

1. **实名认证**：Gitee Pages 需要完成实名认证才能使用
2. **更新部署**：每次代码更新后需要手动触发 Pages 重新部署
3. **访问速度**：Gitee Pages 在中国大陆访问速度很快
4. **自定义域名**：支持绑定自定义域名（需要备案）

## 🔄 更新部署

当你修改代码后，重新部署的步骤：

```bash
# 1. 重新构建
npm run deploy:gitee

# 2. 提交更新
git add .
git commit -m "更新内容描述"
git push

# 3. 在 Gitee Pages 页面点击 "更新" 按钮
```

## 🎯 优势

- ✅ 完全免费
- ✅ 中国大陆访问速度快
- ✅ 支持自定义域名
- ✅ 稳定可靠
- ✅ 无需 VPN

## 🆘 常见问题

**Q: 部署后页面显示 404？**
A: 检查 vite.config.ts 中的 base 配置是否正确设置为 `/仓库名/`

**Q: 页面样式丢失？**
A: 确保所有资源路径都是相对路径，检查构建后的文件路径

**Q: 无法访问 Gitee Pages？**
A: 确认已完成实名认证，且仓库设置为公开

---

🎉 部署完成后，你就可以分享霍格沃茨分院系统给朋友们体验了！