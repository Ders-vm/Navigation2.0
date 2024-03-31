// HomeScreen.js

import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ToDoList from '../components/ToDoList'; 
import ToDoForm from '../components/ToDoForm'; 
import MainLayout from '../layouts/MainLayout';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
    },
});

function HomeScreen({ navigation }) {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Do laundry', completed: true },
        { id: 2, text: 'Go to gym', completed: false },
        { id: 3, text: 'Walk dog', completed: true },
    ]);

    const addTask = (taskText) => {
        const newTask = { id: Date.now(), text: taskText, completed: false };
        setTasks([...tasks, newTask]);
    };

    const toggleTaskCompleted = (id) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const clearAllTasks = () => {
        setTasks([]);
    };

    const removeTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    return (
        <MainLayout>
            <View style={styles.container}>
                <ToDoList
                    tasks={tasks}
                    onToggleTaskCompleted={toggleTaskCompleted}
                    onClearAllTasks={clearAllTasks}
                    onRemoveTask={removeTask}
                />
                <ToDoForm onAddTask={addTask} />
                {/* Button to navigate to a different screen */}
                <Button
                    title="Go to About Screen"
                    onPress={() => navigation.navigate('About')}
                />
            </View>
        </MainLayout>
    );
}

export default HomeScreen;
