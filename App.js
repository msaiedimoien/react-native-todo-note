import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./app/screens/HomeScreen";
import NotesScreen from "./app/screens/NotesScreen";
import AboutScreen from "./app/screens/AboutScreen";
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";
import TasksScreen from "./app/screens/TasksScreen";

const Stack = createNativeStackNavigator();

const App = () => {
    return(
        <NativeBaseProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}} />
                    <Stack.Screen name='Tasks' component={TasksScreen} />
                    <Stack.Screen name='Notes' component={NotesScreen} />
                    <Stack.Screen name='Account' component={AboutScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
};

export default App;
