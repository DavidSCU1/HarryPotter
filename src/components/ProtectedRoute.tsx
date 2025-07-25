import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Lock, Home, Wand2 } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireHouse?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requireHouse = false }) => {
  const { user, isAuthenticated } = useAuthStore();

  // 如果需要登录但用户未登录，重定向到登录页
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // 如果需要分院但用户未分院，显示提示页面
  if (requireHouse && !user?.house) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white bg-opacity-10 backdrop-blur-lg rounded-xl border border-white border-opacity-20 p-8 text-center">
          <div className="mb-6">
            <Lock className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">需要完成分院</h2>
            <p className="text-gray-300">
              您需要先完成霍格沃兹分院测试，才能访问魔法咒语和魔药配方。
            </p>
          </div>
          
          <div className="space-y-4">
            <a
              href="/sorting"
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <Wand2 className="w-5 h-5" />
              <span>开始分院测试</span>
            </a>
            
            <a
              href="/"
              className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <Home className="w-5 h-5" />
              <span>返回首页</span>
            </a>
          </div>
          
          <div className="mt-6 p-4 bg-blue-500 bg-opacity-20 rounded-lg">
            <p className="text-sm text-blue-200">
              💡 提示：完成分院测试后，您将获得专属学院身份，并能够学习各种魔法咒语和魔药配方！
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;