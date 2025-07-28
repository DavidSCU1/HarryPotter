import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Edit, Calendar, Heart, User, Mail, Wand2, Trophy, FileText } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { getHouseById } from '../types/houses';
import { useHouseTheme } from '../hooks/useHouseTheme';
import { toast } from 'sonner';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const { user, updateUser, isAuthenticated } = useAuthStore();
  const { currentTheme } = useHouseTheme();
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

  // 获取学院主题背景
  const getHouseBackground = () => {
    if (!userHouse) {
      return 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=hogwarts%20castle%20majestic%20gothic%20architecture%20towers%20spires%20magical%20atmosphere%20sunset%20golden%20light%20detailed%20realistic&image_size=landscape_16_9';
    }
    const houseBackgrounds = {
      gryffindor: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=elegant%20gryffindor%20tower%20interior%20with%20golden%20lion%20crest%20warm%20firelight%20cozy%20atmosphere&image_size=landscape_16_9',
      slytherin: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=elegant%20slytherin%20dungeon%20chamber%20with%20silver%20serpent%20crest%20mysterious%20green%20lighting&image_size=landscape_16_9',
      ravenclaw: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=elegant%20ravenclaw%20tower%20library%20with%20bronze%20eagle%20crest%20scholarly%20atmosphere&image_size=landscape_16_9',
      hufflepuff: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=elegant%20hufflepuff%20common%20room%20with%20badger%20crest%20warm%20yellow%20lighting%20cozy%20atmosphere&image_size=landscape_16_9'
    };
    return houseBackgrounds[userHouse.id] || houseBackgrounds.gryffindor;
  };

  return (
    <div 
      className="min-h-screen py-12 px-4 relative"
      style={{
        background: getHouseBackground(),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-white/5 backdrop-blur-xl rounded-xl overflow-hidden border border-white/10 shadow-2xl">
          {/* Header */}
          <div className="relative p-8 pb-16">
            {userHouse && (
              <div 
                className="absolute inset-0 opacity-10"
                style={{ 
                  background: `linear-gradient(135deg, ${userHouse.color}40, transparent)`
                }}
              ></div>
            )}
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center text-4xl font-bold shadow-xl" style={{
                    background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
                    color: 'white',
                    boxShadow: `0 0 30px ${currentTheme.primary}50`
                  }}>
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
                      <h1 className="text-3xl font-bold mb-2 text-white drop-shadow-lg">
                        {isEditing ? (
                          <input
                            type="text"
                            name="nickname"
                            value={editForm.nickname}
                            onChange={handleInputChange}
                            className="bg-white/10 backdrop-blur-md border border-white/20 rounded px-3 py-1 focus:outline-none focus:border-white/40 text-white placeholder-gray-300"
                            placeholder="昵称"
                          />
                        ) : (
                          user.nickname || user.username
                        )}
                      </h1>
                      <p className="text-gray-200">@{user.username}</p>
                    </div>
                    <button
                      onClick={handleEditToggle}
                      className="mt-4 md:mt-0 flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-lg"
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
                      <span className="text-xl font-semibold text-white drop-shadow-md">
                        {userHouse.nameZh}学院
                      </span>
                      {user.houseDate && (
                        <span className="text-sm text-gray-200">
                          · {formatDate(user.houseDate)} 加入
                        </span>
                      )}
                    </div>
                  )}

                  <div className="text-gray-200">
                    {isEditing ? (
                      <textarea
                        name="bio"
                        value={editForm.bio}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded px-3 py-2 focus:outline-none focus:border-white/40 resize-none text-white placeholder-gray-300"
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
                <div className="bg-white/5 backdrop-blur-xl rounded-lg p-6 border border-white/10 shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 flex items-center text-white drop-shadow-lg">
                    <User className="w-5 h-5 mr-2" />
                    个人信息
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-white" />
                      <div>
                        <p className="text-sm text-gray-200">邮箱</p>
                        <p className="text-white font-medium">{user.email}</p>
                      </div>
                    </div>
                    {user.birthday && (
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-white" />
                        <div>
                          <p className="text-sm text-gray-200">生日</p>
                          <p className="text-white font-medium">{formatDate(user.birthday)}</p>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-white" />
                      <div>
                        <p className="text-sm text-gray-200">最喜欢的魔法生物</p>
                        {isEditing ? (
                          <select
                            name="favoriteCreature"
                            value={editForm.favoriteCreature}
                            onChange={handleInputChange}
                            className="bg-white/10 backdrop-blur-md border border-white/20 rounded px-2 py-1 focus:outline-none focus:border-white/40 text-white"
                          >
                            <option value="" className="text-gray-900">选择魔法生物</option>
                            {magicalCreatures.map((creature) => (
                              <option key={creature} value={creature} className="text-gray-900">
                                {creature}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <p className="text-white font-medium">{user.favoriteCreature || '未设置'}</p>
                        )}
                      </div>
                    </div>
                    {user.gender && (
                      <div className="flex items-center space-x-3">
                        <User className="w-5 h-5 text-white" />
                        <div>
                          <p className="text-sm text-gray-200">性别</p>
                          <p className="text-white font-medium">
                            {user.gender === 'male' ? '男' : user.gender === 'female' ? '女' : '其他'}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* House Info */}
                {userHouse && (
                  <div className="bg-white/5 backdrop-blur-xl rounded-lg p-6 border border-white/10 shadow-xl">
                    <h3 className="text-xl font-semibold mb-4 flex items-center text-white drop-shadow-lg">
                      <Trophy className="w-5 h-5 mr-2" />
                      学院信息
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-white drop-shadow-md">学院特质</h4>
                        <div className="flex flex-wrap gap-2">
                          {userHouse.traits.map((trait, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
                            >
                              {trait}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-white drop-shadow-md">著名成员</h4>
                        <div className="text-sm space-y-1 text-gray-200">
                          {userHouse.famousMembers.slice(0, 3).map((member, index) => (
                            <div key={index}>• {member}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 p-4 rounded bg-white/10 backdrop-blur-md border border-white/20">
                      <p className="text-sm text-gray-200">{userHouse.description}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-xl rounded-lg p-6 border border-white/10 shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-white drop-shadow-lg">快速操作</h3>
                  <div className="space-y-3">
                    {!userHouse ? (
                      <button
                        onClick={() => navigate('/sorting')}
                        className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                      >
                        <Wand2 className="w-5 h-5" />
                        <span>开始分院测试</span>
                      </button>
                    ) : canTakeTest ? (
                      <div className="space-y-3">
                        <button
                          onClick={() => navigate('/sorting')}
                          className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                        >
                          <Wand2 className="w-5 h-5" />
                          <span>重新分院</span>
                        </button>
                        
                        <button
                          onClick={() => navigate('/admission-letter')}
                          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                        >
                          <FileText className="w-5 h-5" />
                          <span>生成入学通知书</span>
                        </button>
                      </div>
                    ) : (
                      <div className="w-full font-bold py-3 px-4 rounded-lg text-center bg-white/10 backdrop-blur-md border border-white/20 text-gray-200">
                        今日已完成分院测试
                      </div>
                    )}
                    
                    <button
                      onClick={() => navigate('/spells')}
                      className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg"
                    >
                      探索魔法咒语
                    </button>
                    
                    <button
                      onClick={() => navigate('/potions')}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg"
                    >
                      学习魔药配方
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-white/5 backdrop-blur-xl rounded-lg p-6 border border-white/10 shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-white drop-shadow-lg">统计信息</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-200">加入时间</span>
                      <span className="text-white font-medium">今天</span>
                    </div>
                    {user.houseDate && (
                      <div className="flex justify-between">
                        <span className="text-gray-200">分院时间</span>
                        <span className="text-white font-medium">{formatDate(user.houseDate)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-200">分院次数</span>
                      <span className="text-white font-medium">{user.house ? '1' : '0'}</span>
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