import React, {useState} from 'react';
import {
    Box,
    Center,
    HStack,
    Icon,
    Pressable,
    Spacer,
    Text,
    VStack
} from "native-base";
import {MaterialIcons} from "@expo/vector-icons";
import EditTaskModal from "./EditTaskModal";
import CompletedTaskModal from "./CompletedTaskModal";

const Task = ({ item }) => {
    const [showCompletedModal, setShowCompletedModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    const color = () => item.category == "person-pin"
        ? "success.600"
        : (item.category == "miscellaneous-services" ? "danger.600" : "warning.600");

    return (
        <>
            <Box borderBottomWidth={1} borderColor="muted.500" mx={5} pl={2} pr={3} py="3">
                <HStack space={[3, 3]} justifyContent="space-between">
                    <Center borderWidth={1} borderColor={color()}
                            rounded={50} alignSelf="center" p={1}>
                        <Icon color={color()}
                              size={30} as={<MaterialIcons name={item.category}/>}/>
                    </Center>
                    <VStack>
                        <Text fontSize="15px" color="coolGray.800" bold>{item.title}</Text>
                        <Text color="muted.700">{item.description}</Text>
                        {item.isCompleted ? <Text color="muted.500" italic>{item.memoCompleted}</Text> : null}
                    </VStack>
                    <Spacer/>
                    <VStack justifyContent="space-around">
                        <Pressable alignSelf="center" onPress={() => setShowCompletedModal(true)}>
                            <Icon color="primary.700" size="lg" as={<MaterialIcons
                                name={item.isCompleted ? "check-box" : "check-box-outline-blank"}/>}/>
                        </Pressable>
                        <Pressable alignSelf="center" onPress={() => setShowEditModal(true)}>
                            <Icon color="info.600" size="lg" as={<MaterialIcons name="edit"/>}/>
                        </Pressable>
                    </VStack>
                </HStack>
            </Box>

            <EditTaskModal showEditModal={showEditModal} setShowEditModal={setShowEditModal} item={item}/>
            <CompletedTaskModal showCompletedModal={showCompletedModal} setShowCompletedModal={setShowCompletedModal}
                                item={item}/>
        </>
    );
};

export default Task;
