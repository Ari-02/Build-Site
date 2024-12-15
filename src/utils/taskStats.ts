import { Task } from '../types';

export const calculateTaskStats = (tasks: Task[]) => ({
  completed: tasks.filter((task) => task.status === 'completed').length,
  inProgress: tasks.filter((task) => task.status === 'in-progress').length,
  todo: tasks.filter((task) => task.status === 'todo').length,
});

export const calculateProductivityScore = (tasks: Task[]): number => {
  if (!tasks.length) return 0;
  return Math.round(
    (tasks.filter((task) => task.status === 'completed').length / tasks.length) * 100
  );
};