import React from 'react';
import {Box, FlatList, HStack, Icon, Text, VStack, Spacer} from "native-base";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const TasksScreen = () => {
    const tasks = [{
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Call Erica",
        description: "Tell her about your new project",
        category: "Personal",
        isCompleted: false,
        memoCompleted: ""
    }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Pay Gas Bill",
        description: "Use your new credit card",
        category: "Personal",
        isCompleted: true,
        memoCompleted: "It was recorded in the accounting software."
    }, {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Complete SSL Install",
        description: "Change mail",
        category: "Side Project",
        isCompleted: false,
        memoCompleted: ""
    }, {
        id: "68694a0f-3da1-431f-bd56-142371e29d72",
        title: "Deliver P202 Paper",
        description: "Don't forget to change file name",
        category: "School",
        isCompleted: false,
        memoCompleted: ""
    }, {
        id: "28694a0f-3da1-471f-bd96-142456e29d72",
        title: "Complete Homework",
        description: "Use a charcoal pencil",
        category: "Art",
        isCompleted: false,
        memoCompleted: ""
    }];

  return (
      <FlatList
          data={tasks}
          keyExtractor={t => t.id}
          renderItem={({item}) => (
            <Box>
                <HStack>
                    <Icon color="tomato" size="md" as={<MaterialCommunityIcons name={item.category} />} />
                    <VStack>
                        <Text>{item.title}</Text>
                        <Text>{item.description}</Text>
                        {item.isCompleted? <Text>{item.memoCompleted}</Text>:null}
                    </VStack>
                    <Spacer />
                    <Icon color="tomato" size="md" as={<MaterialCommunityIcons name={item.category} />} />
                </HStack>
            </Box>
          )}
      />
  );
};

export default TasksScreen;
