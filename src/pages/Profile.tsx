import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Edit, Calendar, Heart, User, Mail, Wand2, Trophy, FileText } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { getHouseById } from '../types/houses';
import { toast } from 'sonner';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const { user, updateUser, isAuthenticated } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    nickname: user?.nickname || '',
    bio: user?.bio || '',
    favoriteCreature: user?.favoriteCreature || ''
  });

  if (!isAuthenticated || !user) {
    navigate('/login');
    return null;
  }

  const userHouse = user.house ? getHouseById(user.house) : null;
  const canTakeTest = user.lastSortingDate !== new Date().toISOString().split('T')[0];

  const handleEditToggle = () => {
    if (isEditing) {
      // 保存更改
      updateUser(editForm);
      toast.success('个人信息已更新');
    } else {
      // 开始编辑
      setEditForm({
        nickname: user.nickname || '',
        bio: user.bio || '',
        favoriteCreature: user.favoriteCreature || ''
      });
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-CN');
  };

  const magicalCreatures = [
    '凤凰', '独角兽', '龙', '鹰头马身有翼兽', '狼人', '巨蛛', '蛇怪', '摄魂怪',
    '家养小精灵', '马人', '巨人', '妖精', '嗅嗅', '护树罗锅', '康沃尔郡小妖精'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl border border-white border-opacity-20 overflow-hidden">
          {/* Header */}
          <div className="relative p-8 pb-16">
            {userHouse && (
              <div 
                className="absolute inset-0 opacity-20"
                style={{ backgroundColor: userHouse.color }}
              ></div>
            )}
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-4xl font-bold text-white">
                    {user.nickname?.[0] || user.username[0]}
                  </div>
                  {userHouse && (
                    <div 
                      className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold border-4 border-white"
                      style={{ backgroundColor: userHouse.color }}
                    >
                      {userHouse.nameZh[0]}
                    </div>
                  )}
                </div>

                {/* User Info */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold text-white mb-2">
                        {isEditing ? (
                          <input
                            type="text"
                            name="nickname"
                            value={editForm.nickname}
                            onChange={handleInputChange}
                            className="bg-white bg-opacity-20 border border-white border-opacity-30 rounded px-3 py-1 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            placeholder="昵称"
                          />
                        ) : (
                          user.nickname || user.username
                        )}
                      </h1>
                      <p className="text-gray-300">@{user.username}</p>
                    </div>
                    <button
                      onClick={handleEditToggle}
                      className="mt-4 md:mt-0 flex items-center space-x-2 bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                      <span>{isEditing ? '保存' : '编辑'}</span>
                    </button>
                  </div>

                  {userHouse && (
                    <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                      <div 
                        className="w-6 h-6 rounded-full"
                        style={{ backgroundColor: userHouse.color }}
                      ></div>
                      <span className="text-xl font-semibold text-white">
                        {userHouse.nameZh}学院
                      </span>
                      {user.houseDate && (
                        <span className="text-gray-300 text-sm">
                          · {formatDate(user.houseDate)} 加入
                        </span>
                      )}
                    </div>
                  )}

                  <div className="text-gray-300">
                    {isEditing ? (
                      <textarea
                        name="bio"
                        value={editForm.bio}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full bg-white bg-opacity-20 border border-white border-opacity-30 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                        placeholder="介绍一下你自己..."
                      />
                    ) : (
                      <p>{user.bio || '这个人很神秘，什么都没有留下...'}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 pt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Personal Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    个人信息
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-400">邮箱</p>
                        <p className="text-white">{user.email}</p>
                      </div>
                    </div>
                    {user.birthday && (
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-400">生日</p>
                          <p className="text-white">{formatDate(user.birthday)}</p>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-400">最喜欢的魔法生物</p>
                        {isEditing ? (
                          <select
                            name="favoriteCreature"
                            value={editForm.favoriteCreature}
                            onChange={handleInputChange}
                            className="bg-white bg-opacity-20 border border-white border-opacity-30 rounded px-2 py-1 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                          >
                            <option value="" className="text-gray-900">选择魔法生物</option>
                            {magicalCreatures.map((creature) => (
                              <option key={creature} value={creature} className="text-gray-900">
                                {creature}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <p className="text-white">{user.favoriteCreature || '未设置'}</p>
                        )}
                      </div>
                    </div>
                    {user.gender && (
                      <div className="flex items-center space-x-3">
                        <User className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-400">性别</p>
                          <p className="text-white">
                            {user.gender === 'male' ? '男' : user.gender === 'female' ? '女' : '其他'}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* House Info */}
                {userHouse && (
                  <div className="bg-white bg-opacity-10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Trophy className="w-5 h-5 mr-2" />
                      学院信息
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">学院特质</h4>
                        <div className="flex flex-wrap gap-2">
                          {userHouse.traits.map((trait, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm text-white"
                            >
                              {trait}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">著名成员</h4>
                        <div className="text-sm text-gray-300 space-y-1">
                          {userHouse.famousMembers.slice(0, 3).map((member, index) => (
                            <div key={index}>• {member}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-white bg-opacity-10 rounded">
                      <p className="text-gray-300 text-sm">{userHouse.description}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="space-y-6">
                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">快速操作</h3>
                  <div className="space-y-3">
                    {!userHouse ? (
                      <button
                        onClick={() => navigate('/sorting')}
                        className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                      >
                        <Wand2 className="w-5 h-5" />
                        <span>开始分院测试</span>
                      </button>
                    ) : canTakeTest ? (
                      <div className="space-y-3">
                        <button
                          onClick={() => navigate('/sorting')}
                          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                        >
                          <Wand2 className="w-5 h-5" />
                          <span>重新分院</span>
                        </button>
                        
                        <button
                          onClick={() => navigate('/admission-letter')}
                          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                        >
                          <FileText className="w-5 h-5" />
                          <span>生成入学通知书</span>
                        </button>
                      </div>
                    ) : (
                      <div className="w-full bg-gray-600 text-white font-bold py-3 px-4 rounded-lg text-center">
                        今日已完成分院测试
                      </div>
                    )}
                    
                    <button
                      onClick={() => navigate('/spells')}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                    >
                      探索魔法咒语
                    </button>
                    
                    <button
                      onClick={() => navigate('/potions')}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                    >
                      学习魔药配方
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">统计信息</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">加入时间</span>
                      <span className="text-white">今天</span>
                    </div>
                    {user.houseDate && (
                      <div className="flex justify-between">
                        <span className="text-gray-300">分院时间</span>
                        <span className="text-white">{formatDate(user.houseDate)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-300">分院次数</span>
                      <span className="text-white">{user.house ? '1' : '0'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;