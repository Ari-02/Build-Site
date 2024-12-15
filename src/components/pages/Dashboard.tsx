import React from 'react';
import { useStore } from '../../store';
import { TaskStats } from '../dashboard/TaskStats';
import { HabitStats } from '../dashboard/HabitStats';
import { ProductivityScore } from '../dashboard/ProductivityScore';
import { TaskProgressChart } from '../dashboard/TaskProgressChart';

const Dashboard = () => {
  const { tasks, habits } = useStore();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TaskStats tasks={tasks} />
        <HabitStats habits={habits} />
        <ProductivityScore tasks={tasks} />
      </div>
      <TaskProgressChart tasks={tasks} />
    </div>
  );
};

export default Dashboard;