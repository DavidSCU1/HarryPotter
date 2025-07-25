import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Calendar, Heart } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { useHouseTheme } from '../hooks/useHouseTheme';
import { toast } from 'sonner';

interface RegisterForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  nickname: string;
  birthday: string;
  gender: string;
  favoriteCreature: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const { currentTheme } = useHouseTheme();
  const [form, setForm] = useState<RegisterForm>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
    birthday: '',
    gender: '',
    favoriteCreature: ''
  });
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const validateStep1 = () => {
    if (!form.username.trim()) {
      toast.error('请输入用户名');
      return false;
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error('请输入有效的邮箱地址');
      return false;
    }
    if (form.password.length < 6) {
      toast.error('密码至少需要6位字符');
      return false;
    }
    if (form.password !== form.confirmPassword) {
      toast.error('两次输入的密码不一致');
      return false;
    }
    if (!form.nickname.trim()) {
      toast.error('请输入昵称');
      return false;
    }
    return true;
  };

  const handleNextStep = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 模拟注册API调用
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser = {
        id: Date.now().toString(),
        username: form.username,
        email: form.email,
        nickname: form.nickname,
        birthday: form.birthday,
        gender: form.gender,
        favoriteCreature: form.favoriteCreature
      };

      login(newUser);
      toast.success('注册成功！欢迎来到霍格沃兹！');
      navigate('/school-introduction');
    } catch (error) {
      toast.error('注册失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  const magicalCreatures = [
    '凤凰', '独角兽', '龙', '鹰头马身有翼兽', '狼人', '巨蛛', '蛇怪', '摄魂怪',
    '家养小精灵', '马人', '巨人', '妖精', '嗅嗅', '护树罗锅', '康沃尔郡小妖精'
  ];

  // 获取优雅的注册背景
  const getRegisterBackground = () => {
    return `url('https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=elegant%20hogwarts%20library%20with%20floating%20books%20magical%20atmosphere%20warm%20candlelight&image_size=landscape_16_9')`;
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center py-12 px-4 relative"
      style={{
        backgroundImage: getRegisterBackground(),
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70"></div>
      <div className="max-w-md w-full relative z-10">
        <div className="bg-white/5 backdrop-blur-xl rounded-xl p-8 border border-white/10 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white drop-shadow-lg mb-2">加入霍格沃兹</h2>
            <p className="text-gray-200">创建你的魔法师账户</p>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                step >= 1 ? 'bg-yellow-500 text-white' : 'bg-gray-600 text-gray-400'
              }`}>
                1
              </div>
              <div className={`w-16 h-1 ${
                step >= 2 ? 'bg-yellow-500' : 'bg-gray-600'
              }`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                step >= 2 ? 'bg-yellow-500 text-white' : 'bg-gray-600 text-gray-400'
              }`}>
                2
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white drop-shadow-lg mb-4">基本信息</h3>
                
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    用户名
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 w-5 h-5" />
                    <input
                      type="text"
                      name="username"
                      value={form.username}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:outline-none focus:border-white/40 text-white placeholder-gray-300"
                      placeholder="输入用户名"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    邮箱
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:outline-none focus:border-white/40 text-white placeholder-gray-300"
                      placeholder="输入邮箱地址"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    密码
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 w-5 h-5" />
                    <input
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:outline-none focus:border-white/40 text-white placeholder-gray-300"
                      placeholder="输入密码（至少6位）"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    确认密码
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 w-5 h-5" />
                    <input
                      type="password"
                      name="confirmPassword"
                      value={form.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:outline-none focus:border-white/40 text-white placeholder-gray-300"
                      placeholder="再次输入密码"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    昵称
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 w-5 h-5" />
                    <input
                      type="text"
                      name="nickname"
                      value={form.nickname}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:outline-none focus:border-white/40 text-white placeholder-gray-300"
                      placeholder="输入昵称"
                      required
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleNextStep}
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg"
                >
                  下一步
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white drop-shadow-lg mb-4">个人偏好</h3>
                
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    生日
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 w-5 h-5" />
                    <input
                      type="date"
                      name="birthday"
                      value={form.birthday}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:outline-none focus:border-white/40 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    性别
                  </label>
                  <select
                    name="gender"
                    value={form.gender}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:outline-none focus:border-white/40 text-white"
                  >
                    <option value="" className="text-gray-900">选择性别</option>
                    <option value="male" className="text-gray-900">男</option>
                    <option value="female" className="text-gray-900">女</option>
                    <option value="other" className="text-gray-900">其他</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    最喜欢的魔法生物
                  </label>
                  <div className="relative">
                    <Heart className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 w-5 h-5" />
                    <select
                      name="favoriteCreature"
                      value={form.favoriteCreature}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:outline-none focus:border-white/40 text-white"
                    >
                      <option value="" className="text-gray-900">选择你最喜欢的魔法生物</option>
                      {magicalCreatures.map((creature) => (
                        <option key={creature} value={creature} className="text-gray-900">
                          {creature}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 bg-gray-600/80 backdrop-blur-md hover:bg-gray-700/80 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 border border-white/20 shadow-lg"
                  >
                    上一步
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 disabled:from-gray-500 disabled:to-gray-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg"
                  >
                    {loading ? '注册中...' : '完成注册'}
                  </button>
                </div>
              </div>
            )}
          </form>

          <div className="mt-6 text-center">
            <p className="text-white">
              已有账户？{' '}
              <Link to="/login" className="text-blue-300 hover:text-blue-200 font-medium">
                立即登录
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;