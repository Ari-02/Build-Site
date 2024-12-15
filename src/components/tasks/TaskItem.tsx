import React from 'react';
import { Task } from '../../types';
import { Trash2, Edit2, CheckCircle, Circle } from 'lucide-react';
import { Button } from '../shared/Button';

interface TaskItemProps {
  task: Task;
  onUpdate: (taskId: string, updates: Partial<Task>) => void;
  onDelete: (taskId: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onUpdate, onDelete }) => {
  const toggleStatus = () => {
    const newStatus = task.status === 'completed' ? 'todo' : 'completed';
    onUpdate(task.id, { status: newStatus });
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleStatus}
            className="text-gray-500 hover:text-primary-600 dark:text-gray-400"
          >
            {task.status === 'completed' ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              <Circle className="h-5 w-5" />
            )}
          </button>
          <div>
            <h4
              className={`font-medium ${
                task.status === 'completed'
                  ? 'text-gray-400 line-through'
                  : 'text-gray-800 dark:text-white'
              }`}
            >
              {task.title}
            </h4>
            {task.description && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {task.description}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="secondary"
            size="sm"
            icon={Edit2}
            onClick={() => {/* Implement edit modal */}}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            size="sm"
            icon={Trash2}
            onClick={() => onDelete(task.id)}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};