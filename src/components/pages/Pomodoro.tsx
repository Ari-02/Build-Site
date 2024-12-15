import React from 'react';
import { Timer } from '../pomodoro/Timer';
import { Card } from '../shared/Card';

const Pomodoro = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Pomodoro Timer</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Timer />
        
        <Card title="Session History">
          <div className="space-y-2">
            <p className="text-gray-600 dark:text-gray-400">
              Track your focus sessions and breaks here.
            </p>
            {/* Implement session history */}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Pomodoro;