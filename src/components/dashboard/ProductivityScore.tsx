import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface Task {
  status: string;
}

interface Habit {
  completedToday: boolean;
}

interface ProductivityScoreProps {
  tasks: Task[] | null | undefined;
  habits: Habit[] | null | undefined;
}

export const ProductivityScore: React.FC<ProductivityScoreProps> = ({ tasks = [], habits = [] }) => {
  const calculateScore = () => {
    const completedTasks = tasks.filter((task) => task.status === 'completed').length;
    const completedHabits = habits.filter((habit) => habit.completedToday).length;
    const totalItems = tasks.length + habits.length;

    if (totalItems === 0) {
      return 0; // Avoid division by zero when there are no tasks or habits
    }

    return Math.round(((completedTasks + completedHabits) / totalItems) * 100);
  };

  const score = calculateScore();

  return (
    <Card className="bg-cyberpunk-800 border-cyberpunk-600">
      <CardHeader>
        <CardTitle className="text-cyberpunk-accent">Productivity Score</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div style={{ width: 200, height: 200 }}>
          <CircularProgressbar
            value={score}
            text={`${score}%`}
            styles={buildStyles({
              textColor: '#ff00ff',
              pathColor: '#ff00ff',
              trailColor: '#0a0a1e',
            })}
          />
        </div>
      </CardContent>
    </Card>
  );
};
