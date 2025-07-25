# 腾讯云静态网站托管部署指南

## 🚀 快速部署步骤

### 1. 注册腾讯云账号
1. 访问 [腾讯云官网](https://cloud.tencent.com)
2. 注册账号并完成实名认证
3. 开通静态网站托管服务

### 2. 构建项目
```bash
npm run build
```

### 3. 安装腾讯云CLI工具
```bash
npm install -g @cloudbase/cli
```

### 4. 登录腾讯云
```bash
tcb login
```

### 5. 初始化云开发环境
```bash
tcb init
```

### 6. 部署到腾讯云
```bash
tcb hosting deploy dist -e 你的环境ID
```

## 📋 详细配置步骤

### 步骤1：开通云开发服务
1. 登录 [腾讯云控制台](https://console.cloud.tencent.com)
2. 搜索"云开发"并进入
3. 创建新的云开发环境
4. 选择"按量计费"模式（有免费额度）
5. 记录环境ID（后续部署需要）

### 步骤2：配置静态网站托管
1. 在云开发控制台中，点击"静态网站托管"
2. 开通静态网站托管服务
3. 获取默认域名

### 步骤3：本地配置
创建 `cloudbaserc.json` 配置文件：
```json
{
  "envId": "你的环境ID",
  "framework": {
    "name": "vite",
    "use": "@cloudbase/framework-plugin-website",
    "inputs": {
      "buildCommand": "npm run build",
      "outputPath": "dist",
      "cloudPath": "/"
    }
  }
}
```

### 步骤4：自动化部署脚本
在 `package.json` 中添加部署命令：
```json
{
  "scripts": {
    "deploy:tencent": "npm run build && tcb hosting deploy dist -e 你的环境ID"
  }
}
```

## 💰 费用说明

### 免费额度（每月）
- **存储空间**：1GB
- **CDN流量**：10GB
- **请求次数**：100万次
- **域名**：支持自定义域名

### 超出免费额度后收费
- **存储费用**：0.1元/GB/月
- **CDN流量**：0.2-0.8元/GB（根据地区）
- **请求费用**：0.01元/万次

**对于霍格沃茨分院系统，基本可以完全免费使用！**

## 🔄 更新部署

每次代码更新后：
```bash
npm run deploy:tencent
```

## 🌐 自定义域名

1. 在腾讯云控制台的"静态网站托管"中
2. 点击"设置" → "域名管理"
3. 添加自定义域名
4. 配置DNS解析（CNAME记录）
5. 申请SSL证书（免费）

## 🎯 优势

- ✅ 国内访问速度极快
- ✅ 有免费额度，小项目基本免费
- ✅ 支持自定义域名和HTTPS
- ✅ CDN加速覆盖全国
- ✅ 稳定可靠
- ✅ 支持CI/CD自动部署

## 🆘 常见问题

**Q: 如何获取环境ID？**
A: 在云开发控制台首页可以看到环境ID，格式类似 `env-xxxxxxxx`

**Q: 部署失败怎么办？**
A: 检查环境ID是否正确，确保已开通静态网站托管服务

**Q: 如何查看访问统计？**
A: 在腾讯云控制台的"静态网站托管" → "统计分析"中查看

**Q: 费用会不会很高？**
A: 对于个人项目和小型网站，基本都在免费额度内

---

🎉 部署完成后，你的霍格沃茨分院系统就可以高速访问了！

**访问地址格式：**
- 默认域名：`https://你的环境ID.tcloudbaseapp.com`
- 自定义域名：`https://你的域名.com`