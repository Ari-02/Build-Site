import React from 'react';
import { Bell, Sun, Moon, LogOut } from 'lucide-react';
import { useStore } from '../../store';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../shared/Button';

const Header = () => {
  const { theme, toggleTheme } = useStore();
  const { user, signOut } = useAuth();

  return (
    <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="h-full px-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            Welcome, {user?.displayName}
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            <Bell size={20} />
          </button>
          <Button
            variant="secondary"
            icon={LogOut}
            onClick={signOut}
          >
            Sign Out
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;