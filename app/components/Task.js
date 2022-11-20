import React, {useState} from 'react';
import {
    Box, Button,
    Center,
    FormControl,
    HStack,
    Icon,
    Input,
    Modal,
    Pressable,
    Spacer,
    Text,
    TextArea,
    VStack,
    Radio, Checkbox
} from "native-base";
import {MaterialIcons} from "@expo/vector-icons";

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
                            <Icon color="primary.700" size="lg" as={<MaterialIcons name={item.isCompleted ? "check-box" : "check-box-outline-blank"}/>} />
                        </Pressable>
                        <Pressable alignSelf="center" onPress={() => setShowEditModal(true)}>
                            <Icon color="info.600" size="lg" as={<MaterialIcons name="edit"/>} />
                        </Pressable>
                    </VStack>
                </HStack>
            </Box>

            <Modal isOpen={showEditModal} onClose={() => setShowEditModal(false)}>
                <Modal.Content width="350px">
                    <Modal.CloseButton/>
                    <Modal.Header>Edit Task</Modal.Header>
                    <Modal.Body>
                        <FormControl>
                            <FormControl.Label>Title:</FormControl.Label>
                            <Input/>
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Description:</FormControl.Label>
                            <TextArea/>
                        </FormControl>
                        <FormControl mb={2}>
                            <FormControl.Label>Category:</FormControl.Label>
                            <Radio.Group name="category">
                                <HStack space={4}>
                                    <Radio size="lg" value="person-pin" colorScheme="success"
                                           icon={<Icon as={<MaterialIcons name="person-pin"/>}/>}>Personal</Radio>
                                    <Radio size="lg" value="miscellaneous-services" colorScheme="danger" icon={<Icon
                                        as={<MaterialIcons name="miscellaneous-services"/>}/>}>Services</Radio>
                                    <Radio size="lg" value="art-track" colorScheme="warning"
                                           icon={<Icon as={<MaterialIcons name="art-track"/>}/>}>Art</Radio>
                                </HStack>
                            </Radio.Group>
                        </FormControl>
                        <Modal.Footer>
                            <Button.Group space="sm">
                                <Button variant="ghost" colorScheme="blueGray"
                                        onPress={() => setShowEditModal(false)}>Cancel</Button>
                                <Button onPress={() => setShowEditModal(false)}>Save</Button>
                            </Button.Group>
                        </Modal.Footer>
                    </Modal.Body>
                </Modal.Content>
            </Modal>

            <Modal isOpen={showCompletedModal} onClose={() => setShowCompletedModal(false)}>
                <Modal.Content width="350px">
                    <Modal.CloseButton/>
                    <Modal.Header>Complete the task</Modal.Header>
                    <Modal.Body>
                        <FormControl>
                            <Checkbox value="isCompleted" shadow={2}>The task is completed!</Checkbox>
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Description:</FormControl.Label>
                            <TextArea/>
                        </FormControl>
                        <Modal.Footer>
                            <Button.Group space="sm">
                                <Button variant="ghost" colorScheme="blueGray"
                                        onPress={() => setShowCompletedModal(false)}>Cancel</Button>
                                <Button onPress={() => setShowCompletedModal(false)}>Save</Button>
                            </Button.Group>
                        </Modal.Footer>
                    </Modal.Body>
                </Modal.Content>
            </Modal>
        </>
    );
};

export default Task;
