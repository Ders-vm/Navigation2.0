// ToDoForm.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        marginRight: 10,
        color: 'white', 
    },
});

function ToDoForm({ onAddTask }) {
    const [text, setText] = useState('');

    const handleSubmit = () => {
        if (!text.trim()) return;
        onAddTask(text);
        setText('');
    };

    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                value={text}
                onChangeText={setText}
                placeholderTextColor="gray" 
            />
            <Button title="Add" onPress={handleSubmit} color="teal" />
        </View>
    );
}

export default ToDoForm;
