import React from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import {Box, Flex, NativeBaseProvider} from "native-base";

const LinearGradient = require('expo-linear-gradient').LinearGradient;

const HomeScreen = () => {
  return (
      <NativeBaseProvider config={config}>
          <Flex flex={1} justify="space-between" safeAreaTop bg={{
              linearGradient: {
                  colors: ['primary.100', 'primary.500', "primary.400"],
                  start: [0, 0.9],
                  end: [1, 0.7]
              }
          }}>
              <Header title="Tasks" />
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
