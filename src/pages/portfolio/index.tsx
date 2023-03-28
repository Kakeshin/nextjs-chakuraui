import { Box, Heading } from '@chakra-ui/react';
import Bread from '@/pages/bread/index';
import { useState } from 'react';
import axios from 'axios';

function Page() {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const handler = async () => {
    const data = await axios.get('./api/github');
    setLink(data.data.res.html_link);
    setName(data.data.res.name);
  };

  handler();

  return (
    <Box>
      <Bread title="Portfolio" />
      <Heading>{name}</Heading>
      <Heading>{link}</Heading>
    </Box>
  );
}

export default Page;
