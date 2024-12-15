import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../shared/Button';
import { LogIn } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { user, signInWithGoogle } = useAuth();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
            Welcome to ProductivityMaster
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Sign in to start tracking your productivity
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <Button
            onClick={signInWithGoogle}
            icon={LogIn}
            className="w-full"
          >
            Sign in with Google
          </Button>
        </div>
      </div>
    </div>
  );
};