import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  CheckSquare,
  Timer,
  TrendingUp,
  Settings,
  Menu,
} from 'lucide-react';

const Sidebar = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const navItems = [
    { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/tasks', icon: CheckSquare, label: 'Tasks' },
    { to: '/habits', icon: TrendingUp, label: 'Habits' },
    { to: '/pomodoro', icon: Timer, label: 'Pomodoro' },
    { to: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <aside
      className={`${
        collapsed ? 'w-16' : 'w-64'
      } bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out`}
    >
      <div className="h-full flex flex-col">
        <div className="h-16 flex items-center justify-between px-4">
          {!collapsed && (
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              ProductivityMaster
            </span>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Menu size={20} />
          </button>
        </div>
        <nav className="flex-1 px-2 py-4">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 mt-2 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
                  isActive
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200'
                    : ''
                }`
              }
            >
              <Icon size={20} />
              {!collapsed && <span className="ml-4">{label}</span>}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;