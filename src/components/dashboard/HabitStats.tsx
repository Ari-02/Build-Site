import React from 'react';
import { StatCard } from './StatCard';
import { Habit } from '../../types';

interface HabitStatsProps {
  habits: Habit[];
}

export const HabitStats: React.FC<HabitStatsProps> = ({ habits }) => {
  return (
    <StatCard title="Active Habits">
      <p>{habits.length} habits tracked</p>
    </StatCard>
  );
};