import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, User, Wand2, BookOpen, Home, FileText, Lock } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { getHouseById } from '../types/houses';

const Navbar: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const userHouse = user?.house ? getHouseById(user.house) : null;

  return (
    <nav className="bg-indigo-900 bg-opacity-95 backdrop-blur-sm border-b border-yellow-400 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors">
            <Wand2 className="w-8 h-8" />
            <span className="text-xl font-bold">霍格沃兹</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="flex items-center space-x-1 text-white hover:text-yellow-400 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>首页</span>
            </Link>
            {isAuthenticated && user?.house ? (
              <>
                <Link
                  to="/spells"
                  className="flex items-center space-x-1 text-white hover:text-yellow-400 transition-colors"
                >
                  <Wand2 className="w-4 h-4" />
                  <span>魔法咒语</span>
                </Link>
                <Link
                  to="/potions"
                  className="flex items-center space-x-1 text-white hover:text-yellow-400 transition-colors"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>魔药配方</span>
                </Link>
              </>
            ) : (
              <>
                <div className="flex items-center space-x-1 text-gray-400 cursor-not-allowed relative group">
                  <Lock className="w-4 h-4" />
                  <span>魔法咒语</span>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    需要完成分院测试
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-gray-400 cursor-not-allowed relative group">
                  <Lock className="w-4 h-4" />
                  <span>魔药配方</span>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    需要完成分院测试
                  </div>
                </div>
              </>
            )}

            {isAuthenticated && (
              <Link
                to="/sorting"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                分院测试
              </Link>
            )}
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                {/* User House Badge */}
                {userHouse && (
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                      style={{ backgroundColor: userHouse.color }}
                    >
                      {userHouse.nameZh[0]}
                    </div>
                    <span className="text-white text-sm hidden sm:block">
                      {userHouse.nameZh}
                    </span>
                  </div>
                )}
                
                {/* User Menu */}
                <div className="flex items-center space-x-2">
                  <Link
                    to="/profile"
                    className="flex items-center space-x-1 text-white hover:text-yellow-400 transition-colors"
                  >
                    <User className="w-4 h-4" />
                    <span className="hidden sm:block">{user?.nickname || user?.username}</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-1 text-white hover:text-red-400 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="hidden sm:block">退出</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  登录
                </Link>
                <Link
                  to="/register"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  注册
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;