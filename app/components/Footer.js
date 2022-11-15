import React, {useState} from 'react';
import {Text, Box, Center, HStack, Icon, NativeBaseProvider, Pressable, Container} from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const Footer = () => {
    const [selected, setSelected] = useState(0);

    return (
        <Box m={5}>
            <HStack bg='primary.900' rounded={50} shadow={5}>
                <Pressable mb={1} cursor="pointer" opacity={selected === 2 ? 1 : 0.5} py={3} flex={1}
                           onPress={() => setSelected(2)}>
                    <Center>
                        <Icon mb={1} color="white" size="md"
                              as={<MaterialIcons name={selected === 2 ? "settings" : "settings"}/>}/>
                        <Text color="white" fontSize={12}>Settings</Text>
                    </Center>
                </Pressable>
                <Pressable mb={1} cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py={3} flex={1}
                           onPress={() => setSelected(1)}>
                    <Center>
                        <Icon mb={1} color="white" size="md"
                              as={<MaterialIcons name={selected === 1 ? "work" : "work-outline"}/>}/>
                        <Text color="white" fontSize={12}>Tasks</Text>
                    </Center>
                </Pressable>
                <Pressable mb={1} cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py={3} flex={1}
                           onPress={() => setSelected(0)}>
                    <Center>
                        <Icon mb={1} color="white" size="md" as={<MaterialCommunityIcons
                            name={selected === 0 ? "note-text" : "note-text-outline"}/>}/>
                        <Text color={"white"} fontSize={12}>Notes</Text>
                    </Center>
                </Pressable>
            </HStack>
        </Box>
    );
};

export default Footer;
