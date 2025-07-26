import { useState, useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import { House } from '../types/houses';

export type HouseTheme = {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  gradient: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
  shadow: string;
  glow: string;
  pattern: string;
  animation: string;
};

const HOUSE_THEMES: Record<string, HouseTheme> = {
  gryffindor: {
    id: 'gryffindor',
    name: '格兰芬多',
    primary: '#740001',
    secondary: '#D3A625',
    accent: '#FFC500',
    background: 'from-red-900 via-red-800 to-yellow-900',
    gradient: 'bg-gradient-to-br from-red-900 via-red-800 to-yellow-900',
    textPrimary: '#FFFFFF',
    textSecondary: '#FFC500',
    border: 'border-yellow-400',
    shadow: 'shadow-red-500/50',
    glow: 'drop-shadow-[0_0_6px_rgba(255,197,0,0.3)]',
    pattern: 'bg-[radial-gradient(circle_at_50%_50%,rgba(255,197,0,0.1)_0%,transparent_50%)]',
    animation: 'animate-pulse'
  },
  slytherin: {
    id: 'slytherin',
    name: '斯莱特林',
    primary: '#1a472a',
    secondary: '#2a623d',
    accent: '#5d8a66',
    background: 'from-green-900 via-emerald-900 to-gray-900',
    gradient: 'bg-gradient-to-br from-green-900 via-emerald-900 to-gray-900',
    textPrimary: '#FFFFFF',
    textSecondary: '#5d8a66',
    border: 'border-emerald-400',
    shadow: 'shadow-emerald-500/50',
    glow: 'drop-shadow-[0_0_6px_rgba(93,138,102,0.3)]',
    pattern: 'bg-[radial-gradient(circle_at_50%_50%,rgba(93,138,102,0.1)_0%,transparent_50%)]',
    animation: 'animate-pulse'
  },
  ravenclaw: {
    id: 'ravenclaw',
    name: '拉文克劳',
    primary: '#0e1a40',
    secondary: '#222f5b',
    accent: '#5bc0de',
    background: 'from-blue-900 via-indigo-900 to-purple-900',
    gradient: 'bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900',
    textPrimary: '#FFFFFF',
    textSecondary: '#5bc0de',
    border: 'border-blue-400',
    shadow: 'shadow-blue-500/50',
    glow: 'drop-shadow-[0_0_6px_rgba(91,192,222,0.3)]',
    pattern: 'bg-[radial-gradient(circle_at_50%_50%,rgba(91,192,222,0.1)_0%,transparent_50%)]',
    animation: 'animate-pulse'
  },
  hufflepuff: {
    id: 'hufflepuff',
    name: '赫奇帕奇',
    primary: '#ecb939',
    secondary: '#f4d03f',
    accent: '#f7dc6f',
    background: 'from-yellow-600 via-yellow-700 to-amber-800',
    gradient: 'bg-gradient-to-br from-yellow-600 via-yellow-700 to-amber-800',
    textPrimary: '#000000',
    textSecondary: '#8B4513',
    border: 'border-yellow-400',
    shadow: 'shadow-yellow-500/50',
    glow: 'drop-shadow-[0_0_6px_rgba(247,220,111,0.3)]',
    pattern: 'bg-[radial-gradient(circle_at_50%_50%,rgba(247,220,111,0.1)_0%,transparent_50%)]',
    animation: 'animate-pulse'
  },
  default: {
    id: 'default',
    name: '霍格沃茨',
    primary: '#4c1d95',
    secondary: '#7c3aed',
    accent: '#a855f7',
    background: 'from-indigo-900 via-purple-900 to-blue-900',
    gradient: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900',
    textPrimary: '#FFFFFF',
    textSecondary: '#a855f7',
    border: 'border-purple-400',
    shadow: 'shadow-purple-500/50',
    glow: 'drop-shadow-[0_0_6px_rgba(168,85,247,0.3)]',
    pattern: 'bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1)_0%,transparent_50%)]',
    animation: 'animate-pulse'
  }
};

export function useHouseTheme() {
  const { user } = useAuthStore();
  const [currentTheme, setCurrentTheme] = useState<HouseTheme>(HOUSE_THEMES.default);

  useEffect(() => {
    const houseId = user?.house || 'default';
    const theme = HOUSE_THEMES[houseId] || HOUSE_THEMES.default;
    setCurrentTheme(theme);
    
    // 更新CSS变量
    const root = document.documentElement;
    root.style.setProperty('--house-primary', theme.primary);
    root.style.setProperty('--house-secondary', theme.secondary);
    root.style.setProperty('--house-accent', theme.accent);
    root.style.setProperty('--house-text-primary', theme.textPrimary);
    root.style.setProperty('--house-text-secondary', theme.textSecondary);
    
    // 添加学院主题类
    root.classList.remove('gryffindor', 'slytherin', 'ravenclaw', 'hufflepuff', 'default');
    root.classList.add(houseId);
  }, [user?.house]);

  const getThemeForHouse = (houseId: string): HouseTheme => {
    return HOUSE_THEMES[houseId] || HOUSE_THEMES.default;
  };

  return {
    currentTheme,
    getThemeForHouse,
    isHouseTheme: !!user?.house,
    houseId: user?.house || 'default'
  };
}

// 学院主题样式生成器
export const getHouseStyles = (houseId?: string) => {
  const theme = HOUSE_THEMES[houseId || 'default'] || HOUSE_THEMES.default;
  
  return {
    background: theme.gradient,
    card: `bg-gradient-to-br ${theme.background} bg-opacity-20 backdrop-blur-sm ${theme.border} border-opacity-30`,
    button: `bg-gradient-to-r from-${theme.primary} to-${theme.secondary} hover:from-${theme.secondary} hover:to-${theme.accent} ${theme.shadow}`,
    text: {
      primary: `text-${theme.textPrimary}`,
      secondary: `text-${theme.textSecondary}`,
      accent: `text-${theme.accent}`
    },
    glow: theme.glow,
    pattern: theme.pattern,
    animation: theme.animation
  };
};