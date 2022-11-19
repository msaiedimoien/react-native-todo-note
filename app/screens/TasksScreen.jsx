import React from 'react';
import {Box, FlatList, HStack, Icon, Text, VStack, Spacer, Center, Pressable} from "native-base";
import {MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";

const TasksScreen = () => {
    const tasks = [
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title: "Call Erica",
            description: "Tell her about your new project",
            category: "person-pin",
            isCompleted: false,
            memoCompleted: ""
        }, {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            title: "Pay Gas Bill",
            description: "Use your new credit card",
            category: "person-pin",
            isCompleted: true,
            memoCompleted: "It was recorded in the accounting software."
        }, {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            title: "Complete SSL Install",
            description: "Change mail",
            category: "miscellaneous-services",
            isCompleted: false,
            memoCompleted: ""
        }, {
            id: "68694a0f-3da1-431f-bd56-142371e29d72",
            title: "Deliver P202 Paper",
            description: "Don't forget to change file name",
            category: "school",
            isCompleted: false,
            memoCompleted: ""
        }, {
            id: "28694a0f-3da1-471f-bd96-142456e29d72",
            title: "Complete Homework",
            description: "Use a charcoal pencil",
            category: "art-track",
            isCompleted: false,
            memoCompleted: ""
        },
        {
            id: "bd7acbea-c1b1-46c2-aedd53abb28ba",
            title: "Call Erica",
            description: "Tell her about your new project",
            category: "person-pin",
            isCompleted: false,
            memoCompleted: ""
        }, {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa973",
            title: "Pay Gas Bill",
            description: "Use your new credit card",
            category: "person-pin",
            isCompleted: true,
            memoCompleted: "It was recorded in the accounting software."
        }, {
            id: "58694a0f-3da1-471f-b96-145571e29d72",
            title: "Complete SSL Install",
            description: "Change mail",
            category: "miscellaneous-services",
            isCompleted: false,
            memoCompleted: ""
        }, {
            id: "68694a0f-3da1-431f-bd56-1471e29d72",
            title: "Deliver P202 Paper",
            description: "Don't forget to change file name",
            category: "school",
            isCompleted: false,
            memoCompleted: ""
        }, {
            id: "28694a0f-3da1-471f-bd96-1424529d72",
            title: "Complete Homework",
            description: "Use a charcoal pencil",
            category: "art-track",
            isCompleted: false,
            memoCompleted: ""
        }];

    return (
        <FlatList
            data={tasks}
            keyExtractor={t => t.id}
            renderItem={({item}) => (
                <Box borderBottomWidth={1} borderColor="muted.500" mx={5} pl={2} pr={3} py="3">
                    <HStack space={[3, 3]} justifyContent="space-between">
                        <Center borderWidth={1} borderColor="tomato" rounded={50} alignSelf="center" p={1}>
                            <Icon color="tomato" size={30} as={<MaterialIcons name={item.category}/>}/>
                        </Center>
                        <VStack>
                            <Text fontSize="15px" color="coolGray.800" bold>{item.title}</Text>
                            <Text color="muted.700">{item.description}</Text>
                            {item.isCompleted ? <Text color="muted.500" italic>{item.memoCompleted}</Text> : null}
                        </VStack>
                        <Spacer/>
                        <Pressable alignSelf="center" onPress={() => {}}>
                            <Icon color="tomato" size="md" as={<MaterialIcons name={item.isCompleted? "check-box":"check-box-outline-blank"}/>}/>
                        </Pressable>
                    </HStack>
                </Box>
            )}
        />
    );
};

export default TasksScreen;
