import React from "react";
import {
    Text,
    Link,
    HStack,
    Center,
    Heading,
    Switch,
    useColorMode,
    VStack,
    Avatar,
} from "native-base";

const AccountScreen = () => {
    return (
            <Center
                px={4}
                flex={1}
            >
                <VStack space={5} alignItems="center">
                    <Avatar alignSelf="center" size="2xl" source={require('../assets/photo.jpg')} />
                    <Heading size="lg">Welcome to my App</Heading>
                    <HStack space={2} alignItems="center">
                        <Text>This project is written using Native Base</Text>
                    </HStack>
                    <Link href="https://github.com/msaiedimoien/react-native-todo-note" isExternal>
                        <Text color="primary.500" underline fontSize={"xl"}>
                            Follow me on GitHub
                        </Text>
                    </Link>
                </VStack>
            </Center>
    );
};

export default AccountScreen;
