import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff', // White color for text
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 16,
        color: '#ffffff', // White color for text
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#333333', // Darker background for button
        color: '#ffffff', // White color for button text
        marginTop: 10,
    },
});

const AboutScreen = () => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Creator: Anders von Mirbach</Text>
            <Text style={styles.paragraph}>Eyy</Text>
            <Button title="Back to Home" onPress={handleGoBack} color="#ffffff" />
        </View>
    );
}

export default AboutScreen;
