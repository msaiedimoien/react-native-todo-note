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
    Avatar, Image,
} from "native-base";

const AboutScreen = () => {
    const img = require("../assets/photo.jpg");

    return (
            <Center
                px={4}
                flex={1}
            >
                <VStack space={5} alignItems="center">
                    <Avatar
                        alignSelf="center"
                        size="2xl"
                        source={{uri: "https://avatars.githubusercontent.com/u/109569396?s=400&u=dd3477e7d262ddc0e3d6ff976c0158a5dd593d65&v=4"}}
                    />
                    <Heading size="lg">my "NATIVE BASE" App</Heading>
                    <HStack space={2} alignItems="center">
                        <Text>This is written using Native Base</Text>
                    </HStack>
                    <Link href="https://github.com/msaiedimoien" isExternal>
                        <Text color="primary.500" underline fontSize={"xl"}>
                            Follow on GitHub
                        </Text>
                    </Link>
                </VStack>
            </Center>
    );
};

export default AboutScreen;
