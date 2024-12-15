import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm ${className}`}>
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">{title}</h3>
      {children}
    </div>
  );
};