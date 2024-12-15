import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useStore } from '../../store';
import { TaskList } from '../tasks/TaskList';
import { TaskModal } from '../tasks/TaskModal';
import { Button } from '../shared/Button';
import { Card } from '../shared/Card';
import { Task } from '../../types';

const Tasks = () => {
  const { tasks, addTask, updateTask, deleteTask } = useStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const handleAddTask = (taskData: Partial<Task>) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title: taskData.title!,
      description: taskData.description,
      status: taskData.status || 'todo',
      priority: taskData.priority || 'medium',
      createdAt: new Date(),
      updatedAt: new Date(),
      tags: [],
      subtasks: [],
    };
    addTask(newTask);
    setIsModalOpen(false);
  };

  const handleEditTask = (taskData: Partial<Task>) => {
    if (editingTask) {
      updateTask(editingTask.id, { ...taskData, updatedAt: new Date() });
      setEditingTask(null);
    }
    setIsModalOpen(false);
  };

  const openEditModal = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Tasks</h2>
        <Button icon={Plus} onClick={() => setIsModalOpen(true)}>
          Add Task
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card title="To Do">
          <TaskList
            tasks={tasks.filter((task) => task.status === 'todo')}
            onTaskUpdate={updateTask}
            onTaskDelete={deleteTask}
            onEditTask={openEditModal}
          />
        </Card>
        
        <Card title="In Progress">
          <TaskList
            tasks={tasks.filter((task) => task.status === 'in-progress')}
            onTaskUpdate={updateTask}
            onTaskDelete={deleteTask}
            onEditTask={openEditModal}
          />
        </Card>
        
        <Card title="Completed">
          <TaskList
            tasks={tasks.filter((task) => task.status === 'completed')}
            onTaskUpdate={updateTask}
            onTaskDelete={deleteTask}
            onEditTask={openEditModal}
          />
        </Card>
      </div>

      <TaskModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingTask(null);
        }}
        onSubmit={editingTask ? handleEditTask : handleAddTask}
        initialData={editingTask || undefined}
      />
    </div>
  );
};

export default Tasks;