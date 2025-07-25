import React, { useState, useMemo } from 'react';
import { Search, Filter, Wand2, Star, BookOpen, Zap } from 'lucide-react';
import { SPELLS, getSpellsByType, searchSpells, Spell } from '../data/spells';

const Spells: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedSpell, setSelectedSpell] = useState<Spell | null>(null);

  const spellTypes = ['all', 'attack', 'defense', 'utility', 'healing', 'transfiguration', 'charm'];
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced', 'expert'];

  const filteredSpells = useMemo(() => {
    let spells = searchTerm ? searchSpells(searchTerm) : SPELLS;
    
    if (selectedType !== 'all') {
      spells = getSpellsByType(selectedType as any).filter(spell => 
        searchTerm ? spells.includes(spell) : true
      );
    }
    
    if (selectedDifficulty !== 'all') {
      spells = spells.filter(spell => spell.difficulty === selectedDifficulty);
    }
    
    return spells;
  }, [searchTerm, selectedType, selectedDifficulty]);

  const getTypeColor = (type: string) => {
    const colors = {
      attack: 'bg-red-500',
      defense: 'bg-blue-500',
      utility: 'bg-green-500',
      healing: 'bg-pink-500',
      transfiguration: 'bg-purple-500',
      charm: 'bg-yellow-500'
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
    attack: '攻击',
    defense: '防御',
    utility: '实用',
    healing: '治疗',
    transfiguration: '变形',
    charm: '魅惑'
  };

  const difficultyLabels = {
    all: '全部',
    beginner: '初级',
    intermediate: '中级',
    advanced: '高级',
    expert: '专家'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center">
            <Wand2 className="w-12 h-12 mr-4 text-yellow-400" />
            魔法咒语大全
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            探索霍格沃兹的神秘魔法世界，学习各种强大的咒语和魔法技巧
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
                placeholder="搜索咒语名称或效果..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            
            {/* Type Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="pl-10 pr-8 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 appearance-none cursor-pointer"
              >
                {spellTypes.map(type => (
                  <option key={type} value={type} className="text-gray-900">
                    {typeLabels[type as keyof typeof typeLabels]}
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
                className="pl-10 pr-8 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 appearance-none cursor-pointer"
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
          {/* Spells List */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredSpells.map((spell) => (
                <div
                  key={spell.id}
                  onClick={() => setSelectedSpell(spell)}
                  className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl border border-white border-opacity-20 p-6 cursor-pointer hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{spell.name}</h3>
                      <p className="text-yellow-400 font-mono text-lg italic">{spell.incantation}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getTypeColor(spell.type)}`}>
                      {typeLabels[spell.type as keyof typeof typeLabels]}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{spell.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < getDifficultyStars(spell.difficulty)
                              ? getDifficultyColor(spell.difficulty)
                              : 'text-gray-600'
                          } fill-current`}
                        />
                      ))}
                      <span className={`text-sm ml-2 ${getDifficultyColor(spell.difficulty)}`}>
                        {difficultyLabels[spell.difficulty as keyof typeof difficultyLabels]}
                      </span>
                    </div>
                    <Zap className="w-5 h-5 text-yellow-400" />
                  </div>
                </div>
              ))}
            </div>
            
            {filteredSpells.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">未找到相关咒语</h3>
                <p className="text-gray-400">尝试调整搜索条件或筛选器</p>
              </div>
            )}
          </div>

          {/* Spell Detail */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {selectedSpell ? (
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl border border-white border-opacity-20 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-2">{selectedSpell.name}</h2>
                      <p className="text-yellow-400 font-mono text-xl italic mb-2">{selectedSpell.incantation}</p>
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold text-white ${getTypeColor(selectedSpell.type)}`}>
                        {typeLabels[selectedSpell.type as keyof typeof typeLabels]}
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
                                i < getDifficultyStars(selectedSpell.difficulty)
                                  ? getDifficultyColor(selectedSpell.difficulty)
                                  : 'text-gray-600'
                              } fill-current`}
                            />
                          ))}
                        </div>
                        <span className={`font-semibold ${getDifficultyColor(selectedSpell.difficulty)}`}>
                          {difficultyLabels[selectedSpell.difficulty as keyof typeof difficultyLabels]}
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">效果</h4>
                      <p className="text-gray-300">{selectedSpell.effect}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">魔杖动作</h4>
                      <p className="text-gray-300">{selectedSpell.wandMovement}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">详细描述</h4>
                      <p className="text-gray-300">{selectedSpell.description}</p>
                    </div>
                    
                    {selectedSpell.usage && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">使用场景</h4>
                        <ul className="text-gray-300 space-y-1">
                          {selectedSpell.usage.map((use, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-yellow-400 mr-2">•</span>
                              {use}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl border border-white border-opacity-20 p-6 text-center">
                  <Wand2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">选择一个咒语</h3>
                  <p className="text-gray-400">点击左侧的咒语卡片查看详细信息</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spells;