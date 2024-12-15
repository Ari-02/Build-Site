import React from 'react';
import { Plus } from 'lucide-react';
import { useStore } from '../../store';
import { TaskList } from '../tasks/TaskList';
import { Button } from '../shared/Button';
import { Card } from '../shared/Card';

const Tasks = () => {
  const { tasks, updateTask, deleteTask } = useStore();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Tasks</h2>
        <Button icon={Plus} onClick={() => {/* Implement add task modal */}}>
          Add Task
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card title="To Do">
          <TaskList
            tasks={tasks.filter((task) => task.status === 'todo')}
            onTaskUpdate={updateTask}
            onTaskDelete={deleteTask}
          />
        </Card>
        
        <Card title="In Progress">
          <TaskList
            tasks={tasks.filter((task) => task.status === 'in-progress')}
            onTaskUpdate={updateTask}
            onTaskDelete={deleteTask}
          />
        </Card>
        
        <Card title="Completed">
          <TaskList
            tasks={tasks.filter((task) => task.status === 'completed')}
            onTaskUpdate={updateTask}
            onTaskDelete={deleteTask}
          />
        </Card>
      </div>
    </div>
  );
};

export default Tasks;