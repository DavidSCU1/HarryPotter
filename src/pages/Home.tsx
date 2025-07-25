import React from 'react';
import { Link } from 'react-router-dom';
import { Wand2, BookOpen, Users, Sparkles, FileText } from 'lucide-react';
import { getAllHouses } from '../types/houses';
import { useAuthStore } from '../store/authStore';

const Home: React.FC = () => {
  const { isAuthenticated } = useAuthStore();
  const houses = getAllHouses();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=hogwarts%20castle%20at%20night%20with%20stars%20and%20magical%20atmosphere%20dark%20fantasy%20style&image_size=landscape_16_9')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-yellow-400">
            霍格沃兹
          </h1>
          <h2 className="text-2xl md:text-4xl mb-8 font-semibold">
            分院帽在等待着你
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            踏上魔法之旅，发现你真正的归属。四个学院，四种品格，你将属于哪一个？
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isAuthenticated ? (
              <Link
                to="/sorting"
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <Wand2 className="w-6 h-6" />
                开始分院测试
              </Link>
            ) : (
              <>
                <Link
                  to="/register"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
                >
                  加入霍格沃兹
                </Link>
                <Link
                  to="/login"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
                >
                  学生登录
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Houses Section */}
      <div className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            四大学院
          </h2>
          <p className="text-xl text-center text-gray-300 mb-16">
            每个学院都有其独特的传统和价值观
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {houses.map((house) => (
              <div
                key={house.id}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 border border-white border-opacity-20"
              >
                <div 
                  className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl font-bold text-white"
                  style={{ backgroundColor: house.color }}
                >
                  {house.nameZh[0]}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {house.nameZh}
                </h3>
                <p className="text-gray-300 mb-4">
                  {house.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {house.traits.slice(0, 2).map((trait, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm text-white"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 bg-black bg-opacity-30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            探索魔法世界
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/spells"
              className="group bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 text-center hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20"
            >
              <Sparkles className="w-16 h-16 mx-auto mb-4 text-yellow-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4">魔法咒语</h3>
              <p className="text-gray-300">
                学习各种神奇的魔法咒语，掌握它们的发音和施法技巧
              </p>
            </Link>
            <Link
              to="/potions"
              className="group bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 text-center hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20"
            >
              <BookOpen className="w-16 h-16 mx-auto mb-4 text-green-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4">魔药配方</h3>
              <p className="text-gray-300">
                探索神秘的魔药世界，学习各种药剂的制作方法
              </p>
            </Link>
            
            {isAuthenticated && (
              <Link
                to="/admission-letter"
                className="group bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 text-center hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20"
              >
                <FileText className="w-16 h-16 mx-auto mb-4 text-amber-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-4">入学通知书</h3>
                <p className="text-gray-300">
                  生成您专属的霍格沃茨入学通知书PDF
                </p>
              </Link>
            )}
            <Link
              to={isAuthenticated ? "/profile" : "/register"}
              className="group bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 text-center hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20"
            >
              <Users className="w-16 h-16 mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4">个人档案</h3>
              <p className="text-gray-300">
                管理你的个人信息，查看分院历史和学院荣誉
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;