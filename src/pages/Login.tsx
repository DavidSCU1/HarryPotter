import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { toast } from 'sonner';

interface LoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [form, setForm] = useState<LoginForm>({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.email.trim()) {
      toast.error('请输入邮箱地址');
      return;
    }
    
    if (!form.password.trim()) {
      toast.error('请输入密码');
      return;
    }

    setLoading(true);

    try {
      // 模拟登录API调用
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 模拟用户数据（实际应用中应该从服务器获取）
      const mockUser = {
        id: '1',
        username: 'demo_user',
        email: form.email,
        nickname: '魔法师',
        birthday: '1990-01-01',
        gender: 'other',
        favoriteCreature: '凤凰',
        house: 'gryffindor' as const,
        houseDate: '2024-01-01T00:00:00.000Z',
        lastSortingDate: '2024-01-01',
        bio: '一个热爱魔法的霍格沃兹学生'
      };

      login(mockUser);
      toast.success('登录成功！欢迎回到霍格沃兹！');
      navigate('/');
    } catch (error) {
      toast.error('登录失败，请检查邮箱和密码');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">欢迎回来</h2>
            <p className="text-gray-300">登录你的霍格沃兹账户</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                邮箱地址
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="输入你的邮箱地址"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                密码
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="输入你的密码"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={form.rememberMe}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-yellow-600 bg-transparent border-gray-300 rounded focus:ring-yellow-500"
                />
                <label className="ml-2 text-sm text-gray-300">
                  记住我
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm text-yellow-400 hover:text-yellow-300"
              >
                忘记密码？
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-600 hover:bg-yellow-700 disabled:bg-yellow-800 text-white font-bold py-3 px-4 rounded-lg transition-colors"
            >
              {loading ? '登录中...' : '登录'}
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-gray-400">或者</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-300">
                还没有账户？{' '}
                <Link to="/register" className="text-yellow-400 hover:text-yellow-300 font-medium">
                  立即注册
                </Link>
              </p>
            </div>
          </div>

          {/* Demo Account Info */}
          <div className="mt-6 p-4 bg-blue-900 bg-opacity-50 rounded-lg border border-blue-400 border-opacity-30">
            <h4 className="text-sm font-medium text-blue-300 mb-2">演示账户</h4>
            <p className="text-xs text-blue-200 mb-2">
              邮箱: demo@hogwarts.edu
            </p>
            <p className="text-xs text-blue-200">
              密码: 任意密码
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;