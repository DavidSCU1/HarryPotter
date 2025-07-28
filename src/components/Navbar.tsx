import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, User, Wand2, BookOpen, Home, FileText, Lock, Package } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { getHouseById } from '../types/houses';
import { useHouseTheme } from '../hooks/useHouseTheme';

const Navbar: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuthStore();
  const { currentTheme } = useHouseTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const userHouse = user?.house ? getHouseById(user.house) : null;

  return (
    <nav className="house-card bg-opacity-95 backdrop-blur-sm house-border border-b sticky top-0 z-50" style={{
      background: `linear-gradient(135deg, ${currentTheme.primary}ee, ${currentTheme.secondary}ee)`
    }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 house-text-glow transition-colors" style={{
              color: currentTheme.textSecondary
            }}>
              <Wand2 className="w-8 h-8 house-glow" />
              <span className="text-xl font-bold">{currentTheme.name || '霍格沃茨'}</span>
            </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
                to="/"
                className="flex items-center space-x-1 transition-colors house-text-glow"
                style={{ color: currentTheme.textPrimary }}
              >
                <Home className="w-4 h-4" />
                <span>首页</span>
              </Link>
            {isAuthenticated && user?.house ? (
              <>
                <Link
                  to="/spells"
                  className="flex items-center space-x-1 transition-colors house-text-glow"
                  style={{ color: currentTheme.textPrimary }}
                >
                  <Wand2 className="w-4 h-4" />
                  <span>魔法咒语</span>
                </Link>
                <Link
                  to="/potions"
                  className="flex items-center space-x-1 transition-colors house-text-glow"
                  style={{ color: currentTheme.textPrimary }}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>魔药配方</span>
                </Link>
                <Link
                  to="/magical-items"
                  className="flex items-center space-x-1 transition-colors house-text-glow"
                  style={{ color: currentTheme.textPrimary }}
                >
                  <Package className="w-4 h-4" />
                  <span>魔法物品</span>
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
                <div className="flex items-center space-x-1 text-gray-400 cursor-not-allowed relative group">
                  <Lock className="w-4 h-4" />
                  <span>魔法物品</span>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    需要完成分院测试
                  </div>
                </div>
              </>
            )}

            {isAuthenticated && (
              <Link
                to="/sorting"
                className="transition-colors house-text-glow"
                style={{ color: currentTheme.textPrimary }}
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
                      className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm house-glow house-border"
                      style={{ 
                        backgroundColor: currentTheme.primary,
                        color: currentTheme.textPrimary,
                        borderWidth: '2px'
                      }}
                    >
                      {userHouse.nameZh[0]}
                    </div>
                    <span className="text-sm hidden sm:block house-text-glow" style={{ color: currentTheme.textSecondary }}>
                      {userHouse.nameZh}
                    </span>
                  </div>
                )}
                
                {/* User Menu */}
                <div className="flex items-center space-x-2">
                  <Link
                    to="/profile"
                    className="flex items-center space-x-1 transition-colors house-text-glow"
                    style={{ color: currentTheme.textPrimary }}
                  >
                    <User className="w-4 h-4" />
                    <span className="hidden sm:block">{user?.nickname || user?.username}</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-1 transition-colors hover:text-red-400"
                    style={{ color: currentTheme.textPrimary }}
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
                  className="transition-colors house-text-glow"
                  style={{ color: currentTheme.textPrimary }}
                >
                  登录
                </Link>
                <Link
                  to="/register"
                  className="house-button px-4 py-2 rounded-lg transition-all"
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