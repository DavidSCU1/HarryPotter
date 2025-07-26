import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Star, Crown, Shield, Bird, Heart } from 'lucide-react';
import { getAllHouses } from '../types/houses';
import { useHouseTheme } from '../hooks/useHouseTheme';

interface IntroSection {
  id: string;
  title: string;
  content: string;
  image?: string;
  icon?: React.ReactNode;
}

const SchoolIntroduction: React.FC = () => {
  const navigate = useNavigate();
  const { currentTheme } = useHouseTheme();
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const houses = getAllHouses();

  const introSections: IntroSection[] = [
    {
      id: 'welcome',
      title: '欢迎来到霍格沃茨',
      content: '千年来，霍格沃茨魔法学校一直是魔法世界最负盛名的学府。在这里，年轻的巫师和女巫们将学习魔法的奥秘，发现自己的天赋，并找到属于自己的归属。',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=hogwarts%20castle%20majestic%20gothic%20architecture%20towers%20spires%20magical%20atmosphere%20sunset%20golden%20light%20detailed%20realistic&image_size=landscape_16_9',
      icon: <Crown className="w-12 h-12" />
    },
    {
      id: 'history',
      title: '千年传承',
      content: '霍格沃茨由四位伟大的巫师创立：戈德里克·格兰芬多、萨拉查·斯莱特林、罗伊纳·拉文克劳和赫尔加·赫奇帕奇。他们各自代表着不同的品质和价值观，共同创造了这座传奇的学校。',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=four%20founders%20of%20hogwarts%20medieval%20wizards%20robes%20magical%20portraits%20ancient%20hall%20candles%20mystical%20atmosphere&image_size=landscape_16_9',
      icon: <Star className="w-12 h-12" />
    },
    {
      id: 'gryffindor',
      title: '格兰芬多学院',
      content: '勇敢、胆识、骑士精神和勇气是格兰芬多学院的标志。这里培养出了无数英勇的巫师，他们敢于面对黑暗，保护正义。学院的象征是雄狮，颜色是猩红色和金色。',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=gryffindor%20common%20room%20red%20gold%20colors%20fireplace%20armchairs%20lion%20banners%20cozy%20warm%20magical%20interior&image_size=landscape_16_9',
      icon: <Shield className="w-12 h-12" />
    },
    {
      id: 'slytherin',
      title: '斯莱特林学院',
      content: '野心、狡猾、领导力和足智多谋是斯莱特林学院的特质。这里的学生具有强烈的目标意识和卓越的领导才能。学院的象征是蛇，颜色是绿色和银色。',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=slytherin%20common%20room%20green%20silver%20colors%20underwater%20dungeon%20serpent%20decorations%20mysterious%20dark%20elegant&image_size=landscape_16_9',
      icon: <Shield className="w-12 h-12" />
    },
    {
      id: 'ravenclaw',
      title: '拉文克劳学院',
      content: '智慧、学识、机智和创造力是拉文克劳学院的核心。这里聚集着最聪明的学生，他们热爱学习，追求知识，善于思考。学院的象征是鹰，颜色是蓝色和青铜色。',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=ravenclaw%20common%20room%20blue%20bronze%20colors%20tower%20library%20books%20eagle%20statue%20starry%20ceiling%20wisdom&image_size=landscape_16_9',
      icon: <Bird className="w-12 h-12" />
    },
    {
      id: 'hufflepuff',
      title: '赫奇帕奇学院',
      content: '忠诚、公正、耐心和善良是赫奇帕奇学院的品质。这里的学生重视友谊，乐于助人，具有坚韧不拔的精神。学院的象征是獾，颜色是黄色和黑色。',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=hufflepuff%20common%20room%20yellow%20black%20colors%20cozy%20plants%20badger%20decorations%20warm%20friendly%20atmosphere&image_size=landscape_16_9',
      icon: <Heart className="w-12 h-12" />
    }
  ];

  // 预加载图片
  const preloadImages = useCallback(() => {
    const loadPromises = introSections.map((section, index) => {
      return new Promise<boolean>((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = section.image || '';
      });
    });

    Promise.all(loadPromises).then(results => {
      setImagesLoaded(results);
    });
  }, []);

  useEffect(() => {
    preloadImages();
    setIsVisible(true);
    
    const timer = setInterval(() => {
      setCurrentSection(prev => {
        if (prev < introSections.length - 1) {
          return prev + 1;
        } else {
          // 延迟后自动跳转到分院测试
          setTimeout(() => {
            navigate('/sorting');
          }, 3000);
          return prev;
        }
      });
    }, 6000);

    return () => clearInterval(timer);
  }, [navigate, preloadImages]);

  const handleSkip = () => {
    navigate('/sorting');
  };

  const currentIntro = introSections[currentSection];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: `linear-gradient(135deg, ${currentTheme.gradient.replace('bg-gradient-to-br ', '').replace('from-', '').replace(' via-', ', ').replace(' to-', ', ')})`
    }}>
      {/* 背景图片 */}
      <div className="absolute inset-0">
        {introSections.map((section, index) => (
          <div
            key={section.id}
            className={`absolute inset-0 transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
              index === currentSection
                ? 'opacity-30'
                : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${section.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: index === currentSection 
                ? 'scale3d(1, 1, 1)' 
                : 'scale3d(1.05, 1.05, 1)',
              filter: imagesLoaded[index] ? 'none' : 'blur(10px)',
              willChange: 'transform, opacity'
            }}
          />
        ))}
      </div>
      
      {/* 渐变遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
      


      {/* 主要内容 */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          isVisible ? 'opacity-100 translate3d(0,0,0)' : 'opacity-0 translate3d(0,40px,0)'
        }`} style={{ willChange: 'transform, opacity' }}>
          {/* 图标 */}
          <div className="mb-8 flex justify-center">
            <div className="p-6 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl">
              <div style={{ color: currentTheme.textSecondary }}>
                {currentIntro.icon}
              </div>
            </div>
          </div>

          {/* 标题 */}
          <h1 className={`text-5xl md:text-7xl font-bold mb-8 text-white drop-shadow-lg transition-all duration-[900ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform ${
            isVisible ? 'opacity-100 translate3d(0,0,0) scale3d(1,1,1)' : 'opacity-0 translate3d(0,20px,0) scale3d(0.95,0.95,1)'
          }`} style={{ willChange: 'transform, opacity' }}>
            {currentIntro.title}
          </h1>

          {/* 内容 */}
          <p className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-100 transition-all duration-[800ms] delay-[150ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform ${
            isVisible ? 'opacity-100 translate3d(0,0,0)' : 'opacity-0 translate3d(0,20px,0)'
          }`} style={{ willChange: 'transform, opacity' }}>
            {currentIntro.content}
          </p>

          {/* 进度指示器 */}
          <div className="flex justify-center space-x-3 mb-8">
            {introSections.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  index === currentSection 
                    ? 'bg-white scale-125' 
                    : index < currentSection 
                    ? 'bg-white/60' 
                    : 'bg-white/20'
                }`}
              />
            ))}
          </div>

          {/* 跳过按钮 */}
          <button
            onClick={handleSkip}
            className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto shadow-lg"
          >
            跳过介绍，直接分院
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* 自动跳转提示 */}
          {currentSection === introSections.length - 1 && (
            <p className="mt-6 text-sm text-gray-200 opacity-70 animate-pulse">
              即将自动进入分院测试...
            </p>
          )}
        </div>
      </div>

      {/* 底部装饰 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
};

export default SchoolIntroduction;