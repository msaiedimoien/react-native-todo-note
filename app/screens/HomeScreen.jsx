import React, {useState} from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import {Flex, NativeBaseProvider} from "native-base";
import TasksScreen from "./TasksScreen";
import NotesScreen from "./NotesScreen";
import AccountScreen from "./AccountScreen";

const LinearGradient = require('expo-linear-gradient').LinearGradient;

const HomeScreen = () => {
    const [body, setBody] = useState("tasks");
    return (
        <NativeBaseProvider config={config}>
            <Flex flex={1} justify="space-between" safeAreaTop bg={{
                linearGradient: {
                    colors: ['primary.50', 'primary.200', "primary.300"],
                    start: [0, 0.9],
                    end: [1, 0.7]
                }
            }}>
                {
                    body === "tasks" ? <>
                            <Header title="Tasks"/>
                            <TasksScreen/>
                        </>
                        : (
                            body === "notes" ? <>
                                    <Header title="Notes"/>
                                    <NotesScreen/>
                                </>
                                : <>
                                    <Header title="Settings"/>
                                    <AccountScreen/>
                                </>
                        )
                }
                <Footer setBody={setBody}/>
            </Flex>
        </NativeBaseProvider>
    );
};

const config = {
    dependencies: {
        'linear-gradient': LinearGradient
    }
};

export default HomeScreen;
