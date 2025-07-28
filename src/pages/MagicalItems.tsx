import React, { useState, useEffect } from 'react';
import { Search, Filter, Eye, Shield, Wand2, Plane, MessageCircle, Package, Gem, Gamepad2, Skull, Heart } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import {
  MAGICAL_ITEMS,
  getItemsByType,
  searchItems,
  getItemTypesWithLabels,
  getRarityLabel,
  getRarityColor,
  type MagicalItem
} from '../data/magicalItems';

const MagicalItems: React.FC = () => {
  const { user } = useAuthStore();
  const [items, setItems] = useState<MagicalItem[]>(MAGICAL_ITEMS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedItem, setSelectedItem] = useState<MagicalItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const itemTypes = getItemTypesWithLabels();

  // 根据用户学院获取背景样式
  const getHouseBackground = () => {
    if (!user?.house) return 'bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900';
    
    const houseBackgrounds = {
      gryffindor: `https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent('Gryffindor magical items library with golden red tapestries, lion emblems, sword displays, magical artifacts on wooden shelves, warm candlelight, medieval castle interior, courage and bravery theme')}&image_size=landscape_16_9`,
      slytherin: `https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent('Slytherin magical items vault with emerald green lighting, silver serpent decorations, dark magical artifacts, underground dungeon setting, mysterious atmosphere, ambitious and cunning theme')}&image_size=landscape_16_9`,
      ravenclaw: `https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent('Ravenclaw magical items study with blue bronze accents, eagle motifs, ancient books, crystal orbs, divination tools, tower library setting, wisdom and learning theme')}&image_size=landscape_16_9`,
      hufflepuff: `https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent('Hufflepuff magical items greenhouse with yellow black colors, badger symbols, healing potions, protective charms, cozy underground setting, loyalty and friendship theme')}&image_size=landscape_16_9`
    };
    
    return houseBackgrounds[user.house as keyof typeof houseBackgrounds] || houseBackgrounds.gryffindor;
  };

  // 根据用户学院获取主题色彩
  const getHouseColors = () => {
    if (!user?.house) return {
      primary: 'from-purple-600 to-blue-600',
      secondary: 'from-purple-500 to-blue-500',
      accent: 'border-purple-500',
      text: 'text-purple-300',
      bg: 'bg-purple-900/20'
    };
    
    const houseColors = {
      gryffindor: {
        primary: 'from-red-600 to-yellow-600',
        secondary: 'from-red-500 to-yellow-500',
        accent: 'border-red-500',
        text: 'text-red-300',
        bg: 'bg-red-900/20'
      },
      slytherin: {
        primary: 'from-green-600 to-gray-600',
        secondary: 'from-green-500 to-gray-500',
        accent: 'border-green-500',
        text: 'text-green-300',
        bg: 'bg-green-900/20'
      },
      ravenclaw: {
        primary: 'from-blue-600 to-purple-600',
        secondary: 'from-blue-500 to-purple-500',
        accent: 'border-blue-500',
        text: 'text-blue-300',
        bg: 'bg-blue-900/20'
      },
      hufflepuff: {
        primary: 'from-yellow-600 to-gray-600',
        secondary: 'from-yellow-500 to-gray-500',
        accent: 'border-yellow-500',
        text: 'text-yellow-300',
        bg: 'bg-yellow-900/20'
      }
    };
    
    return houseColors[user.house as keyof typeof houseColors] || houseColors.gryffindor;
  };

  const colors = getHouseColors();

  // 获取物品类型图标
  const getTypeIcon = (type: string) => {
    const icons = {
      weapon: Wand2,
      protection: Shield,
      utility: Eye,
      transportation: Plane,
      communication: MessageCircle,
      storage: Package,
      divination: Gem,
      entertainment: Gamepad2,
      dark: Skull,
      healing: Heart
    };
    const IconComponent = icons[type as keyof typeof icons] || Eye;
    return <IconComponent className="w-5 h-5" />;
  };

  // 搜索和筛选
  useEffect(() => {
    let filteredItems = MAGICAL_ITEMS;
    
    if (searchQuery) {
      filteredItems = searchItems(searchQuery);
    }
    
    if (selectedType !== 'all') {
      filteredItems = filteredItems.filter(item => item.type === selectedType);
    }
    
    setItems(filteredItems);
  }, [searchQuery, selectedType]);

  const openItemDetail = (item: MagicalItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${getHouseBackground()})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="min-h-screen bg-black/60 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          {/* 页面标题 */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              魔法物品使用指南
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              探索魔法世界中各种神奇物品的奥秘，学习它们的使用方法、效果和注意事项
            </p>
          </div>

          {/* 搜索和筛选 */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            {/* 搜索框 */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="搜索魔法物品..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border ${colors.accent} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50`}
              />
            </div>
            
            {/* 类型筛选 */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className={`pl-10 pr-8 py-3 bg-white/10 backdrop-blur-md border ${colors.accent} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none min-w-[200px]`}
              >
                <option value="all" className="bg-gray-800">所有类型</option>
                {itemTypes.map(type => (
                  <option key={type.value} value={type.value} className="bg-gray-800">
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 物品网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className={`${colors.bg} backdrop-blur-md border ${colors.accent} rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105`}
                onClick={() => openItemDetail(item)}
              >
                {/* 物品头部 */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 bg-gradient-to-r ${colors.primary} rounded-lg`}>
                      {getTypeIcon(item.type)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{item.nameZh}</h3>
                      <p className="text-sm text-gray-400">{item.name}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getRarityColor(item.rarity)} bg-white/20`}>
                    {getRarityLabel(item.rarity)}
                  </span>
                </div>

                {/* 物品信息 */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">类型:</span>
                    <span className={`text-sm ${colors.text}`}>{item.typeZh}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">来源:</span>
                    <span className="text-sm text-white truncate ml-2">{item.origin}</span>
                  </div>
                </div>

                {/* 物品描述 */}
                <p className="text-sm text-gray-300 line-clamp-3 mb-4">
                  {item.description}
                </p>

                {/* 查看详情按钮 */}
                <button className={`w-full py-2 bg-gradient-to-r ${colors.primary} text-white rounded-lg hover:opacity-90 transition-opacity font-medium`}>
                  查看详细使用指南
                </button>
              </div>
            ))}
          </div>

          {/* 无结果提示 */}
          {items.length === 0 && (
            <div className="text-center py-12">
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${colors.primary} rounded-full flex items-center justify-center`}>
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">未找到相关物品</h3>
              <p className="text-gray-400">请尝试其他搜索关键词或筛选条件</p>
            </div>
          )}
        </div>
      </div>

      {/* 详情模态框 */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className={`${colors.bg} backdrop-blur-md border ${colors.accent} rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto`}>
            {/* 模态框头部 */}
            <div className={`p-6 border-b ${colors.accent}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 bg-gradient-to-r ${colors.primary} rounded-lg`}>
                    {getTypeIcon(selectedItem.type)}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedItem.nameZh}</h2>
                    <p className="text-lg text-gray-400">{selectedItem.name}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getRarityColor(selectedItem.rarity)} bg-white/20`}>
                        {getRarityLabel(selectedItem.rarity)}
                      </span>
                      <span className={`px-3 py-1 text-sm rounded-full ${colors.text} bg-white/10`}>
                        {selectedItem.typeZh}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* 模态框内容 */}
            <div className="p-6 space-y-6">
              {/* 基本信息 */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3">基本信息</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={`p-4 bg-white/5 rounded-lg border ${colors.accent}`}>
                    <span className="text-sm text-gray-400">来源:</span>
                    <p className="text-white mt-1">{selectedItem.origin}</p>
                  </div>
                  {selectedItem.creator && (
                    <div className={`p-4 bg-white/5 rounded-lg border ${colors.accent}`}>
                      <span className="text-sm text-gray-400">制作者:</span>
                      <p className="text-white mt-1">{selectedItem.creator}</p>
                    </div>
                  )}
                  {selectedItem.location && (
                    <div className={`p-4 bg-white/5 rounded-lg border ${colors.accent}`}>
                      <span className="text-sm text-gray-400">位置:</span>
                      <p className="text-white mt-1">{selectedItem.location}</p>
                    </div>
                  )}
                  {selectedItem.materials && selectedItem.materials.length > 0 && (
                    <div className={`p-4 bg-white/5 rounded-lg border ${colors.accent}`}>
                      <span className="text-sm text-gray-400">材料:</span>
                      <p className="text-white mt-1">{selectedItem.materials.join(', ')}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* 描述 */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3">详细描述</h3>
                <div className={`p-4 bg-white/5 rounded-lg border ${colors.accent}`}>
                  <p className="text-gray-300 leading-relaxed">{selectedItem.description}</p>
                </div>
              </div>

              {/* 使用方法 */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3">使用方法</h3>
                <div className={`p-4 bg-white/5 rounded-lg border ${colors.accent}`}>
                  <ul className="space-y-2">
                    {selectedItem.usage.map((usage, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className={`w-6 h-6 rounded-full bg-gradient-to-r ${colors.primary} flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5`}>
                          {index + 1}
                        </span>
                        <span className="text-gray-300">{usage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 效果 */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3">魔法效果</h3>
                <div className={`p-4 bg-white/5 rounded-lg border ${colors.accent}`}>
                  <ul className="space-y-2">
                    {selectedItem.effects.map((effect, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.primary} flex-shrink-0 mt-2`}></span>
                        <span className="text-gray-300">{effect}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 警告和注意事项 */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3">⚠️ 警告和注意事项</h3>
                <div className="p-4 bg-red-900/20 rounded-lg border border-red-500">
                  <ul className="space-y-2">
                    {selectedItem.warnings.map((warning, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2"></span>
                        <span className="text-red-300">{warning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 历史背景 */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3">历史背景</h3>
                <div className={`p-4 bg-white/5 rounded-lg border ${colors.accent}`}>
                  <p className="text-gray-300 leading-relaxed">{selectedItem.history}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MagicalItems;