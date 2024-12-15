import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import { format } from 'date-fns';
import { Habit } from '../../types';
import { Card } from '../shared/Card';

interface HabitCardProps {
  habit: Habit;
  onToggle: (habitId: string, date: Date) => void;
}

export const HabitCard: React.FC<HabitCardProps> = ({ habit, onToggle }) => {
  const today = new Date();
  const isCompletedToday = habit.completedDates.some(
    (date) => format(date, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd')
  );

  return (
    <Card title={habit.title}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{habit.description}</p>
          <p className="mt-2">
            <span className="font-semibold">{habit.streak}</span> day streak
          </p>
        </div>
        <button
          onClick={() => onToggle(habit.id, today)}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {isCompletedToday ? (
            <CheckCircle2 className="h-8 w-8 text-green-500" />
          ) : (
            <Circle className="h-8 w-8 text-gray-400" />
          )}
        </button>
      </div>
    </Card>
  );
};