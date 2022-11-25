import React, {useState} from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import {Button, Flex, FormControl, Input, Modal, NativeBaseProvider, TextArea} from "native-base";
import TasksScreen from "./TasksScreen";
import NotesScreen from "./NotesScreen";
import AccountScreen from "./AccountScreen";
import AddNoteModal from "../components/note/AddNoteModal";
import AddTaskModal from "../components/task/AddTaskModal";

const LinearGradient = require('expo-linear-gradient').LinearGradient;

const HomeScreen = () => {
    const [body, setBody] = useState("tasks");
    const [showAddNote, setShowAddNote] = useState(false);
    const [showAddTask, setShowAddTask] = useState(false);

    const addNote = () => {
        setShowAddNote(true);
    }

    const addTask = () => {
      setShowAddTask(true);
    }

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
                            <Header title="Tasks" onPressAdd={addTask} />
                            <TasksScreen/>
                        </>
                        : (
                            body === "notes" ? <>
                                    <Header title="Notes" onPressAdd={addNote} />
                                    <NotesScreen/>
                                </>
                                : <>
                                    <Header title="Settings"/>
                                    <AccountScreen/>
                                </>
                        )
                }
                <Footer setBody={setBody}/>

                <AddNoteModal showAddNote={showAddNote} setShowAddNote={setShowAddNote} />
                <AddTaskModal showAddTask={showAddTask} setShowAddTask={setShowAddTask} />
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
