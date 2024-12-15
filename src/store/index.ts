import { create } from 'zustand';
import { Task, Habit, PomodoroSettings, User } from '../types';

interface AppState {
  tasks: Task[];
  habits: Habit[];
  pomodoroSettings: PomodoroSettings;
  user: User | null;
  theme: 'light' | 'dark';
  addTask: (task: Task) => void;
  updateTask: (taskId: string, updates: Partial<Task>) => void;
  deleteTask: (taskId: string) => void;
  addHabit: (habit: Habit) => void;
  updateHabit: (habitId: string, updates: Partial<Habit>) => void;
  updatePomodoroSettings: (updates: Partial<PomodoroSettings>) => void;
  toggleTheme: () => void;
}

export const useStore = create<AppState>((set) => ({
  tasks: [],
  habits: [],
  pomodoroSettings: {
    workDuration: 25,
    breakDuration: 5,
    longBreakDuration: 15,
    sessionsBeforeLongBreak: 4,
  },
  user: null,
  theme: 'light',
  
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  updateTask: (taskId, updates) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, ...updates } : task
      ),
    })),
  deleteTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    })),
  addHabit: (habit) => set((state) => ({ habits: [...state.habits, habit] })),
  updateHabit: (habitId, updates) =>
    set((state) => ({
      habits: state.habits.map((habit) =>
        habit.id === habitId ? { ...habit, ...updates } : habit
      ),
    })),
  updatePomodoroSettings: (updates) =>
    set((state) => ({
      pomodoroSettings: { ...state.pomodoroSettings, ...updates },
    })),
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}));