import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, CheckSquare, Timer, TrendingUp, Settings, Users } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useStore } from '../../store';
import { Button } from '../shared/Button';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { user, signOut } = useAuth();
  const { theme } = useStore();

  const navItems = [
    { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/tasks', icon: CheckSquare, label: 'Tasks' },
    { to: '/habits', icon: TrendingUp, label: 'Habits' },
    { to: '/pomodoro', icon: Timer, label: 'Pomodoro' },
    { to: '/team', icon: Users, label: 'Team' },
    { to: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <nav className="bg-cyberpunk-900 text-cyberpunk-100 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-bold text-cyberpunk-accent">ProductivityMaster</span>
          <div className="hidden md:flex space-x-4">
            {navItems.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                      ? 'bg-cyberpunk-700 text-cyberpunk-accent'
                      : 'text-cyberpunk-300 hover:bg-cyberpunk-800 hover:text-cyberpunk-100'
                  }`
                }
              >
                <Icon size={16} className="mr-2" />
                {label}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <span className="text-cyberpunk-300">Welcome, {user?.displayName}</span>
          <Button
            variant="outline"
            size="sm"
            onClick={signOut}
            className="border-cyberpunk-accent text-cyberpunk-accent hover:bg-cyberpunk-accent hover:text-cyberpunk-900"
          >
            Sign Out
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

