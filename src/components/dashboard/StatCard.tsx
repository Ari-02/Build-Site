import React from 'react';
import { Card } from '../shared/Card';

interface StatCardProps {
  title: string;
  children: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({ title, children }) => {
  return (
    <Card title={title}>
      <div className="space-y-2">{children}</div>
    </Card>
  );
};