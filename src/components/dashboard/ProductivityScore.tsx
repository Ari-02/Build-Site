import React from 'react';
import { StatCard } from './StatCard';
import { Task } from '../../types';
import { calculateProductivityScore } from '../../utils/taskStats';

interface ProductivityScoreProps {
  tasks: Task[];
}

export const ProductivityScore: React.FC<ProductivityScoreProps> = ({ tasks }) => {
  const score = calculateProductivityScore(tasks);

  return (
    <StatCard title="Productivity Score">
      <div className="text-center">
        <p className="text-3xl font-bold text-primary-600">{score}%</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Overall Completion Rate
        </p>
      </div>
    </StatCard>
  );
};