import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { Button } from '../shared/Button';
import { Card } from '../shared/Card';
import { useStore } from '../../store';

export const Timer: React.FC = () => {
  const { pomodoroSettings } = useStore();
  const [timeLeft, setTimeLeft] = useState(pomodoroSettings.workDuration * 60);
  const [isActive, setIsActive] = useState(false);
  const [isWork, setIsWork] = useState(true);
  const [sessions, setSessions] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleSessionComplete();
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const handleSessionComplete = () => {
    if (isWork) {
      setSessions((s) => s + 1);
      if (sessions + 1 >= pomodoroSettings.sessionsBeforeLongBreak) {
        setTimeLeft(pomodoroSettings.longBreakDuration * 60);
        setSessions(0);
      } else {
        setTimeLeft(pomodoroSettings.breakDuration * 60);
      }
    } else {
      setTimeLeft(pomodoroSettings.workDuration * 60);
    }
    setIsWork((prev) => !prev);
    setIsActive(false);
  };

  const toggleTimer = () => setIsActive((prev) => !prev);
  
  const resetTimer = () => {
    setIsActive(false);
    setIsWork(true);
    setSessions(0);
    setTimeLeft(pomodoroSettings.workDuration * 60);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Card title="Pomodoro Timer" className="max-w-md mx-auto text-center">
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-2">{formatTime(timeLeft)}</h2>
        <p className="text-gray-600 dark:text-gray-400">
          {isWork ? 'Work Time' : 'Break Time'}
        </p>
      </div>
      
      <div className="flex justify-center space-x-4">
        <Button
          onClick={toggleTimer}
          icon={isActive ? Pause : Play}
          size="lg"
        >
          {isActive ? 'Pause' : 'Start'}
        </Button>
        <Button
          variant="secondary"
          onClick={resetTimer}
          icon={RotateCcw}
          size="lg"
        >
          Reset
        </Button>
      </div>
    </Card>
  );
};