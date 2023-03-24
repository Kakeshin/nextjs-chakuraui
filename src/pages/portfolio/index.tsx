import { Box, Button, Heading, Text } from '@chakra-ui/react';
import Bread from '@/pages/bread/index';
import axios from 'axios';
import { useState } from 'react';

function Page() {
  const [name, setName] = useState('');

  const handler = async () => {
    const data = await axios.get('./api/hello');

    setName(`Response: ${data.data.name}`);
  };
  return (
    <Box bg="white" px="15px" py="5px">
      <Bread title="Portfolio" />
      <Heading color="orange.400">Portfolio</Heading>
      <Button onClick={handler}>Test Button</Button>
      <Text>{name}</Text>
    </Box>
  );
}

export default Page;
