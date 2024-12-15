import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useStore } from '../../store';
import { Button } from '../shared/Button';
import { HabitCard } from '../habits/HabitCard';
import { HabitModal } from '../habits/HabitModal';
import { Habit } from '../../types';

const Habits = () => {
  const { habits, addHabit, updateHabit } = useStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingHabit, setEditingHabit] = useState<Habit | null>(null);

  const handleAddHabit = (habitData: Partial<Habit>) => {
    const newHabit: Habit = {
      id: Date.now().toString(),
      title: habitData.title!,
      description: habitData.description,
      frequency: habitData.frequency || 'daily',
      streak: 0,
      startDate: new Date(),
      completedDates: [],
    };
    addHabit(newHabit);
    setIsModalOpen(false);
  };

  const handleEditHabit = (habitData: Partial<Habit>) => {
    if (editingHabit) {
      updateHabit(editingHabit.id, habitData);
      setEditingHabit(null);
    }
    setIsModalOpen(false);
  };

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
        <Button icon={Plus} onClick={() => setIsModalOpen(true)}>
          Add Habit
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {habits.map((habit) => (
          <HabitCard
            key={habit.id}
            habit={habit}
            onToggle={handleHabitToggle}
            onEdit={() => {
              setEditingHabit(habit);
              setIsModalOpen(true);
            }}
          />
        ))}
      </div>

      <HabitModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingHabit(null);
        }}
        onSubmit={editingHabit ? handleEditHabit : handleAddHabit}
        initialData={editingHabit || undefined}
      />
    </div>
  );
};

export default Habits;