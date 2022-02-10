import React, { useState } from 'react';
import { View, Button, StyleSheet, TextInput, Modal } from 'react-native';
const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    };
    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }
    return (
        <Modal visible={props.visibility} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput value={enteredGoal}
                    placeholder="Goals"
                    style={styles.input}
                    onChangeText={goalInputHandler} />
                <View style={styles.buttonContainer}>
                    <Button title="ADD" onPress={addGoalHandler} />
                    <Button title="CANCEL" color="red" onPress={props.onCancel} />
                </View>
            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
export default GoalInput
