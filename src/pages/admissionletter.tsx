import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Download, Home, User } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { getHouseById } from '../types/houses';
import { useHouseTheme } from '../hooks/useHouseTheme';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const AdmissionLetter: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { currentTheme } = useHouseTheme();
  const [isGenerating, setIsGenerating] = useState(false);

  const house = user?.house ? getHouseById(user.house) : null;

  const generatePDF = async () => {
    if (!user || !house) return;

    setIsGenerating(true);
    try {
      const element = document.getElementById('admission-letter-content');
      if (!element) return;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#f8f9fa'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`霍格沃茨入学通知书-${user.username}.pdf`);
    } catch (error) {
      console.error('生成PDF时出错:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{
        background: `linear-gradient(135deg, ${currentTheme.gradient.replace('bg-gradient-to-br ', '').replace('from-', '').replace(' via-', ', ').replace(' to-', ', ')})`
      }}>
        <div className="text-center text-white">
          <User className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">请先登录</h2>
          <p className="mb-6">您需要登录才能生成入学通知书</p>
          <button
            onClick={() => navigate('/login')}
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg transition-all"
          >
            前往登录
          </button>
        </div>
      </div>
    );
  }

  if (!house) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{
        background: `linear-gradient(135deg, ${currentTheme.gradient.replace('bg-gradient-to-br ', '').replace('from-', '').replace(' via-', ', ').replace(' to-', ', ')})`
      }}>
        <div className="text-center text-white">
          <FileText className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">尚未分院</h2>
          <p className="mb-6">您需要先完成分院测试才能生成入学通知书</p>
          <button
            onClick={() => navigate('/sorting')}
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg transition-all"
          >
            开始分院测试
          </button>
        </div>
      </div>
    );
  }

  // 获取学院背景图片
  const getHouseBackgroundImage = () => {
    const houseBackgrounds = {
      'gryffindor': 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=elegant%20gryffindor%20castle%20tower%20with%20golden%20lion%20heraldry%20warm%20crimson%20and%20gold%20magical%20atmosphere&image_size=landscape_16_9',
      'slytherin': 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=elegant%20slytherin%20dungeon%20chamber%20with%20silver%20serpent%20emerald%20green%20mysterious%20magical%20atmosphere&image_size=landscape_16_9',
      'ravenclaw': 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=elegant%20ravenclaw%20tower%20library%20with%20bronze%20eagle%20blue%20and%20bronze%20scholarly%20magical%20atmosphere&image_size=landscape_16_9',
      'hufflepuff': 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=elegant%20hufflepuff%20common%20room%20with%20badger%20emblem%20yellow%20and%20black%20cozy%20magical%20atmosphere&image_size=landscape_16_9'
    };
    return houseBackgrounds[house?.id as keyof typeof houseBackgrounds] || houseBackgrounds.gryffindor;
  };

  return (
    <div className="min-h-screen py-12 px-4 relative" style={{
      background: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('${getHouseBackgroundImage()}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <FileText className="w-8 h-8 mr-2" style={{ color: currentTheme.textSecondary, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }} />
            <h1 className="text-3xl font-bold" style={{ color: currentTheme.textPrimary, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>霍格沃茨入学通知书</h1>
          </div>
          <p style={{ color: currentTheme.textPrimary, textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>生成您专属的霍格沃茨入学通知书PDF</p>
        </div>

        {/* Control Panel */}
        <div className="rounded-xl p-6 mb-8" style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          border: `2px solid ${house.color}30`,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold mb-2" style={{ color: house.color }}>
                {user.username} 的入学通知书
              </h3>
              <p className="text-gray-700">
                学院：{house.nameZh} | 生成日期：{new Date().toLocaleDateString('zh-CN')}
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={generatePDF}
                disabled={isGenerating}
                className="font-bold py-3 px-6 rounded-lg transition-all flex items-center gap-2 disabled:opacity-50"
                style={{
                  background: `linear-gradient(135deg, ${house.color}, ${house.color}dd)`,
                  color: 'white',
                  border: 'none',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                }}
              >
                <Download className="w-5 h-5" />
                {isGenerating ? '生成中...' : '下载PDF'}
              </button>
              <button
                onClick={() => navigate('/')}
                className="border-2 font-bold py-3 px-6 rounded-lg transition-all flex items-center gap-2"
                style={{
                  borderColor: house.color,
                  color: house.color,
                  backgroundColor: 'transparent'
                }}
              >
                <Home className="w-5 h-5" />
                返回首页
              </button>
            </div>
          </div>
        </div>

        {/* Letter Content */}
        <div id="admission-letter-content" className="rounded-xl p-12 shadow-2xl" style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.95))',
          backdropFilter: 'blur(15px)',
          border: `3px solid ${house.color}20`,
          fontFamily: 'serif',
          lineHeight: '1.8',
          minHeight: '800px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
        }}>
          {/* Header */}
          <div className="text-center mb-12">
            <div className="mb-6">
              <img 
                src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=hogwarts%20school%20crest%20emblem%20with%20four%20houses%20symbols%20magical%20heraldry%20style&image_size=square"
                alt="霍格沃茨校徽"
                className="w-24 h-24 mx-auto mb-4"
              />
            </div>
            <h1 className="text-4xl font-bold mb-2" style={{ color: house.color }}>霍格沃茨魔法学校</h1>
            <h2 className="text-2xl text-gray-600 mb-6">HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY</h2>
            <div className="w-32 h-1 mx-auto" style={{ backgroundColor: house.color }}></div>
          </div>

          {/* Letter Body */}
          <div className="text-gray-800 text-lg">
            <div className="mb-8">
              <p className="text-right mb-4">霍格沃茨城堡</p>
              <p className="text-right mb-8">{new Date().toLocaleDateString('zh-CN')}</p>
            </div>

            <div className="mb-8">
              <p className="mb-4">亲爱的 {user.username} 先生/女士：</p>
            </div>

            <div className="mb-8">
              <p className="mb-6 text-justify italic text-gray-700">
                "当夜幕降临，星辰闪烁之时，魔法的召唤便会响起。那些拥有纯真之心与勇敢灵魂的孩子，
                将踏上一段前所未有的奇妙旅程。"
              </p>
              
              <p className="mb-4 text-justify">
                我们怀着无比荣幸与喜悦的心情，正式通知您已被霍格沃茨魔法学校录取。这座矗立千年的古老城堡，
                将张开怀抱迎接您的到来。请于九月一日清晨，在伦敦国王十字车站寻找那神秘的9¾站台，
                搭乘传说中的霍格沃茨特快列车，踏上您的魔法求学之路。
              </p>
              
              <p className="mb-4 text-justify">
                经过拥有千年智慧的分院帽深思熟虑，您的灵魂已与 <strong style={{ color: house.color }}>{house.nameZh}</strong> 学院产生了神秘的共鸣。
                {house.nameZh}学院自古便以{house.traits.join('、')}的品质而闻名于世，这里汇聚着与您志同道合的伙伴们。
                在这个温暖的大家庭中，您将发现属于自己的光芒，在魔法学习的星辰大海中扬帆远航。
              </p>

              <p className="mb-4 text-justify">
                霍格沃茨的课程如同一幅绚烂的魔法画卷：变形术将教会您改变世界的奥秘，魔药学让您探索生命的精华，
                魔法史为您揭开古老传说的面纱，天文学引领您仰望星空寻找宇宙的真理，草药学让您聆听大自然的低语，
                黑魔法防御术赋予您守护光明的力量，而魔咒学则是您施展魔法的钥匙。我们德高望重的教授团队，
                将如慈祥的长者般引导您在知识的海洋中遨游。
              </p>

              <p className="mb-4 text-justify">
                在霍格沃茨的日子里，您将漫步于移动的楼梯间，与肖像画中的人物对话，在大礼堂的星空下用餐，
                在图书馆的书海中寻找智慧的珍珠。魁地奇球场上的呐喊声，禁林中的神秘传说，
                还有那些藏在城堡每个角落的小秘密，都将成为您青春记忆中最珍贵的片段。
              </p>

              <p className="mb-4 text-justify">
                请铭记，真正的魔法不仅存在于咒语与药剂之中，更蕴藏在友谊的温暖、勇气的光芒、
                智慧的闪耀以及善良的力量里。愿您在霍格沃茨不仅学会施展魔法，更能成为一个拥有高尚品格的巫师。
                我们期待着您在这座充满奇迹的城堡中，书写属于自己的传奇故事。
              </p>
            </div>

            {/* 入学须知 */}
            <div className="border-t-2 pt-6 mb-8" style={{ borderColor: `${house.color}40` }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: house.color }}>入学须知与准备</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                <div>
                  <h4 className="font-bold mb-3" style={{ color: house.color }}>必备物品：</h4>
                  <div className="space-y-1">
                    <p>• 魔杖一根（奥利凡德魔杖店购买）</p>
                    <p>• 标准咒语教科书（一至七年级）</p>
                    <p>• 《千种神奇草药及蕈类》</p>
                    <p>• 《魔法理论》- 阿德贝·沃夫林著</p>
                    <p>• 铜制天平一架</p>
                    <p>• 水晶瓶一套</p>
                    <p>• 望远镜一架</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-3" style={{ color: house.color }}>服装要求：</h4>
                  <div className="space-y-1">
                    <p>• 黑色长袍三件（日常穿着）</p>
                    <p>• 尖顶帽一顶（日间佩戴）</p>
                    <p>• 防护手套一双（龙皮或同类材料）</p>
                    <p>• 冬季斗篷一件（黑色，银扣）</p>
                    <p>• 学院围巾一条（入学后发放）</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 rounded-lg border-l-4" style={{ backgroundColor: `${house.color}10`, borderColor: house.color }}>
                <p className="text-sm text-gray-700 italic">
                  <strong>特别提醒：</strong>一年级新生不得携带个人飞天扫帚。宠物可选择猫头鹰、猫或蟾蜍其中之一。
                  所有物品请在对角巷购买，确保符合魔法部安全标准。
                </p>
              </div>
            </div>

            {/* 魔法寄语 */}
            <div className="border-t-2 pt-6 mb-8" style={{ borderColor: `${house.color}40` }}>
              <div className="text-center">
                <p className="mb-4 text-lg italic text-gray-600">
                  "魔法不在于你拥有多强大的力量，而在于你如何运用这份力量去照亮世界。"
                </p>
                <p className="mb-6 text-gray-700">
                  愿您在霍格沃茨的求学路上，不仅收获知识与技能，更能找到内心的勇气、智慧与善良。
                  让魔法成为您人生路上最美好的伙伴，让友谊成为您心中最珍贵的财富。
                </p>
              </div>
            </div>

            <div className="mb-8">
              <p className="mb-2">此致</p>
              <p className="mb-2">敬礼！</p>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-end">
                <div>
                  <p className="mb-2 font-bold">米勒娃·麦格教授</p>
                  <p className="mb-2 text-gray-600">副校长兼变形术教授</p>
                  <p className="mb-2 text-gray-600">霍格沃茨魔法学校</p>
                </div>
                <div className="text-right">
                  <div className="w-32 h-16 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm">
                    校长印章
                  </div>
                </div>
              </div>
            </div>

            {/* 学校历史与传统 */}
            <div className="border-t-2 pt-8 mb-8" style={{ borderColor: `${house.color}40` }}>
              <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: house.color }}>霍格沃茨千年传承</h3>
              <div className="mb-6">
                <p className="mb-4 text-justify text-gray-700">
                  霍格沃茨魔法学校始建于公元990年，由四位伟大的巫师——戈德里克·格兰芬多、萨拉查·斯莱特林、
                  罗伊纳·拉文克劳和赫尔加·赫奇帕奇共同创立。千年来，这座雄伟的城堡见证了无数魔法奇迹的诞生，
                  培养了一代又一代杰出的巫师。
                </p>
                <p className="mb-4 text-justify text-gray-700">
                  学校坐落在苏格兰高地的一片神秘土地上，被古老的魔法保护着，远离麻瓜世界的喧嚣。
                  城堡拥有142道楼梯，其中一些会在周四改变方向；肖像画中的人物可以互相串门拜访；
                  而那些调皮的幽灵们则为古老的走廊增添了别样的生机。
                </p>
              </div>
            </div>

            {/* 学院荣耀 */}
            <div className="border-t-2 pt-6 mb-8" style={{ borderColor: `${house.color}40` }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: house.color }}>{house.nameZh} 学院——您的魔法家园</h3>
              <div className="mb-6">
                <p className="mb-4 text-justify" style={{ color: '#2c1810', fontStyle: 'italic' }}>
                  "{house.description}"
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3" style={{ color: house.color }}>学院品质：</h4>
                  <div className="space-y-2">
                    {house.traits.map((trait, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: house.color }}></div>
                        <span className="text-gray-700">{trait}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-3" style={{ color: house.color }}>杰出校友：</h4>
                  <div className="space-y-2">
                    {house.famousMembers.slice(0, 3).map((member, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: house.color }}></div>
                        <span className="text-gray-700">{member}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 课程安排 */}
            <div className="border-t-2 pt-6 mb-8" style={{ borderColor: `${house.color}40` }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: house.color }}>魔法课程安排</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3" style={{ color: house.color }}>核心课程：</h4>
                  <div className="space-y-2 text-gray-700">
                    <p>• <strong>变形术</strong> - 探索物质转换的奥秘</p>
                    <p>• <strong>魔药学</strong> - 调制神奇的魔法药剂</p>
                    <p>• <strong>魔咒学</strong> - 掌握咒语的精髓</p>
                    <p>• <strong>黑魔法防御术</strong> - 学习保护自己的技能</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-3" style={{ color: house.color }}>辅助课程：</h4>
                  <div className="space-y-2 text-gray-700">
                    <p>• <strong>天文学</strong> - 仰望星空，探索宇宙</p>
                    <p>• <strong>草药学</strong> - 了解魔法植物的秘密</p>
                    <p>• <strong>魔法史</strong> - 追溯魔法世界的历史</p>
                    <p>• <strong>飞行课</strong> - 学习骑乘飞天扫帚</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 校园生活 */}
            <div className="border-t-2 pt-6 mb-8" style={{ borderColor: `${house.color}40` }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: house.color }}>丰富多彩的校园生活</h3>
              <div className="space-y-4 text-gray-700">
                <p className="text-justify">
                  <strong>魁地奇运动：</strong>作为魔法世界最受欢迎的运动，魁地奇将为您的校园生活增添无限激情。
                  每个学院都有自己的魁地奇球队，学院杯的争夺将点燃您内心的荣誉感。
                </p>
                <p className="text-justify">
                  <strong>学院活动：</strong>万圣节盛宴、圣诞舞会、学院杯竞赛等丰富活动将让您的校园时光充满欢声笑语。
                  每一个节日都有其独特的魔法仪式和传统庆祝方式。
                </p>
                <p className="text-justify">
                  <strong>课外探索：</strong>霍格莫德村的周末之旅、禁林的神秘探险（在教授陪同下）、
                  以及图书馆中那些等待被发现的古老魔法书籍，都将成为您求学路上的珍贵体验。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="rounded-xl p-6 mt-8" style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          border: `2px solid ${house.color}30`,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 className="text-xl font-bold mb-4" style={{ color: house.color }}>使用说明</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h4 className="font-bold mb-2" style={{ color: house.color }}>如何生成PDF：</h4>
              <ol className="list-decimal list-inside space-y-1">
                <li>点击上方的"下载PDF"按钮</li>
                <li>等待系统生成PDF文件</li>
                <li>文件将自动下载到您的设备</li>
              </ol>
            </div>
            <div>
              <h4 className="font-bold mb-2" style={{ color: house.color }}>注意事项：</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>请确保您已完成分院测试</li>
                <li>生成过程可能需要几秒钟时间</li>
                <li>建议使用现代浏览器以获得最佳效果</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionLetter;