import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { CheckCircle, Circle, XCircle } from 'lucide-react';

export const TaskStats = ({ tasks }) => {
  const completedTasks = tasks.filter(task => task.status === 'completed').length;
  const inProgressTasks = tasks.filter(task => task.status === 'in-progress').length;
  const pendingTasks = tasks.filter(task => task.status === 'pending').length;

  return (
    <Card className="bg-cyberpunk-800 border-cyberpunk-600">
      <CardHeader>
        <CardTitle className="text-cyberpunk-accent">Task Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" />
            <span className="text-cyberpunk-100">Completed: {completedTasks}</span>
          </div>
          <div className="flex items-center">
            <Circle className="text-yellow-500 mr-2" />
            <span className="text-cyberpunk-100">In Progress: {inProgressTasks}</span>
          </div>
          <div className="flex items-center">
            <XCircle className="text-red-500 mr-2" />
            <span className="text-cyberpunk-100">Pending: {pendingTasks}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

