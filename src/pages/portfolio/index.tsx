import { Box, Button, Heading, HStack, Text } from '@chakra-ui/react';
import Bread from '@/pages/bread/index';
import axios from 'axios';
import { useState } from 'react';

function Page() {
  const [name, setName] = useState('');
  const [postName, setPostName] = useState('');

  const getHandler = async () => {
    const data = await axios.get('./api/hello');

    setName(`Response: ${data.data.name}`);
  };

  const postHandler = async () => {
    const data = await axios.get('./api/postHello');

    setPostName(`Response: ${data.data.name}`);
  };
  return (
    <Box bg="white" px="15px" py="5px">
      <Bread title="Portfolio" />
      <Heading color="orange.400">Portfolio</Heading>
      <HStack>
        <Box>
          <Button onClick={getHandler}>Test Button</Button>
          <Text>{name}</Text>
        </Box>
        <Box>
          <Button onClick={postHandler}>Test Button</Button>
          <Text>{postName}</Text>
        </Box>
      </HStack>
    </Box>
  );
}

export default Page;
