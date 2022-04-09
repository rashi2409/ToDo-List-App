import react from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Task = (props) => {
    return(
        <View style={styles.task}>
            <View style={styles.leftTask}>
                <View style={styles.square}></View>
                <Text style={styles.taskText}>{props.text}</Text>
            </View>
            <View style={styles.rightTask}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    task: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 53,
        marginBottom: 20,
        padding: 15,
    },
    leftTask: {
        flexDirection: 'row',
        alignItems:'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        borderRadius: 5,
        backgroundColor: '#55BCF6',
        marginLeft: 15,
        opacity: 0.4,

    },
    taskText: {
        fontSize: 14,
        marginHorizontal: 10,
        maxWidth: '80%',
    },
    rightTask: {
        width: 12,
        height: 12,
        borderRadius: 5,
        borderColor:'#55BCF6',
        borderWidth: 2,
    },
})

export default Task;