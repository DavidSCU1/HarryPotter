import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Wand2 } from 'lucide-react';
import { SORTING_QUESTIONS, getSortingResult } from '../data/sortingQuestions';
import { getHouseById } from '../types/houses';
import { useAuthStore } from '../store/authStore';
import { useHouseTheme } from '../hooks/useHouseTheme';
import { toast } from 'sonner';

// 获取分院测试背景图片
const getSortingBackground = () => {
  const prompt = "Hogwarts Great Hall interior, magical atmosphere, floating candles, house banners, ancient stone architecture, warm golden lighting, mystical ambiance, cinematic quality";
  return `https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=landscape_16_9`;
};

const SortingTest: React.FC = () => {
  const navigate = useNavigate();
  const { user, setHouse, isAuthenticated } = useAuthStore();
  const { currentTheme } = useHouseTheme();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [sortingResult, setSortingResult] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [questionTransition, setQuestionTransition] = useState(false);

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

    // 页面进入动画
    setTimeout(() => setIsVisible(true), 100);
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
      // 问题切换动画
      setQuestionTransition(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(newAnswers[currentQuestion + 1] ?? null);
        setQuestionTransition(false);
      }, 300);
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
      // 问题切换动画
      setQuestionTransition(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion - 1);
        setSelectedOption(answers[currentQuestion - 1] ?? null);
        setQuestionTransition(false);
      }, 300);
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
      <div 
        className="min-h-screen flex items-center justify-center relative"
        style={{
          background: getSortingBackground(),
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80"></div>
        <div className="text-center text-white animate-fade-in relative z-10">
          <div className="animate-spin w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full mx-auto mb-8 shadow-lg"></div>
          <h2 className="text-3xl font-bold mb-4 animate-pulse text-white drop-shadow-lg">分院帽正在思考...</h2>
          <p className="text-xl text-gray-200 animate-fade-in-delay">请稍等，分院帽正在为你选择最合适的学院</p>
          <div className="mt-8 flex justify-center space-x-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    );
  }

  if (showResult && sortingResult) {
    const house = getHouseById(sortingResult);
    if (!house) return null;

    return (
      <div 
        className="min-h-screen flex items-center justify-center py-12 px-4 relative"
        style={{
          background: getSortingBackground(),
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70"></div>
        <div className="max-w-2xl w-full text-center animate-scale-in relative z-10">
          <div className="bg-white/5 backdrop-blur-xl rounded-xl p-8 border border-white/10 shadow-2xl animate-fade-in-up">
            <div className="mb-8">
              <div 
                className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center text-6xl font-bold shadow-2xl border-4 animate-bounce-in"
                style={{ 
                  backgroundColor: currentTheme.primary,
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.3)',
                  animationDelay: '0.2s'
                }}
              >
                {house.nameZh[0]}
              </div>
              <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                恭喜！你被分到了
              </h1>
              <h2 
                className="text-5xl font-bold mb-6 animate-slide-in-right"
                style={{ color: currentTheme.textSecondary, animationDelay: '0.6s' }}
              >
                {house.nameZh}
              </h2>
              <p className="text-xl mb-8 animate-fade-in-up text-gray-200" style={{ animationDelay: '0.8s' }}>
                {house.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10 animate-slide-in-left" style={{ animationDelay: '1.0s' }}>
                <h3 className="text-lg font-semibold mb-2 text-white drop-shadow-lg">学院特质</h3>
                <div className="flex flex-wrap gap-2">
                  {house.traits.map((trait, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm shadow-lg animate-fade-in"
                      style={{
                        backgroundColor: `${currentTheme.primary}66`,
                        color: 'white',
                        animationDelay: `${1.2 + index * 0.1}s`
                      }}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10 animate-slide-in-right" style={{ animationDelay: '1.0s' }}>
                <h3 className="text-lg font-semibold mb-2 text-white drop-shadow-lg">著名成员</h3>
                <div className="text-sm text-gray-200">
                  {house.famousMembers.slice(0, 2).map((member, index) => (
                    <div key={index} className="animate-fade-in" style={{ animationDelay: `${1.4 + index * 0.2}s` }}>{member}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '1.6s' }}>
              <button
                onClick={() => navigate('/profile')}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg transform"
              >
                查看个人档案
              </button>
              <button
                onClick={() => navigate('/admission-letter')}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg transform"
              >
                生成入学通知书
              </button>
              <button
                onClick={handleReturnHome}
                className="border-2 border-white/30 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-white/10 backdrop-blur-md transform"
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
    <div 
      className={`min-h-screen py-12 px-4 transition-all duration-1000 ease-out relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{
        background: getSortingBackground(),
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-8 transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="flex items-center justify-center mb-4">
            <Wand2 className="w-8 h-8 mr-2 text-yellow-400 animate-bounce-gentle" />
            <h1 className="text-3xl font-bold text-white drop-shadow-lg">霍格沃兹分院测试</h1>
          </div>
          <p className="text-gray-200">回答以下问题，分院帽将为你选择最合适的学院</p>
        </div>

        {/* Progress Bar */}
        <div className={`mb-8 transition-all duration-800 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex justify-between text-sm mb-2 text-white">
            <span>问题 {currentQuestion + 1} / {SORTING_QUESTIONS.length}</span>
            <span>{Math.round(progress)}% 完成</span>
          </div>
          <div className="w-full rounded-full h-2 bg-white/20">
            <div 
              className="h-2 rounded-full transition-all duration-500 ease-out bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg"
              style={{ 
                width: `${progress}%`
              }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className={`bg-white/5 backdrop-blur-xl rounded-xl p-8 border border-white/10 shadow-2xl mb-8 transition-all duration-800 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${questionTransition ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
          <h2 className="text-2xl font-bold mb-8 text-center text-white drop-shadow-lg">
            {question.question}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                className={`p-6 rounded-lg border-2 transition-all duration-300 text-left transform hover:scale-105 hover:shadow-lg backdrop-blur-md ${selectedOption === index ? 'animate-pulse-gentle' : ''}`}
                style={{
                  borderColor: selectedOption === index ? currentTheme.textSecondary : 'rgba(255,255,255,0.2)',
                  backgroundColor: selectedOption === index ? `${currentTheme.primary}66` : 'rgba(255,255,255,0.05)',
                  color: 'white',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center transition-all duration-300`}
                    style={{
                      borderColor: selectedOption === index ? currentTheme.textSecondary : 'rgba(255,255,255,0.4)',
                      backgroundColor: selectedOption === index ? currentTheme.textSecondary : 'transparent'
                    }}>
                    {selectedOption === index && (
                      <div className="w-3 h-3 rounded-full animate-scale-in bg-white"></div>
                    )}
                  </div>
                  <span className="text-lg">{option.text}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className={`flex justify-between transition-all duration-800 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex items-center space-x-2 font-bold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 hover:scale-105 transform bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>上一题</span>
          </button>
          
          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            className="flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 disabled:from-gray-500 disabled:to-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 hover:scale-105 transform shadow-lg"
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