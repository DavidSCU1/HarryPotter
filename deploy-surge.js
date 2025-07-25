#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🚀 Surge.sh 部署助手');
console.log('='.repeat(50));

// 清理并重新构建项目
const distDir = path.join(__dirname, 'dist');
if (fs.existsSync(distDir)) {
  console.log('🧹 清理旧的构建文件...');
  fs.rmSync(distDir, { recursive: true, force: true });
}

console.log('📦 正在构建项目（Surge.sh优化）...');
try {
  // 设置环境变量确保正确的base路径
  process.env.DEPLOY_TARGET = 'surge';
  execSync('npm run build', { stdio: 'inherit', env: { ...process.env, DEPLOY_TARGET: 'surge' } });
  console.log('✅ 项目构建成功');
} catch (error) {
  console.error('❌ 项目构建失败');
  process.exit(1);
}

// 创建CNAME文件（使用固定域名）
const cnameFile = path.join(distDir, 'CNAME');
const fixedDomain = 'hogwarts-sorting-crfvyc.surge.sh';
fs.writeFileSync(cnameFile, fixedDomain);
console.log(`📝 使用固定域名: ${fixedDomain}`);

// 检查是否存在旧的CNAME文件并更新
if (fs.existsSync(cnameFile)) {
  const currentDomain = fs.readFileSync(cnameFile, 'utf8').trim();
  if (currentDomain !== fixedDomain) {
    fs.writeFileSync(cnameFile, fixedDomain);
    console.log(`🔄 更新域名从 ${currentDomain} 到 ${fixedDomain}`);
  }
}

// 读取域名
const domain = fs.readFileSync(cnameFile, 'utf8').trim();
console.log(`🌐 部署域名: ${domain}`);

try {
  console.log('🚀 正在部署到 Surge.sh...');
  
  // 切换到dist目录并部署
  process.chdir(distDir);
  execSync(`surge . ${domain}`, { stdio: 'inherit' });
  
  console.log('');
  console.log('🎉 部署成功！');
  console.log('='.repeat(50));
  console.log(`🌍 访问地址: https://${domain}`);
  console.log('');
  console.log('📋 后续操作：');
  console.log('1. 访问上述链接查看网站');
  console.log('2. 如需更新，重新运行 npm run deploy:surge');
  console.log('3. 如需删除，运行 surge teardown ' + domain);
  console.log('');
  console.log('💡 提示：');
  console.log('- Surge.sh 完全免费');
  console.log('- 支持自定义域名');
  console.log('- 全球CDN加速');
  console.log('- 无需注册即可使用');
  
} catch (error) {
  console.error('❌ 部署失败');
  console.log('');
  console.log('🔧 可能的解决方案：');
  console.log('1. 检查网络连接');
  console.log('2. 确保Surge CLI已正确安装');
  console.log('3. 尝试重新运行部署命令');
  console.log('4. 查看详细错误信息');
  process.exit(1);
}