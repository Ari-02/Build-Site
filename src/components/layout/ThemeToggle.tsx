import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useStore } from '../../store';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useStore();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-gray-100"
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
};

export default ThemeToggle;
