import React from 'react';
import { Box, Fab, Heading, Icon, Text} from "native-base";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const Note = ({ item }) => {
    return (
        <Box
            flex={1}
            overflow="hidden"
            // maxH="300"
            rounded="md"
            m={2}
            p={2}
            shadow={4}
            bg={item.color}
        >
            <Heading
                fontSize="md"
                mb={2}
            >
                {item.title}
            </Heading>

            <Text flex={1}>
                {item.description}
            </Text>

            <Text
                mt={1}
                rounded="sm"
                color="emerald.100"
            >
                {item.time}
            </Text>

            <Fab
                renderInPortal={false} p={1} shadow={10} bg="gray.500:alpha.40" right={2} bottom={2}
                icon={<Icon as={MaterialCommunityIcons} name="delete" size="md" color="white"/>}
                onPress={() => alert("hi Mostafa!")}
            />
        </Box>
    );
};

export default Note;
