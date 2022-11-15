import React, {useState} from 'react';
import {Text, Box, Center, HStack, Icon, NativeBaseProvider, Pressable} from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const Footer = () => {
    const [selected, setSelected] = useState(0);

    return (
        <NativeBaseProvider>
            <Box flex={1} width='100%' alignSelf="center">
                <HStack bg='blueGray.800' alignItems="center" shadow={6}>
                    <Pressable mb={1} cursor="pointer" opacity={selected === 2 ? 1 : 0.5} py={3} flex={1}
                               onPress={() => setSelected(2)}>
                        <Center>
                            <Icon mb={2} color="white" size="sm"
                                  as={<MaterialIcons name={selected === 2 ? "settings" : "settings"}/>}/>
                            <Text color="white" fontSize={12}>تنظیمات</Text>
                        </Center>
                    </Pressable>
                    <Pressable mb={1} cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py={3} flex={1}
                               onPress={() => setSelected(1)}>
                        <Center>
                            <Icon mb={2} color="white" size="sm"
                                  as={<MaterialIcons name={selected === 1 ? "work" : "work-outline"}/>}/>
                            <Text color="white" fontSize={12}>کارها</Text>
                        </Center>
                    </Pressable>
                    <Pressable mb={1} cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py={3} flex={1}
                               onPress={() => setSelected(0)}>
                        <Center>
                            <Icon mb={2} color="white" size="sm" as={<MaterialCommunityIcons
                                name={selected === 0 ? "note-text" : "note-text-outline"}/>}/>
                            <Text color={"white"} fontSize={12}>یادداشت ها</Text>
                        </Center>
                    </Pressable>
                </HStack>
            </Box>
        </NativeBaseProvider>
    );
};

export default Footer;
