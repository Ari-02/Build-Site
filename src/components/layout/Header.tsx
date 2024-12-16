import React from 'react';
import { Bell, Sun, Moon, LogOut, Users } from 'lucide-react';
import { useStore } from '../../store';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/button';
import { useTeam } from '../../lib/hooks/useTeam';
import Link from 'next/link';

const Header = () => {
  const { theme, toggleTheme } = useStore();
  const { user, signOut } = useAuth();
  const { team } = useTeam();

  return (
    <header className="h-16 bg-cyberpunk-800 border-b border-cyberpunk-600">
      <div className="h-full px-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-cyberpunk-accent">
            Welcome, {user?.displayName}
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-cyberpunk-700 text-cyberpunk-300 hover:text-cyberpunk-accent"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="p-2 rounded-lg hover:bg-cyberpunk-700 text-cyberpunk-300 hover:text-cyberpunk-accent">
            <Bell size={20} />
          </button>
          {team ? (
            <Link href="/team" passHref>
              <Button variant="outline" className="border-cyberpunk-accent text-cyberpunk-accent hover:bg-cyberpunk-700">
                <Users size={20} className="mr-2" />
                Team
              </Button>
            </Link>
          ) : (
            <Link href="/create-team" passHref>
              <Button variant="outline" className="border-cyberpunk-accent text-cyberpunk-accent hover:bg-cyberpunk-700">
                <Users size={20} className="mr-2" />
                Create Team
              </Button>
            </Link>
          )}
          <Button
            variant="secondary"
            className="bg-cyberpunk-accent text-cyberpunk-900 hover:bg-cyberpunk-600"
            onClick={signOut}
          >
            <LogOut size={20} className="mr-2" />
            Sign Out
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
