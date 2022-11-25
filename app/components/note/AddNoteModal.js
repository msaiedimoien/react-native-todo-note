import React from 'react';
import {Button, FormControl, Input, Modal, TextArea} from "native-base";

const AddNoteModal = ({ showAddNote, setShowAddNote }) => {
  return (
      <Modal isOpen={showAddNote} onClose={() => setShowAddNote(false)}>
          <Modal.Content width="350px">
              <Modal.CloseButton />
              <Modal.Header bg="purple.100">Add New Note</Modal.Header>
              <Modal.Body>
                  <FormControl>
                      <FormControl.Label>Title:</FormControl.Label>
                      <Input />

                      <FormControl.Label>Description:</FormControl.Label>
                      <TextArea />
                  </FormControl>
              </Modal.Body>
              <Modal.Footer>
                  <Button.Group space="sm">
                      <Button variant="ghost" colorScheme="blueGray"
                              onPress={() => setShowAddNote(false)}>Cancel</Button>
                      <Button onPress={() => setShowAddNote(false)}>Save</Button>
                  </Button.Group>
              </Modal.Footer>
          </Modal.Content>
      </Modal>
  );
};

export default AddNoteModal;
