import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./app/screens/HomeScreen";
import NoteListScreen from "./app/screens/NoteListScreen";
import AccountScreen from "./app/screens/AccountScreen";
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";
import ToDoListScreen from "./app/screens/ToDoListScreen";

const Stack = createNativeStackNavigator();

const App = () => {
    return(
        <NativeBaseProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}} />
                    <Stack.Screen name='ToDo' component={ToDoListScreen} />
                    <Stack.Screen name='Note' component={NoteListScreen} />
                    <Stack.Screen name='Account' component={AccountScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
};

export default App;
