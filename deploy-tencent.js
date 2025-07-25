#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🚀 腾讯云静态网站托管部署助手');
console.log('='.repeat(50));

// 检查是否存在配置文件
const configPath = path.join(__dirname, 'cloudbaserc.json');
if (!fs.existsSync(configPath)) {
  console.error('❌ 未找到 cloudbaserc.json 配置文件');
  console.log('请先创建配置文件，参考 TENCENT_DEPLOY.md');
  process.exit(1);
}

// 读取配置文件
let config;
try {
  config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
} catch (error) {
  console.error('❌ 配置文件格式错误:', error.message);
  process.exit(1);
}

// 检查环境ID
if (!config.envId || config.envId === '请替换为你的腾讯云环境ID') {
  console.error('❌ 请在 cloudbaserc.json 中设置正确的环境ID');
  console.log('\n📋 部署步骤：');
  console.log('1. 访问腾讯云控制台: https://console.cloud.tencent.com');
  console.log('2. 开通云开发服务');
  console.log('3. 创建环境并获取环境ID');
  console.log('4. 在 cloudbaserc.json 中替换环境ID');
  console.log('5. 重新运行部署命令');
  process.exit(1);
}

console.log('📋 部署配置信息：');
console.log(`   环境ID: ${config.envId}`);
console.log(`   输出目录: ${config.framework.inputs.outputPath}`);
console.log('');

// 检查是否安装了腾讯云CLI
try {
  execSync('tcb --version', { stdio: 'ignore' });
  console.log('✅ 腾讯云CLI已安装');
} catch (error) {
  console.log('📦 正在安装腾讯云CLI...');
  try {
    execSync('npm install -g @cloudbase/cli', { stdio: 'inherit' });
    console.log('✅ 腾讯云CLI安装成功');
  } catch (installError) {
    console.error('❌ 腾讯云CLI安装失败');
    console.log('请手动安装: npm install -g @cloudbase/cli');
    process.exit(1);
  }
}

// 构建项目
console.log('🔨 正在构建项目...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ 项目构建成功');
} catch (error) {
  console.error('❌ 项目构建失败');
  process.exit(1);
}

// 检查构建输出
const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
  console.error('❌ 构建输出目录不存在: dist/');
  process.exit(1);
}

console.log('\n🚀 开始部署到腾讯云...');
console.log('💡 如果是首次部署，请先运行: tcb login');
console.log('');

// 部署到腾讯云
try {
  const deployCommand = `tcb hosting deploy dist -e ${config.envId}`;
  console.log(`执行命令: ${deployCommand}`);
  execSync(deployCommand, { stdio: 'inherit' });
  
  console.log('');
  console.log('🎉 部署成功！');
  console.log('='.repeat(50));
  console.log('📱 访问地址：');
  console.log(`   默认域名: https://${config.envId}.tcloudbaseapp.com`);
  console.log('   自定义域名: 请在腾讯云控制台配置');
  console.log('');
  console.log('📊 查看统计: https://console.cloud.tencent.com/tcb');
  console.log('📖 详细文档: 查看 TENCENT_DEPLOY.md');
  
} catch (error) {
  console.error('❌ 部署失败');
  console.log('');
  console.log('🔧 可能的解决方案：');
  console.log('1. 运行 tcb login 登录腾讯云账号');
  console.log('2. 检查环境ID是否正确');
  console.log('3. 确保已开通静态网站托管服务');
  console.log('4. 查看详细错误信息并参考 TENCENT_DEPLOY.md');
  process.exit(1);
}