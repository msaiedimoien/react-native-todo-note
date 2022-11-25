import React from 'react';
import {Button, Checkbox, FormControl, Modal, TextArea} from "native-base";

const CompletedTaskModal = ({ showCompletedModal, setShowCompletedModal, item }) => {
  return (
      <Modal isOpen={showCompletedModal} onClose={() => setShowCompletedModal(false)}>
          <Modal.Content width="350px">
              <Modal.CloseButton/>
              <Modal.Header bg="green.100">Complete the task</Modal.Header>
              <Modal.Body>
                  <FormControl>
                      <Checkbox value={item.isCompleted} defaultIsChecked={item.isCompleted} shadow={2}>The task is completed!</Checkbox>
                  </FormControl>
                  <FormControl>
                      <FormControl.Label>Description:</FormControl.Label>
                      <TextArea value={item.memoCompleted} />
                  </FormControl>
              </Modal.Body>
              <Modal.Footer>
                  <Button.Group space="sm">
                      <Button variant="ghost" colorScheme="blueGray"
                              onPress={() => setShowCompletedModal(false)}>Cancel</Button>
                      <Button onPress={() => setShowCompletedModal(false)}>Save</Button>
                  </Button.Group>
              </Modal.Footer>
          </Modal.Content>
      </Modal>
  );
};

export default CompletedTaskModal;
