import React from 'react';
import {Box, Text, TextArea} from "native-base";

const Note = ({ item }) => {
  return (
      <Box
          rounded="lg"
          mx={5} my={2}
          borderWidth={1} borderColor="coolGray.600"
          bg={item.color}
      >
          <Text>{item.title}</Text>
          <TextArea>{item.description}</TextArea>
          <Text>{item.time}</Text>
      </Box>
  );
};

export default Note;
