import React from 'react';
import { useStore } from '../../store';
import { Card } from '../shared/Card';
import { Button } from '../shared/Button';
import { Bell, Moon, Sun } from 'lucide-react';
import { requestNotificationPermission } from '../../utils/notifications';

const Settings = () => {
  const { pomodoroSettings, updatePomodoroSettings, theme, toggleTheme } = useStore();
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(
    Notification.permission === 'granted'
  );

  const workDurationOptions = Array.from({ length: 12 }, (_, i) => (i + 1) * 5);
  const breakDurationOptions = Array.from({ length: 6 }, (_, i) => (i + 1) * 5);

  const handleNotificationToggle = async () => {
    const granted = await requestNotificationPermission();
    setNotificationsEnabled(granted);
  };

  const handleSettingChange = (setting: keyof typeof pomodoroSettings, value: number) => {
    updatePomodoroSettings({ [setting]: value });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Settings</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Appearance">
          <div className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
            <Button
              variant="secondary"
              icon={theme === 'dark' ? Sun : Moon}
              onClick={toggleTheme}
            >
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </Button>
          </div>
        </Card>

        <Card title="Notifications">
          <div className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-300">
              Enable Notifications
            </span>
            <Button
              variant="secondary"
              icon={Bell}
              onClick={handleNotificationToggle}
            >
              {notificationsEnabled ? 'Enabled' : 'Enable'}
            </Button>
          </div>
        </Card>

        <Card title="Pomodoro Settings">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Work Duration (minutes)
              </label>
              <select
                value={pomodoroSettings.workDuration}
                onChange={(e) => handleSettingChange('workDuration', Number(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600"
              >
                {workDurationOptions.map((duration) => (
                  <option key={duration} value={duration}>
                    {duration} minutes
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Break Duration (minutes)
              </label>
              <select
                value={pomodoroSettings.breakDuration}
                onChange={(e) => handleSettingChange('breakDuration', Number(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600"
              >
                {breakDurationOptions.map((duration) => (
                  <option key={duration} value={duration}>
                    {duration} minutes
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings;