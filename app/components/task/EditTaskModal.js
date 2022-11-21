import React from 'react';
import {Button, FormControl, HStack, Icon, Input, Modal, Radio, TextArea} from "native-base";
import {MaterialIcons} from "@expo/vector-icons";

const EditTaskModal = ({ showEditModal, setShowEditModal, item }) => {

  return (
      <Modal isOpen={showEditModal} onClose={() => setShowEditModal(false)}>
        <Modal.Content width="350px">
          <Modal.CloseButton/>
          <Modal.Header>Edit Task</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Title:</FormControl.Label>
              <Input value={item.title} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Description:</FormControl.Label>
              <TextArea value={item.description}/>
            </FormControl>
            <FormControl>
              <FormControl.Label>Category:</FormControl.Label>
              <Radio.Group name="category" defaultValue={item.category}>
                <HStack space={3}>
                  <Radio size="lg" value="person-pin" colorScheme="success"
                         icon={<Icon as={<MaterialIcons name="person-pin"/>}/>}>Personal</Radio>
                  <Radio size="lg" value="miscellaneous-services" colorScheme="danger" icon={<Icon
                      as={<MaterialIcons name="miscellaneous-services"/>}/>}>Services</Radio>
                  <Radio size="lg" value="art-track" colorScheme="warning"
                         icon={<Icon as={<MaterialIcons name="art-track"/>}/>}>Art</Radio>
                </HStack>
              </Radio.Group>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space="sm">
              <Button variant="ghost" colorScheme="blueGray"
                      onPress={() => setShowEditModal(false)}>Cancel</Button>
              <Button onPress={() => setShowEditModal(false)}>Save</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
  );
};

export default EditTaskModal;
