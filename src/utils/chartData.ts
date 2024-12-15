import { Task } from '../types';
import { calculateTaskStats } from './taskStats';

export const getTaskProgressData = (tasks: Task[]) => {
  const stats = calculateTaskStats(tasks);
  return [
    { name: 'Completed', value: stats.completed },
    { name: 'In Progress', value: stats.inProgress },
    { name: 'Todo', value: stats.todo },
  ];
};