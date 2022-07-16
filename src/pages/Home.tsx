import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task
    setTasks(prev => [...prev, {
      id: Math.floor(Math.random() * 9),
      done: false,
      title: newTaskTitle
    }]);
  }

  function handleToggleTaskDone(id: number) {
    const draft_tasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done
        }
      }

      return task;
    })

    setTasks(draft_tasks);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    const draft_tasks = tasks.filter(task => task.id !== id);

    setTasks(draft_tasks);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})