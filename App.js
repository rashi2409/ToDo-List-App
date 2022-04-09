import { StyleSheet,Keyboard, TouchableOpacity, TextInput , Platform, Text, View, KeyboardAvoidingView } from 'react-native';
import Task from './components/Task'
import {react, useState} from 'react';

export default function App() {

  const [task, SetTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task])
      SetTask(null)
  }

  const completeTask = (index) => {
    let copyTasks = [...taskItems]
    copyTasks.splice(index, 1)
    setTaskItems(copyTasks)
  }

  return (
    <View style={styles.container}>

      <View style={styles.tasksWrapper}>
        <Text style={styles.Title}>Today's Tasks</Text>

        <View styles={styles.taskList}>
          {
            taskItems.map((item, index) => {
              return(
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item}/>
                </TouchableOpacity>
              )
            })
          }

        </View>

      </View>

      <KeyboardAvoidingView 
        behaviour={Platform.OS == 'android' ? "padding" : "height"}
        style={styles.inputWrapper}>
          <TextInput style={styles.input} placeholder={"Write a task"} value={task} onChangeText={text => SetTask(text)}/>
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.taskAddView}>
              <Text style={styles.textAdd}>+</Text>
            </View>
          </TouchableOpacity>

      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
      paddingTop: 94,
      paddingHorizontal: 20,
  },
  Title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  taskList: {
    
  },
  inputWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 60,
    height: 50,
    width:"80%",
    paddingLeft: 20,
    borderColor:'#C0C0C0',
    borderWidth: 1,

  },
  taskAddView: {
    backgroundColor: '#FFF',
    borderRadius: 52,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'#C0C0C0',
    borderWidth: 1,
  },
  textAdd: {
    fontSize: 20
  }
});
