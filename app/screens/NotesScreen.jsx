import React from 'react';
import {Box, FlatList, Flex, Text, TextArea} from "native-base";
import Note from "../components/note/Note";

const NotesScreen = () => {
    const notes = [
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title: "Tell her about new project",
            description: "Tell her about our new project. I could to sign new our letter to start first project.",
            time: "11/22/2022",
            color: "purple.200"
        }, {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            title: "Use your new credit card",
            description: "Use your new credit card",
            time: "16/06/2022",
            color: "green.300"
        }, {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            title: "Use a charcoal pencil",
            description: "Change mail",
            time: "10/19/2022",
            color: "red.300"
        }, {
            id: "58690f-3da1-471f-bd96-145571e29d72",
            title: "Use a charcoal pencil",
            description: "Change mail",
            time: "10/19/2022",
            color: "blue.300"
        }, {
            id: "58694a0f-3a1-471f-bd96-145571e29d72",
            title: "Use a charcoal pencil",
            description: "Change mail",
            time: "10/19/2022",
            color: "gray.300"
        }];

    return (
        <FlatList
            numColumns={2}
            mx={5}
            data={notes}
            keyExtractor={n => n.id}
            renderItem={({item}) => (
                <Note item={item}/>
            )}
        />
    );
};

export default NotesScreen;
