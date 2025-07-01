import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import {Provider as PaperProvider,TextInput,Button,Card,Text,Appbar,Avatar,IconButton,} from 'react-native-paper';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

 const deleteTask = (taskIndexToDelete: number) => {
  const updatedTasks = tasks.filter((task, currentIndex) => {
    return currentIndex !== taskIndexToDelete;
  });

  setTasks(updatedTasks);
};


const AppHeader = () => (
  <Appbar.Header>
    <Avatar.Image
      size={40}
      source={require('../assets/images/mycat.avif')}
      style={{ marginRight: 20, marginLeft: 4, backgroundColor: 'white' }}
    />
<View>
      <Text style={{
        fontFamily: 'PoppinsBold',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff', 
      }}>
        My To-Do List
      </Text>
    </View>
  </Appbar.Header>
);

return (
  <PaperProvider>
    <AppHeader />
    <View style={{ flex: 1, padding: 16, backgroundColor: '#f8f9fa' }}>
        <View style={{ flexDirection: 'row', marginBottom: 16 }}>
          <TextInput
            label="Enter task"
            value={task}
            onChangeText={setTask}
            mode="outlined"
            style={{ flex: 1, marginRight: 8 }}
          />
          <View style={{ padding: 12, alignItems: 'center' }}>
            <Button
              mode="contained"
              onPress={addTask}
              style={{ alignSelf: 'center', marginLeft: 8 }}
            >
              Add
            </Button>
          </View>
        </View>
        

        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={
            <Text style={{ textAlign: 'center', marginTop: 24, color: '#999' }}>
              No tasks yet
            </Text>
          }
          renderItem={({ item, index }) => (
            <Card style={{ marginBottom: 12 }} mode="elevated">
              <Card.Title
                title={item}
                right={(props) => (
                  <IconButton
                    {...props}
                    icon="delete"
                    iconColor="#e53935"
                    onPress={() => deleteTask(index)}
                  />
                )}
              />
            </Card>
            
          )}
          
        />
        <View style={{ paddingVertical: 12, alignItems: 'center' }}>
        <Text style={{ fontStyle: 'italic', color: '#888' }}>
          Every task you finish is a step ahead of who you were yesterday.
        </Text>
      </View>
      </View>
    </PaperProvider>
  );
}
