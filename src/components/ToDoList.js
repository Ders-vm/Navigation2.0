import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';

// ToDoList.js

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: 'black', 
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  taskText: {
    fontSize: 16,
    color: 'white',
  },
  clearButtonContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
});

function ToDoList({ tasks, onToggleTaskCompleted, onClearAllTasks, onRemoveTask }) {
  const handleToggleTaskCompleted = (id) => {
    onRemoveTask(id);
  };

  const handleClearAllTasks = () => {
    onClearAllTasks();
  };

  return (
    <MainLayout> 
      <ScrollView>
        {tasks.map((task) => (
          <TouchableOpacity 
            key={task.id} 
            onPress={() => handleToggleTaskCompleted(task.id)}
          >
            <View style={[styles.task, task.completed && styles.completed]}>
              <Text style={styles.taskText}>{task.text}</Text>
            </View>
          </TouchableOpacity>
        ))}
        {tasks.length > 0 && (
          <View style={styles.clearButtonContainer}>
            <Button title="Clear All Tasks" onPress={handleClearAllTasks} color="teal" />
          </View>
        )}
      </ScrollView>
    </MainLayout>
  );
}

export default ToDoList;
