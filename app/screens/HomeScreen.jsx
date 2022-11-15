import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Footer from "../components/Footer";
import Constants from "expo-constants";

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
        <View style={styles.header}>
            <Text>Header</Text>
        </View>
        <View style={styles.body}>
            <Text>Body</Text>
        </View>
        <View style={styles.footer}>
            <Footer />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
        paddingTop: Constants.statusBarHeight+5,
        backgroundColor: 'skyblue',
        height: 65 + Constants.statusBarHeight,
    },
    body: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    footer: {
        // backgroundColor: 'skyblue',
        height: 60,
    }
});

export default HomeScreen;
