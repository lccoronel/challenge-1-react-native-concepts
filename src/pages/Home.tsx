import React, { useState } from 'react';
import { View } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle) {
      const newTask: Task = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      };

      setTasks(oldValues => [...oldValues, newTask]);
    }
  }

  function handleMarkTaskAsDone(id: number) {
    const formattedTasks = tasks.map(task => {
      if (task.id === id) task.done = !task.done;

      return task;
    });

    setTasks(formattedTasks);
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter(task => task.id !== id);
    
    setTasks(filteredTasks);
  }
  

  return (
    <View style={{ backgroundColor: isEnabled ? "#1F1F1F" : "#fff", flex: 1 }}>
      <Header changeTheme={toggleSwitch} theme={isEnabled} />

      <TodoInput addTask={handleAddTask}   />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
        theme={isEnabled}
      />
    </View>
  )
}