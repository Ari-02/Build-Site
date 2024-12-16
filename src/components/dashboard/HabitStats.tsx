import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Zap } from 'lucide-react';

export const HabitStats = ({ habits }) => {
  const totalHabits = habits.length;
  const completedToday = habits.filter(habit => habit.completedToday).length;

  return (
    <Card className="bg-cyberpunk-800 border-cyberpunk-600">
      <CardHeader>
        <CardTitle className="text-cyberpunk-accent">Habit Tracker</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Zap className="text-cyberpunk-accent mr-2" />
            <span className="text-cyberpunk-100">Total Habits: {totalHabits}</span>
          </div>
          <div className="flex items-center">
            <Zap className="text-green-500 mr-2" />
            <span className="text-cyberpunk-100">Completed Today: {completedToday}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

