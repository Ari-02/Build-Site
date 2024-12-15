import React from 'react';
import { StatCard } from './StatCard';
import { Task } from '../../types';
import { calculateTaskStats } from '../../utils/taskStats';

interface TaskStatsProps {
  tasks: Task[];
}

export const TaskStats: React.FC<TaskStatsProps> = ({ tasks }) => {
  const stats = calculateTaskStats(tasks);

  return (
    <StatCard title="Tasks Overview">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-400">Completed</span>
          <span className="font-semibold">{stats.completed}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-400">In Progress</span>
          <span className="font-semibold">{stats.inProgress}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-400">Todo</span>
          <span className="font-semibold">{stats.todo}</span>
        </div>
      </div>
    </StatCard>
  );
};