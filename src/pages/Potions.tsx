import React, { useState, useMemo } from 'react';
import { Search, Filter, Beaker, Clock, Star, BookOpen } from 'lucide-react';
import { POTIONS, getPotionsByType, searchPotions, getPotionTypes, Potion } from '../data/potions';

const Potions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedPotion, setSelectedPotion] = useState<Potion | null>(null);

  const potionTypes = ['all', ...getPotionTypes()];
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced', 'expert'];

  const filteredPotions = useMemo(() => {
    let potions = searchTerm ? searchPotions(searchTerm) : POTIONS;
    
    if (selectedType !== 'all') {
      potions = getPotionsByType(selectedType as any).filter(potion => 
        searchTerm ? potions.includes(potion) : true
      );
    }
    
    if (selectedDifficulty !== 'all') {
      potions = potions.filter(potion => potion.difficulty === selectedDifficulty);
    }
    
    return potions;
  }, [searchTerm, selectedType, selectedDifficulty]);

  const getTypeColor = (type: string) => {
    const colors = {
      healing: 'bg-green-500',
      enhancement: 'bg-blue-500',
      transformation: 'bg-purple-500',
      poison: 'bg-red-500',
      utility: 'bg-yellow-500'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-500';
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      beginner: 'text-green-400',
      intermediate: 'text-yellow-400',
      advanced: 'text-orange-400',
      expert: 'text-red-400'
    };
    return colors[difficulty as keyof typeof colors] || 'text-gray-400';
  };

  const getDifficultyStars = (difficulty: string) => {
    const stars = {
      beginner: 1,
      intermediate: 2,
      advanced: 3,
      expert: 4
    };
    return stars[difficulty as keyof typeof stars] || 1;
  };

  const typeLabels = {
    all: '全部',
    healing: '治疗',
    enhancement: '增强',
    transformation: '变形',
    poison: '毒药',
    utility: '实用'
  };

  const difficultyLabels = {
    all: '全部',
    beginner: '初级',
    intermediate: '中级',
    advanced: '高级',
    expert: '专家'
  };

  const formatBrewTime = (minutes: number) => {
    if (minutes < 60) {
      return `${minutes}分钟`;
    } else if (minutes < 1440) {
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
      return remainingMinutes > 0 ? `${hours}小时${remainingMinutes}分钟` : `${hours}小时`;
    } else {
      const days = Math.floor(minutes / 1440);
      const remainingHours = Math.floor((minutes % 1440) / 60);
      return remainingHours > 0 ? `${days}天${remainingHours}小时` : `${days}天`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center">
            <Beaker className="w-12 h-12 mr-4 text-green-400" />
            魔药配方大全
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            深入斯内普教授的魔药课堂，掌握各种神奇魔药的配制方法
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl border border-white border-opacity-20 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="搜索魔药名称或效果..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            
            {/* Type Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="pl-10 pr-8 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none cursor-pointer"
              >
                {potionTypes.map(type => (
                  <option key={type} value={type} className="text-gray-900">
                    {typeLabels[type as keyof typeof typeLabels] || type}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Difficulty Filter */}
            <div className="relative">
              <Star className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="pl-10 pr-8 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none cursor-pointer"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty} className="text-gray-900">
                    {difficultyLabels[difficulty as keyof typeof difficultyLabels]}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Potions List */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPotions.map((potion) => (
                <div
                  key={potion.id}
                  onClick={() => setSelectedPotion(potion)}
                  className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl border border-white border-opacity-20 p-6 cursor-pointer hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{potion.name}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-300">
                        <Clock className="w-4 h-4" />
                        <span>{formatBrewTime(potion.brewTime)}</span>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getTypeColor(potion.type)}`}>
                      {typeLabels[potion.type as keyof typeof typeLabels] || potion.type}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{potion.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < getDifficultyStars(potion.difficulty)
                              ? getDifficultyColor(potion.difficulty)
                              : 'text-gray-600'
                          } fill-current`}
                        />
                      ))}
                      <span className={`text-sm ml-2 ${getDifficultyColor(potion.difficulty)}`}>
                        {difficultyLabels[potion.difficulty as keyof typeof difficultyLabels]}
                      </span>
                    </div>
                    <Beaker className="w-5 h-5 text-green-400" />
                  </div>
                </div>
              ))}
            </div>
            
            {filteredPotions.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">未找到相关魔药</h3>
                <p className="text-gray-400">尝试调整搜索条件或筛选器</p>
              </div>
            )}
          </div>

          {/* Potion Detail */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {selectedPotion ? (
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl border border-white border-opacity-20 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-2">{selectedPotion.name}</h2>
                      <div className="flex items-center space-x-4 mb-2">
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold text-white ${getTypeColor(selectedPotion.type)}`}>
                          {typeLabels[selectedPotion.type as keyof typeof typeLabels] || selectedPotion.type}
                        </div>
                        <div className="flex items-center space-x-1 text-gray-300">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{formatBrewTime(selectedPotion.brewTime)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">难度等级</h4>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          {[...Array(4)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < getDifficultyStars(selectedPotion.difficulty)
                                  ? getDifficultyColor(selectedPotion.difficulty)
                                  : 'text-gray-600'
                              } fill-current`}
                            />
                          ))}
                        </div>
                        <span className={`font-semibold ${getDifficultyColor(selectedPotion.difficulty)}`}>
                          {difficultyLabels[selectedPotion.difficulty as keyof typeof difficultyLabels]}
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">效果</h4>
                      <p className="text-gray-300">{selectedPotion.effect}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">详细描述</h4>
                      <p className="text-gray-300">{selectedPotion.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">所需材料</h4>
                      <ul className="text-gray-300 space-y-1">
                        {selectedPotion.ingredients.map((ingredient, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">制作步骤</h4>
                      <ol className="text-gray-300 space-y-2">
                        {selectedPotion.instructions.map((instruction, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-400 mr-2 font-semibold min-w-[1.5rem]">
                              {index + 1}.
                            </span>
                            <span>{instruction}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl border border-white border-opacity-20 p-6 text-center">
                  <Beaker className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">选择一个魔药</h3>
                  <p className="text-gray-400">点击左侧的魔药卡片查看详细配方</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Potions;