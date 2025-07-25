import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');

if (fs.existsSync(distDir)) {
  console.log('✅ 项目构建完成！');
  console.log('📁 构建文件位于 dist/ 目录');
  console.log('');
  console.log('🚀 Gitee Pages 部署步骤:');
  console.log('');
  console.log('1️⃣ 在 Gitee 创建仓库:');
  console.log('   - 访问 https://gitee.com');
  console.log('   - 创建新仓库，名称: hogwarts-sorting');
  console.log('   - 设置为公开仓库');
  console.log('');
  console.log('2️⃣ 初始化并推送代码:');
  console.log('   git init');
  console.log('   git add .');
  console.log('   git commit -m "霍格沃茨分院系统"');
  console.log('   git remote add origin https://gitee.com/你的用户名/hogwarts-sorting.git');
  console.log('   git push -u origin master');
  console.log('');
  console.log('3️⃣ 启用 Gitee Pages:');
  console.log('   - 进入仓库页面');
  console.log('   - 点击 "服务" → "Gitee Pages"');
  console.log('   - 选择 master 分支，根目录部署');
  console.log('   - 点击 "启动"');
  console.log('');
  console.log('🌐 访问地址: https://你的用户名.gitee.io/hogwarts-sorting');
  console.log('');
  console.log('📖 详细说明请查看 GITEE_DEPLOY.md 文件');
} else {
  console.error('❌ dist 目录不存在，构建可能失败了');
  console.log('请检查构建错误信息');
}