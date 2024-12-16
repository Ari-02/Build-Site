import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export const TaskProgressChart = ({ tasks }) => {
  const data = [
    { name: 'Mon', completed: 0 },
    { name: 'Tue', completed: 0 },
    { name: 'Wed', completed: 0 },
    { name: 'Thu', completed: 0 },
    { name: 'Fri', completed: 0 },
    { name: 'Sat', completed: 0 },
    { name: 'Sun', completed: 0 },
  ];

  tasks.forEach(task => {
    if (task.status === 'completed') {
      const day = new Date(task.completedAt).getDay();
      data[day].completed++;
    }
  });

  return (
    <Card className="bg-cyberpunk-800 border-cyberpunk-600">
      <CardHeader>
        <CardTitle className="text-cyberpunk-accent">Weekly Task Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#c0c0c0" />
            <YAxis stroke="#c0c0c0" />
            <Tooltip
              contentStyle={{
                background: '#070714',
                border: '1px solid #00ffff',
                color: '#f0f0f0',
              }}
            />
            <Bar dataKey="completed" fill="#ff00ff" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

