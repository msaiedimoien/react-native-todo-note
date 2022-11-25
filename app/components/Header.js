import React from 'react';
import {Box, Center, Heading, HStack, Icon, Pressable} from "native-base";
import {MaterialIcons} from "@expo/vector-icons";
import {Spacer} from "native-base/src/components/primitives/Flex";

const Header = ({ title, onPressAdd }) => {
    return (
        <Box bg="white" justifyContent="center" height={55} rounded={50} m={5} mb={2} shadow={6} px={4}>
            <HStack justifyContent="space-between" alignItems="center">
                <Pressable>
                    <Center bg="gray.500:alpha.20" rounded={50} p={1}>
                        <Icon as={MaterialIcons} name="color-lens" size="lg" color="gray.100"/>
                    </Center>
                </Pressable>
                <Spacer/>

                <Heading color="primary.800">{title}</Heading>

                <Spacer/>
                <Pressable onPress={onPressAdd}>
                    <Center bg="gray.500:alpha.20" rounded={50} p={1}>
                        <Icon as={MaterialIcons} name="add" size="lg" color="red.500"/>
                    </Center>
                </Pressable>
            </HStack>
        </Box>
    );
};

export default Header;
