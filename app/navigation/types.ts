// navigation/types.ts
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  // Yahan TaskList ko define karo ki woh 'newTodoText' naam ka parameter le sakta hai
  TaskList: { newTodoText?: string } | undefined; // <--- **Is line ko theek karo**
  AddTodo: { newTodoText?: string } | undefined;
};

// Generic types for screen props
export type TaskListScreenProps = NativeStackScreenProps<RootStackParamList, 'TaskList'>;
export type AddTodoScreenProps = NativeStackScreenProps<RootStackParamList, 'AddTodo'>;