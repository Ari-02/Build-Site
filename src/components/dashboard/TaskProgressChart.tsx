import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Card } from '../shared/Card';
import { Task } from '../../types';
import { getTaskProgressData } from '../../utils/chartData';

interface TaskProgressChartProps {
  tasks: Task[];
}

export const TaskProgressChart: React.FC<TaskProgressChartProps> = ({ tasks }) => {
  const data = getTaskProgressData(tasks);

  return (
    <Card title="Task Progress">
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#4F46E5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};