import React from 'react';
import {Box, Center, Heading} from "native-base";

const Header = ({title}) => {
  return (
    <Box bg="white" justifyContent="center" height={55} rounded={50} m={5} mb={2} shadow={6}>
        <Center>
            <Heading color="primary.800">{title}</Heading>
        </Center>
    </Box>
  );
};

export default Header;
