import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, Button, FlatList, ScrollView, Modal, } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setModalVisibility] = useState(false);

  const addGoalHandler = goalTitle=> {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle }]);
    setModalVisibility(false)
  };
  const deleteGoalHandler=goalId =>{
    setCourseGoals(currentGoals=>{return currentGoals.filter((goal)=>goalId!==goal.id)});
  };
  const cancelGoalHandeler=()=>{
    setModalVisibility(false)
  }
  return (
    <View style={styles.screen}>
    <Button title="Add new goal" onPress={()=>setModalVisibility(true)} />
     <GoalInput onAddGoal={addGoalHandler} visibility={isModalVisible} onCancel={cancelGoalHandeler}/>
      <FlatList data={courseGoals} 
      renderItem={
        itemdata => <GoalItem  onDelete={deleteGoalHandler} title={itemdata.item.value} id={itemdata.item.id}/>
      } />
    </View>
    
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 },
  

});
