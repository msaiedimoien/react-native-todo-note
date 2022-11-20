import React from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import {Flex, NativeBaseProvider} from "native-base";
import NotesScreen from "./NotesScreen";
import TasksScreen from "./TasksScreen";

const LinearGradient = require('expo-linear-gradient').LinearGradient;

const HomeScreen = () => {
  return (
      <NativeBaseProvider config={config}>
          <Flex flex={1} justify="space-between" safeAreaTop bg={{
              linearGradient: {
                  colors: ['primary.50', 'primary.200', "primary.300"],
                  start: [0, 0.9],
                  end: [1, 0.7]
              }
          }}>
              <Header title="Tasks" />
              <TasksScreen />
              <Footer />
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
