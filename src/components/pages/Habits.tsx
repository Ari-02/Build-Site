import React from 'react';
import { Plus } from 'lucide-react';
import { useStore } from '../../store';
import { Button } from '../shared/Button';
import { HabitCard } from '../habits/HabitCard';

const Habits = () => {
  const { habits, updateHabit } = useStore();

  const handleHabitToggle = (habitId: string, date: Date) => {
    const habit = habits.find((h) => h.id === habitId);
    if (!habit) return;

    const dateStr = date.toISOString();
    const completedDates = habit.completedDates.some(
      (d) => d.toISOString() === dateStr
    )
      ? habit.completedDates.filter((d) => d.toISOString() !== dateStr)
      : [...habit.completedDates, date];

    updateHabit(habitId, { completedDates });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Habits</h2>
        <Button icon={Plus} onClick={() => {/* Implement add habit modal */}}>
          Add Habit
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {habits.map((habit) => (
          <HabitCard
            key={habit.id}
            habit={habit}
            onToggle={handleHabitToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Habits;