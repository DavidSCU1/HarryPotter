import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Wand2 } from 'lucide-react';
import { SORTING_QUESTIONS, getSortingResult } from '../data/sortingQuestions';
import { getHouseById } from '../types/houses';
import { useAuthStore } from '../store/authStore';
import { toast } from 'sonner';

const SortingTest: React.FC = () => {
  const navigate = useNavigate();
  const { user, setHouse, isAuthenticated } = useAuthStore();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [sortingResult, setSortingResult] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error('请先登录后再进行分院测试');
      navigate('/login');
      return;
    }

    // 检查是否今天已经进行过分院测试
    const today = new Date().toISOString().split('T')[0];
    if (user?.lastSortingDate === today) {
      toast.error('你今天已经进行过分院测试了，请明天再来！');
      navigate('/profile');
      return;
    }
  }, [isAuthenticated, user, navigate]);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption === null) {
      toast.error('请选择一个答案');
      return;
    }

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedOption;
    setAnswers(newAnswers);

    if (currentQuestion < SORTING_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(newAnswers[currentQuestion + 1] ?? null);
    } else {
      // 完成测试
      const result = getSortingResult(newAnswers);
      setSortingResult(result);
      setIsCompleted(true);
      
      // 延迟显示结果以增加仪式感
      setTimeout(() => {
        setShowResult(true);
        setHouse(result as any);
        toast.success('分院完成！欢迎加入你的学院！');
      }, 2000);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1] ?? null);
    }
  };

  const handleReturnHome = () => {
    navigate('/');
  };

  if (!isAuthenticated) {
    return null;
  }

  if (isCompleted && !showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="animate-spin w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full mx-auto mb-8"></div>
          <h2 className="text-3xl font-bold mb-4">分院帽正在思考...</h2>
          <p className="text-xl text-gray-300">请稍等，分院帽正在为你选择最合适的学院</p>
        </div>
      </div>
    );
  }

  if (showResult && sortingResult) {
    const house = getHouseById(sortingResult);
    if (!house) return null;

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 flex items-center justify-center py-12 px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20">
            <div className="mb-8">
              <div 
                className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center text-6xl font-bold text-white animate-pulse"
                style={{ backgroundColor: house.color }}
              >
                {house.nameZh[0]}
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">
                恭喜！你被分到了
              </h1>
              <h2 
                className="text-5xl font-bold mb-6"
                style={{ color: house.color }}
              >
                {house.nameZh}
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                {house.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">学院特质</h3>
                <div className="flex flex-wrap gap-2">
                  {house.traits.map((trait, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm text-white"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">著名成员</h3>
                <div className="text-sm text-gray-300">
                  {house.famousMembers.slice(0, 2).map((member, index) => (
                    <div key={index}>{member}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/profile')}
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                查看个人档案
              </button>
              <button
                onClick={handleReturnHome}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                返回首页
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = SORTING_QUESTIONS[currentQuestion];
  const progress = ((currentQuestion + 1) / SORTING_QUESTIONS.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Wand2 className="w-8 h-8 text-yellow-400 mr-2" />
            <h1 className="text-3xl font-bold text-white">霍格沃兹分院测试</h1>
          </div>
          <p className="text-gray-300">回答以下问题，分院帽将为你选择最合适的学院</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-300 mb-2">
            <span>问题 {currentQuestion + 1} / {SORTING_QUESTIONS.length}</span>
            <span>{Math.round(progress)}% 完成</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 mb-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            {question.question}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                className={`p-6 rounded-lg border-2 transition-all duration-300 text-left ${
                  selectedOption === index
                    ? 'border-yellow-400 bg-yellow-400 bg-opacity-20 text-white'
                    : 'border-white border-opacity-30 bg-white bg-opacity-10 text-gray-300 hover:border-yellow-400 hover:bg-opacity-20'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
                    selectedOption === index
                      ? 'border-yellow-400 bg-yellow-400'
                      : 'border-gray-400'
                  }`}>
                    {selectedOption === index && (
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    )}
                  </div>
                  <span className="text-lg">{option.text}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-800 disabled:text-gray-500 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>上一题</span>
          </button>
          
          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            className="flex items-center space-x-2 bg-yellow-600 hover:bg-yellow-700 disabled:bg-yellow-800 disabled:text-gray-500 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            <span>{currentQuestion === SORTING_QUESTIONS.length - 1 ? '完成测试' : '下一题'}</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortingTest;